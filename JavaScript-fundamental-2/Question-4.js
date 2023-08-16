/*
for max value we can use this one=The Number.MAX_SAFE_INTEGER static data property represents the maximum safe integer in JavaScript (253 – 1).*/ 
/* for min value ,we can use this one=The Number.MIN_SAFE_INTEGER static data property represents the minimum safe integer in JavaScript, or -(253 - 1).

*/

const products=[{name:"Laptop",price:120000},
                {name:"Mobile",price:70000},
                {name:"Laptop Bag",price:20000},
                    {name:"Watch",price:20000},
                    { name:"Mobile Charger",price:1500}];
        function pricelist(pricearray){
            let min=0;
            let max=999999;
            let maxproduct;
            let minproduct;
            for(let i=0;i<pricearray.length;i++)
            {
                if(pricearray[i].price>min)
                {
                    min=pricearray[i].price;
                    maxproduct=pricearray[i].name;
                }
                if(pricearray[i].price<max)
                {
                    max=pricearray[i].price;
                    minproduct=pricearray[i].name;
                    
                }
            }
            console.log(`The product with maximum amount is ${maxproduct} which priced at Rs. ${min} `);
            console.log(`The product with minimum amount is ${minproduct} which priced at Rs. ${max}`);
            
        }
        pricelist(products);