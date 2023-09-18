

function manipulateString(str,logString)
{
    return logString(str)
}
function logString(str)
{
        return str.toUpperCase();
}

console.log( `the manipulated string is :-${manipulateString('raghib jamil',logString)}`)
