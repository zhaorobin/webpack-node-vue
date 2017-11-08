/**
 *
 * author robin.zhao
 * time 2017-11-06
 *
 */

const fs = require('fs');

/**
 *
 * 用Promise封装异步读取文件方法
 * @param  {string} page html文件名称
 * @return {promise}
 *
 */

function render( page ) {
    return new Promise(( resolve, reject ) => {
        let viewUrl = `./public/${page}`
        viewUrl = fs.existsSync(viewUrl) ? viewUrl : './public/404.html';
        fs.readFile(viewUrl, "utf-8", ( err, data ) => {
            if ( err ) {
                reject( err )
            } else {
                resolve( data )
            }
        })
    })
}

module.exports = function () {
    return async function(ctx, next) {
        ctx.render = async function(page) {
            if (page.length==0) {
                page = 'index.html';
            }
            const html = await render( page )
            return html
        }
        await next();
    }
}
