export default {
  namespace: 'search',
  state: {
    text: 'dva',
    lists: [1,2,3]
  },
  reducers: {
    getLists (state, action) {
      console.log('reducers.getLists', state, action)
      return {
        ...state,
        lists: Array(10).fill(action.payload)
      }
    }
  },
  effects: {
    *getListsAsync ({ payload }, { call, put }) {
      yield put({
        type: 'getLists',
        payload
      })
    }
  }
}