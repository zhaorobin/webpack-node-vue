const router = require('koa-router')();
const path = require('path');

module.exports = router.post('/register', async (ctx) => {
    let data = ctx.request.body;
    ctx.body = data;
}).post('/login', async (ctx) => {
    let data = ctx.request.body;
    ctx.body = data;
})
