const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Determine the current maximum number of listeners
const currentMaxListeners = myEmitter.getMaxListeners();
console.log('Current max listeners:', currentMaxListeners);

// Set the maximum number of listeners to 5
myEmitter.setMaxListeners(5);

// Now the maximum number of listeners is 5 for this EventEmitter
console.log('Updated max listeners:', myEmitter.getMaxListeners());


/**
 * Note:-
 * getMaxListeners: This method returns the current maximum number of listeners for the event emitter.

    setMaxListeners: This method allows you to set the maximum number of listeners for the event emitter.
 */

