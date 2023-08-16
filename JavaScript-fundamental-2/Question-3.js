

function resultFilter(studentName)
{
    let value=false;
    const student=[{name:"Mithun",marks:95},
                {name:"prabir",marks:75},
                {name:"Alka",marks:92},
                {name:"shivam",marks:70},
                {name:"farman",marks:99}];

for(var i=0;i<student.length;i++)
{
    if(student[i].name===studentName&&student[i].marks>90)
    {
        console.log(`Conguralation,${student[i].name} ! You clear Your exam.`);
        value=true;
        break;
    }
    else if(student[i].name===studentName&&student[i].marks<90)
    {
        console.log(`Sorry,${student[i].name} ! You  have not clear Your exam.`);
        value=true;
        break;
    }


    // else{
    //      if(student[i].name===studentName&&student[i].marks<90)
    // {
    //     console.log(`Sorry,${student[i].name} ! You  have not clear Your exam.`);
    //     value=true;
    //     break;
    // }
    // }
}
if(!value)
{
    console.log("invalid username");
}

}

resultFilter("shivam");