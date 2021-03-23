export default {
  state: {
    id: '1',
    username: 'CatCian'
  },
  reducers: {
    getUser(state, payload) {
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: {
    async getUserAsync(dispatch, rootState, payload) {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
      dispatch({
        type: 'getUser',
        payload
      })
    }
  }
}