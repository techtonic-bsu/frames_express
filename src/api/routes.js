const express = require('express');
const historyRoute = require('./history/HistoryRouter');
const signupRoute = require('./signup/SignupRouter');

const router = express.Router();

const apiRoutes = [
    {
      path: '/signup',
      route: signupRoute,
    },
    {
      path: '/history',
      route: historyRoute,
    },
];

apiRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports=router