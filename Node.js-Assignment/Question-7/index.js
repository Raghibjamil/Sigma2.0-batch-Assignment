const server=require("http");
const startserver=server.createServer((req,res)=>{
    if(req.url == "/pw"){
        res.write("<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>");
        res.end();
    }
    else{
        res.writeHead(404);
        // res.write("404")
        res.end();
    }
});
startserver.listen(8000,(err)=>{
    console.log("server started !!!");
});
