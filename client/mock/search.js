import houses from '../src/pages/home/components/hot/mock.json';

export default {
  'POST /api/house/search': (req, res) => {
    setTimeout(() => {
      res.json({
        status: 200,
        data: houses,
      });
    }, 500);
  },
};
