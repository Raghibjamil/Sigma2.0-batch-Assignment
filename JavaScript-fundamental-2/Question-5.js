const guest=["Anurag","Mithun","Alka","Prabir","Shivam","Farman"];
function guestlist(guestname)
{
    let stringlist=guestname.join(", ");
    return stringlist;
}


let stringvalue=guestlist(guest);
console.log(stringvalue);
/*The join() method returns an array as a string.

The join() method does not change the original array.

Any separator can be specified. The default is comma (,).*/