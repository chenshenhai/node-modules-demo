let modIndex = 1;
for ( let i = 1; i<=2; i++ ) {
    let mod = require(`./mod-${i}.js`);
    mod.increase();
    console.log(mod.num);
}