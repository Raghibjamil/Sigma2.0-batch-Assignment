const itemsInUSD = {
    bat: 150,
    ball: 10,
    pads: 50,
    gloves: 40,
    helmet: 60,
    shoes: 80,
  };
//   console.log(typeof itemsInUSD.bat); this is number datatype 
const newiteminRupee={};

let result=Object.keys(itemsInUSD).map((item)=>{
    let changevalue=itemsInUSD[item]*80;
    // console.log(typeof item); this is string data type so we can access the object value through [] .
    // console.log(changevalue);
    // console.log(item);
    newiteminRupee[item]=changevalue;
    // console.log(newiteminRupee); adding new object name and value inside the new object....
    
});
console.log('after changing the value of object in INR:-');
console.log(newiteminRupee);



