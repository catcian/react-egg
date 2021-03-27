import citys from '../src/pages/home/components/search/citys.json';
import houses from '../src/pages/home/components/hot/mock.json';

export default {
  'POST /api/commons/citys': (req, res) => {
    res.json({
      status: 200,
      data: citys,
    });
  },
  'POST /api/house/hot': (req, res) => {
    res.json({
      status: 200,
      data: houses,
    });
  },
};
