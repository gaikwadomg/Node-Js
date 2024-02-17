const os = require("os");

//  getting info about current user 
const user = os.userInfo();
console.log(user);

// method to return syatem uptyle
console.log(`system uptime is : ${os.uptime()}`);

// other methods of os module 

const currentOs={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentOs);