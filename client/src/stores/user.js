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
        console.log(fromPath)
        Toast.success('登陆成功')
        setTimeout(() => {
          history.push(fromPath);
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
        localStorage.setItem('usernname', result.usernname)
        const fromPath = urlGet('from')
        Toast.success('注册成功')
        setTimeout(() => {
          history.push(fromPath);
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
        setTimeout(() => {
          history.push({
            pathname: '/login',
            query: {
              from: location.pathname
            }
          })
        }, 1500)
      }
    }
  },
};
