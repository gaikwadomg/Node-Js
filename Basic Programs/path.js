const path = require("path");

// console.log(path);
console.log(path.sep);

const filePath = path.join('/Basic Programs','content','subfolder','test.txt');
console.log(filePath);

// getting base name using basename method 

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname , "/Basic Programs","Content","subfolder","test.txt");
console.log(absolute);


