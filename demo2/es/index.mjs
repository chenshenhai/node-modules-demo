let modIndex = 1;
for ( let i = 1; i<=2; i++ ) {
    import mod from `./mod-${i}.js`;
    mod.increase();
    console.log(mod.num);
}