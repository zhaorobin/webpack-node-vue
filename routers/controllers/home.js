const router = require('koa-router')();
const path = require('path');

module.exports = router.get('/', async (ctx) => {
    let url = path.basename(ctx.path);
    let html = await ctx.render( url )
    ctx.body = html;
}).get('404.html', async (ctx) => {
    let url = path.basename(ctx.path);
    let html = await ctx.render( url )
    ctx.body = html;
}).get('*', async (ctx) => {
    return ctx.redirect('/404.html');
})
