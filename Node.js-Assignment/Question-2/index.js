const fs=require("fs");
const information="Node.js is a runtime environment that enables server-side JavaScript execution. It's event-driven and non-blocking, allowing efficient handling of concurrent connections. Widely used for building scalable and fast network applications, it's based on the V8 JavaScript engine."
fs.writeFile("nodejs_architecture.txt",information,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("write")
})

console.log("we are writing something inside the file using asyn method:-")