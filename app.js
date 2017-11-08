/**
 *
 * author robin.zhao
 * time 2017-11-06
 *
 */
const koa = require('koa');
const path = require('path');
const convert = require('koa-convert');
const logger = require('koa-logger');
const render  = require('./middlewares/render');
const router = require('./routers/index');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const app = new koa();

app.use(convert(logger()));
app.use(render());

const staticPath = './public';

app.use(bodyParser());

app.use(convert(static(
  path.join(__dirname, staticPath)
)));

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('Start-quick is starting at port 3000');
});
