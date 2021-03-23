export default {
  'GET /api/getLists': {
    lists: ['react', 'dva', 'umi']
  },
  'GET /api/getListsAsync': (req, res) => {
    // 支持异步
    // setTimeout(() => {
      res.json({
        status: 200,
        data: {
          lists: ['umi', 'dva', 'react'],
        },
        Msg: 'status code 500'
      })
    // }, 3000)
  }
}