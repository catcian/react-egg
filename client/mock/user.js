export default {
  'POST /api/user/detail': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 10,
        username: 'CatCian',
        avatar: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
        tel: '15319175131',
        sign: '及时当勉励，岁月不待人',
      },
    });
  },
  'POST /api/user/edit': (req, res) => {
    res.json({
      status: 200,
      data: 'ok',
    });
  },
  'POST /api/user/login': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 10,
        username: 'CatCian',
      },
    });
  },
  'POST /api/user/register': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 10,
        username: 'CatCian',
      },
    });
  },
};
