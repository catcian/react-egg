import { Http } from '@/utils';
import { Toast } from 'antd-mobile';
import { history } from 'umi';
import { cookie, urlGet } from 'project-libs'
export default {
  state: {
    id: undefined,
    username: undefined,
    avatar: undefined,
    tel: undefined,
    sign: undefined,
    uploadPath: '',
  },
  reducers: {
    getUser(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },

    editUser(state, payload) {
      return {
        ...state,
      };
    },

    getUploadPath(state, payload) {
      return {
        ...state,
        uploadPath: payload
      }
    }
    
  },
  effects: {

    async getUserAsync(dispatch, rootState, payload) {
      const user = await Http({
        url: '/user/detail',
        body: payload,
      });
      if (user) {
        dispatch({
          type: 'getUser',
          payload: user,
        });
      } 
    },

    async editUserAsync(dispatch, rootState, payload) {
      console.log(payload)
      const result = await Http({
        url: '/user/edit',
        body: payload,
      });
      if (result) {
        Toast.success('编辑成功');
        setTimeout(() => {
          history.push('/user');
        }, 1500)
      }
    },

    async loginAsync(dispatch, rootState, payload) {
      const result = await Http({
        url: '/user/login',
        body: payload
      })
      if (result) {
        localStorage.setItem('token', result.token)
        localStorage.setItem('username', result.username)
        const fromPath = urlGet('from')
        let query = {}
        if (fromPath === '/house') {
          query = {
            id: urlGet('id')
          }
        }
        Toast.success('登陆成功')
        setTimeout(() => {
          history.push({
            pathname:fromPath || "/",
            query
          });
        }, 1500)
      }
    },

    async registerAsync(dispatch, rootState, payload) {
      const result = await Http({
        url: '/user/register',
        body: payload
      })
      if (result) {
        localStorage.setItem('token', result.token)
        localStorage.setItem('usernname', result.username)
        const hash = location.hash.split('?')[0].substring(1)
        Toast.success('注册成功')
        setTimeout(() => {
          history.push('/');
        }, 1500)
      }
    },

    async logoutAsync(dispatch, rootState, payload) {
      const result = await Http({
        url: '/user/logout',
        body: payload
      })
      if (result) {
        localStorage.clear()
        Toast.success('退出成功')
        const hash = location.hash.split('?')[0].substring(1)
        setTimeout(() => {
          history.push({
            pathname: '/',
          })
        }, 1500)
      }
    },

    async uploadAsync(dispatch, rootState, payload) {
      const result = await Http({
        url: '/commons/upload',
        body: payload
      })

      dispatch({
        type: 'getUploadPath',
        payload: result
      })
    }

  },
};
