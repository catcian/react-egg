export default {
  'GET /api/getLists': {
    lists: ['react', 'dva', 'umi']
  },
  'GET /api/getListsAsync': (req, res) => {
    // 支持异步
    setTimeout(() => {
      res.json({
        lists: ['umi', 'dva', 'react']
      })
    }, 3000)
  }
}