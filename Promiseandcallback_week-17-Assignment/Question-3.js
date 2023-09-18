let username={
    firstname:'Raghib',
    lastname:'jamil',
    age:18
}

function ageInDays(username,logResult)
{
        return logResult(username)
}

function logResult({firstname,lastname,age})
{
    let fullname=firstname.concat(" ",lastname)
    let ageInDays=age*365;
        return [fullname,ageInDays]

}

let arr=ageInDays(username,logResult);
console.log(`The person's full name is ${arr[0]} and their age in days is ${arr[1]}`);