import orders from '../src/pages/order/mock/orders.json';

export default {
  'POST /api/order/lists': (req, res) => {
    setTimeout(() => {
      let data;
      if (req.body.pageNum < 4) {
        // data = orders.slice(7);
        data = orders;
      } else {
        data = [];
      }
      res.json({
        status: 200,
        data,
      });
    }, 500);
  },
};
