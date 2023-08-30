
// The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of this string.



// function updaterTime()
// {
//     let currentTime=new Date();
//     let hours=currentTime.getHours().toString().padStart(2,'0');
//     let minutes=currentTime.getMinutes().toString().padStart(2,'0');
//     let seconds=currentTime.getSeconds().toString().padStart(2,'0');

//     let hexcode=`#${hours}${minutes}${seconds}`;

//     document.getElementById('hours').innerText=hours;
//     document.getElementById('minutes').innerText=minutes;
//     document.getElementById('second').innerText=seconds;

//     document.body.style.backgroundColor=hexcode;
    
// }
// setInterval(updaterTime,1000);


// both code are right we can use any one them for this is sitution or (Question).......

setInterval((updateTime)=>{
let currentTime=new Date();
    let hours=currentTime.getHours().toString().padStart(2,'0');
    let minutes=currentTime.getMinutes().toString().padStart(2,'0');
    let seconds=currentTime.getSeconds().toString().padStart(2,'0');

    let hexcode=`#${hours}${minutes}${seconds}`;

    document.getElementById('hours').innerText=hours;
    document.getElementById('minutes').innerText=minutes;
    document.getElementById('second').innerText=seconds;

    document.body.style.backgroundColor=hexcode;
},1000)

