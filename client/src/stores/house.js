import Http from '../utils/http';
import { CommonEnum } from '@/enums';

const handleOrders = async (url, dispatch, payload) => {
  const result = await Http({
    url,
    body: payload
  })
  dispatch({
    type: 'setOrders',
    payload: result,
  })
}
export default {
  state: {
    detail: {},
    comments: [],
    showLoading: true,
    page: CommonEnum.PAGE,
    reloadCommentsNum: 0,
    order: null,
  },
  reducers: {
    getDetail(state, payload) {
      return {
        ...state,
        detail: payload,
      };
    },

    getComments(state, payload) {
      return {
        ...state,
        comments: payload,
      };
    },

    setShowLoading(state, payload) {
      return {
        ...state,
        showLoading: payload,
      };
    },

    reloadComments(state, payload) {
      return {
        ...state,
        page: {
          pageSize: state.page.pageSize,
          pageNum: state.page.pageNum + 1,
        },
        reloadCommentsNum: state.reloadCommentsNum + 1,
      };
    },

    resetData(state, payload) {
      return {
        ...state,
        // detail: {},
        comments: [],
        showLoading: true,
        page: CommonEnum.PAGE,
        reloadCommentsNum: -1,
        ...payload,
      };
    },

    setOrders(state, payload) {
      return {
        ...state,
        order: payload,
      }
    }
  },
  effects: {
    async getDetailAsync(dispatch, rootState, payload) {
      const detail = await Http({
        url: '/house/detail',
        body: payload,
      });
      dispatch({
        type: 'getDetail',
        payload: detail,
      });
    },

    async getCommentsAsync(dispatch, rootState, payload) {
      const { comments, page } = rootState.house;
      const lists = await Http({
        url: '/comment/lists',
        body: {
          ...payload,
          pageSize: page.pageSize,
          pageNum: page.pageNum,
        },
      });
      dispatch({
        type: 'getComments',
        payload: [...comments, ...lists],
      });
      dispatch({
        type: 'setShowLoading',
        payload: lists.length ? true : false,
      });
    },

    async addCommentsAsync(dispatch, rootState, payload) {
      const result = await Http({
        url: '/comment/add',
        body: payload,
      });
      if (result) {
        dispatch({
          type: 'resetData',
          payload: {},
        });
      }
    },

    async hasOrdersAsync(dispatch, rootState, payload) {
      await handleOrders('/orders/hasOrder', dispatch, payload)
    },

    async addOrdersAsync(dispatch, rootState, payload) {
      await handleOrders('/orders/addOrder', dispatch, payload)
    },

    async delOrderAsync(dispatch, rootState, payload) {
      await handleOrders('/orders/delOrder', dispatch, payload)
    }
  },
};
