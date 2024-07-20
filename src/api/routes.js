const express = require('express');
const signupRoute = require('./signup/SignupRouter');

const router = express.Router();

const apiRoutes = [
    {
      path: '/signup',
      route: signupRoute,
    }
];

apiRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports=router