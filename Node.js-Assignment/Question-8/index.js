const EventEmitter = require('events');

// Create a new instance of EventEmitter
const myEmitter = new EventEmitter();

myEmitter.on("subscribe",(data)=>{
    console.log("thanks for subscribing "+data+"!!")
})

myEmitter.emit("subscribe","college wallah");
