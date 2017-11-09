const router = require('koa-router')();
const path = require('path');

module.exports = router.get('/user.json', async (ctx) => {
    let data = {
        'name': 'jack',
        'age': '20'
    }
    ctx.body = data;
}).post('/test', async (ctx) => {
    let data = {
        'message': 'success'
    }
    ctx.body = data;
})
