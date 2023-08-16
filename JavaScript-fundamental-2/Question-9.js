function uniquecharacterCheck(para)
{
    let value=new String(para);
    let para1=new String(para);
    let j=0;
   
   

   for(var i=0;i<value.length;i++)
   {    
    j++;
    
    for( j;j<para1.length;j++)
    {
        
        if(value.charAt(i)===para1.charAt(j))
        {
            console.log(`The String contains duplicate value`);
            
           return;
            
        }
     
    }
       
   }
  console.log(`The String contains Unique character`);







}

  value=uniquecharacterCheck("anurg");
 

  // if loop run n times then its time complexity goes to O(n^2).....