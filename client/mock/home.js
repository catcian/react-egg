import citys from '../src/pages/home/components/search/citys.json';
import houses from '../src/pages/home/components/hot/mock.json';

export default {
  'GET /api/commons/citys': (req, res) => {
    res.json({
      status: 200,
      data: citys,
    });
  },
  'GET /api/house/hot': (req, res) => {
    res.json({
      status: 200,
      data: houses,
    });
  },
};
