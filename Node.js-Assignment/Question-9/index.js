const EventEmitter = require('events');

// Create a new instance of EventEmitter
const myEmitter = new EventEmitter();
const eventhandler=(data)=>{
    console.log("thanks for subscribing "+data+"!!")
}

// myEmitter.on("subscribe");
myEmitter.on(eventhandler);

myEmitter.emit("subscribe","college wallah")
