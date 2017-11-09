const router = require('koa-router')();

const home = require('./controllers/home');
const api = require('./controllers/api');
const user = require('./controllers/user');

router.use('/api', api.routes(), api.allowedMethods());
router.use('/user', user.routes(), user.allowedMethods());
router.use('/', home.routes(), home.allowedMethods());


module.exports = router;
