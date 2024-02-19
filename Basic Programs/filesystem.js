const om = require('fs');
// console.log(om);

const first = om.readFileSync(`./Basic Programs/content/subfolder/first.txt`,'utf-8');
console.log(first);
const second = om.readFileSync(`./Basic Programs/content/subfolder/second.txt`,`utf-8`);
console.log(second);

om.writeFileSync(`./Basic Programs/content/subfolder/result.txt`,`I can write in files and also add first file as here :  ${first} and second file as here : ${second}`);


// console.log(first , second);