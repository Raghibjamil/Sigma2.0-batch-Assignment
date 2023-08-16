/**The Date() constructor creates Date objects. When called as a function, it returns a string representing the current time. */
/**Date objects encapsulate an integral number that represents milliseconds  */
/**The Math.floor() method returns the smallest integer greater than or equal to the given number. */
/**getTime() returns the number of milliseconds since January 1, 1970 00:00:00. */

/**You can use Date.now() to get the current time in milliseconds, then subtract a previous time to find out how much time elapsed between the two calls. */

// let eventdate="2023-08-31";
// let currdate=new Date();
// // console.log(currdate.toLocaleDateString());
// console.log(currdate.getTime());
// // console.log(currdate.getMilliseconds());

// let eventdatevalue=new Date(eventdate);
// // console.log(eventdatevalue.toLocaleDateString());
// console.log(eventdatevalue.getTime());
// let result=eventdatevalue-currdate;
// console.log(result);

// let days=Math.floor(result/(1000*60*60*24));
// console.log(days);


//============================Question-8=======================

let eventdate='2023-08-31';
function datecal(eventdate)
{
    let currdate=new Date();
    let eventdates=new Date(eventdate);
    let currmilisecond=currdate.getTime();
    let eventmilisecond=eventdates.getTime();
    // console.log(currmilisecond);
    // console.log(eventmilisecond);

    let result=Math.abs(eventmilisecond-currmilisecond);
        let days=Math.floor(result/(1000*60*60*24));
       return days;

}

valueresultdate=datecal(eventdate);
console.log("days left in between event:-",valueresultdate);

