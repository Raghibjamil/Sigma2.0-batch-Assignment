function genaraterfunc()
{
    let number='undifine';
    let delay=3;
    console.log(`${delay} sec delay`);
    setTimeout(()=>{
        number=Math.floor((Math.random()*100)+1);
    },delay*1000);

    let checkinterval=setInterval(()=>{

        if(number==='undifine')
        {
            delay--;
            console.log(`${delay} sec delay`);
           
        }
        else{
            console.log(`Random number is ${number}`);
            clearInterval(checkinterval);
        }
       

    },1000)
}
genaraterfunc();