async function combine_func()
{
    try {
        let todo=await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let result_todo=await todo.json();
        let post= await fetch("https://jsonplaceholder.typicode.com/posts/1" )
        let result_post= await post.json();
       let resultobj={todo:result_todo,post:result_post}
    console.log(resultobj);
    } catch (error) {
        console.log(`this error come from server side :- ${error}`);
        
    }
    
        
}

combine_func()