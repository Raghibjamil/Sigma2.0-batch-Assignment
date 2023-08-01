    /*
        
In JavaScript, you cannot use a keyword to directly pass an argument inside a function. Arguments are typically passed as values or references, depending on whether the data type is a primitive or an object. 
    */

/*if we do not use break then it will terminate through the execution case it contineously execute till another break keyword!!!!
*/
function estimateDelivery(deliveryTime) {
    switch (deliveryTime) {
        case "standard":
            console.log("delivery might take 3-5 days");
            break;
        case "express":
            console.log("delivery might take 1-2 days ");
            break;
            case "overnight":
                console.log("delivery would be delivered the next day");
                break;
        default:
            console.log("delivery can't deliver to this pin code !");
            break;
    }
    
}
estimateDelivery("standard");