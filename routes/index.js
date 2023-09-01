const express = require('express');
const authRoute = require('./auth.route');
const accountRoute = require('./account.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/accounts',
    route: accountRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'flutterwave Backend Assessment' });
});

module.exports = router;
