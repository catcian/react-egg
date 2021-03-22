import { getLists } from '@/services/search'

export default {
  namespace: 'search',
  state: {
    text: 'dva',
    lists: [1,2,3]
  },
  reducers: {
    getLists (state, action) {
      // console.log('reducers.getLists', state, action)
      return {
        ...state,
        // lists: Array(10).fill(action.payload)
        lists: action.payload
      }
    }
  },
  effects: {
    *getListsAsync ({ payload }, { call, put }) {
      const res = yield call(getLists, payload)
      yield put({
        type: 'getLists',
        payload: res.lists
      })
    }
  }
}