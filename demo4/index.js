import Koa from 'koa';

let app = new Koa();
app.use((ctx, next) => {
    ctx.body = 'my koa';
})
app.listen(3000, ()=>{
    console.log('the modules test server is starting');
})