const Mod1 = require('./mod-1');
const Mod2 = require('./mod-2');

console.log(`Mod1.num = ${Mod1.num}`)
Mod1.increase();
console.log(`Mod1.num = ${Mod1.num}`)
Mod2.increase();
console.log(`Mod1.num = ${Mod1.num}`)
Mod1.num ++;
console.log(`Mod1.num = ${Mod1.num}`) 