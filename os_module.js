const os = require('os')

const user =os.userInfo();
console.log(user);
console.log ("The system is up for "+os.uptime()+" seconds");
const currentos ={
    name:os.type(),
    release :os.release(),
    totmem:os.totalmem(),
    leftmem :os.freemem()
}

console.log("System information"+JSON.stringify(currentos));