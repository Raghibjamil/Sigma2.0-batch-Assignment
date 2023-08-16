let sentence ='please please submit your assignment on time, your assignments are important';

/**==set()=Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated. */

/**==get() = Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.*/
// Map is not object....

function wordcounter(sentence)
{
    let arr=sentence.split(" ");
    // console.log(arr);
    let arrmap=new Map();
    console.log(arrmap);
    for(let val of arr)
    {
       if(arrmap.has(val))
       {
            arrmap.set(val,(arrmap.get(val))+1);
       }
       else
       {
        arrmap.set(val,1);
       }
    }
    console.log(arrmap);
    
}


wordcounter(sentence);





 