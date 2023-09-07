function blockScope()
{
    console.log(a);
    console.log(b);
    console.log(c);
    
    let a='let variable';
    var b='var variable';
    const c='const variable'
    console.log(a);
    console.log(b);
    console.log(c);
}
blockScope();