import Koa from 'koa';
import { render } from './lib/render.js';

let app = new Koa();
app.use((ctx, next) => {
    let view = ctx.url.substr(1);
    ctx.body = render(view);
})
app.listen(3000, ()=>{
    console.log('the modules test server is starting');
})


 