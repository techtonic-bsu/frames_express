const express = require('express');
const historyRouter = require('./history/HistoryRouter');
const signupRouter = require('./signup/SignupRouter');
const encodingRouter = require('./encoding/EncodingRouter');

const router = express.Router();

const apiRoutes = [
    {
      path: '/signup',
      route: signupRouter,
    },
    {
      path: '/history',
      route: historyRouter,
    },
    {
      path: '/encoding',
      route: encodingRouter,
    },
];

apiRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports=router