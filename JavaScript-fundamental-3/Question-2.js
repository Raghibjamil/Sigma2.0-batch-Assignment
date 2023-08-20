
/** object is non -primitive data type means it always pass refrence ....
 * if we change some thing in reference pass object then the effect will updated later calling or access the object...
 */


let studentprofile={
    name:"Raghib",
    age:18,
    grade:9
}

function students(detail)
{
    console.log(detail);

    detail.grade=10;
    console.log(detail);
  
}

students(studentprofile);