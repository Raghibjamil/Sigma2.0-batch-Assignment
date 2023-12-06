const fs=require("fs");
fs.appendFileSync("./nodejs_architecture.txt","Node.js offers high performance, scalability, and efficiency by using a non-blocking, event-driven architecture. It's ideal for building real-time applications, handling concurrent connections effortlessly, and sharing code between the server and client in JavaScript.");
console.log("Append data in previous txt file:-"+fs.readFileSync("./nodejs_architecture.txt"));
