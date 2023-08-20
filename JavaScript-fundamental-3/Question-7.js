/**mail is unique value that why we are manipulating through the mail id  */


let main_Map=new Map();
function user_adding(map,name,age,mail)
{
    map.set(mail,[name,age,mail])
}

function updating(map,name,age,mail)
{
  let user=map.get(mail)
  user[0]=name;
  user[1]=age;
}

function deleting(map,mail)
{
      map.delete(mail);
}
user_adding(main_Map,'Raghib',18,'rag155@gmail.com')

user_adding(main_Map,"jamil",19,'jamil12@gmail.com')
console.log(main_Map);
updating(main_Map,"faisal",4,'rag155@gmail.com')
console.log(main_Map);
deleting(main_Map,'rag155@gmail.com')
console.log(main_Map);


