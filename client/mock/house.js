import houses from '../src/pages/home/components/hot/mock.json';

export default {
  'POST /api/house/search': (req, res) => {
    let data;
    if (req.body.pageNum < 4) {
      data = houses;
    } else {
      data = [];
    }
    setTimeout(() => {
      res.json({
        status: 200,
        data,
      });
    }, 500);
  },

  'POST /api/house/detail': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 8,
        banner: [
          'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
          'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg',
          'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
        ],
        info: {
          title: '老城民宿',
          msg: '老城区风景秀美',
          price: '220',
          publishTime: 1595238771000,
          startTime: 1595238771000,
          endTime: 1597917171000,
        },
      },
    });
  },
};
