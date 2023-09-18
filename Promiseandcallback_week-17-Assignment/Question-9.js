async function func(){

 try {
    let data=await fetch('https://jsonplaceholder.typicode.com/posts/123456789')
    let datajson=await data.json();
    console.log(datajson);
 } catch (error) {
    console.log(error);
 }
      
}


document.body.innerHTML=`<p>${func()}</p>`

