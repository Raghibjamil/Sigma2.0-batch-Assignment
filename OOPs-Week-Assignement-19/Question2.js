class Student{
    constructor(name,id){
        this.name=name;
        this.id=id;
        this.enrolledcourse=[]
    }
    enrollingCourse(coursename){
        this.enrolledcourse.push(coursename);
        // console.log(`${this.name}  enrolled course is ${coursename}`)
    }
    display_enrolledcourse(){
        for(let course of this.enrolledcourse){
            console.log(`${this.name} enrolled course :- ${course}`);
        }
    }
}


class Addmision {
    constructor()
{
    
   
    this.enrolledstudent=[];
}
    enrolled_student(student){
        this.enrolledstudent.push(student)
        // console.log(this.enrolledstudent);
        console.log(`${student.name} has been enrolled .`);
    }

    course_addmision(student){
        for(let course of student.enrolledcourse){
            console.log(`${student.name} has enrolled in ${course}`);
        }

    }
    show_enrolledstudent(){
        console.log('Enrolled student:-')
         for(let i of this.enrolledstudent ){
            console.log(` - ${i.name}   (${i.id})`)
         }
    }
}




const st=new Student('raghib','raghib@125.com')
console.log(st);
st.enrollingCourse('web development')
st.enrollingCourse('data science')
console.log(st);
st.display_enrolledcourse()

const newAddmision=new Addmision();
newAddmision.enrolled_student(st)

newAddmision.course_addmision(st)
console.log(newAddmision)
newAddmision.show_enrolledstudent()

