// IIFE
var firstname = 'John';

(function(globeObj,name) {
    
    var greetmsg = 'Hello';
    globeObj.greetmsg = 'Hello';
    console.log(greetmsg + ' ' + name);
    
}(window,firstname)); // IIFE

console.log(greetmsg);





















