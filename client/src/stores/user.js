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
        const from = urlGet('from')
        cookie.set('user', result)
        Toast.success('登陆成功')
        setTimeout(() => {
          history.push(from);
        }, 1500)
      }
    },
    async registerAsync(dispatch, rootState, payload) {
      const result = await Http({
        url: '/user/register',
        body: payload
      })
      if (result) {
        const from = urlGet('from')
        cookie.set('user', result)
        Toast.success('注册成功')
        setTimeout(() => {
          history.push(from);
        }, 1500)
      }
    }
  },
};
