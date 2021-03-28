import houses from '../src/pages/home/components/hot/mock.json';

export default {
  'POST /api/house/search': (req, res) => {
    console.log(req)
    let data
    if (req.body.pageNum < 4) {
      data = houses
    } else {
      data = []
    }
    setTimeout(() => {
      res.json({
        status: 200,
        data,
      });
    }, 500);
  },
};
