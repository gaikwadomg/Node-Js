const om = require('fs');
// console.log(om);

// here we use haptics instead of double or single quotes 
const first = om.readFileSync(`./Basic Programs/content/subfolder/first.txt`,'utf-8');
console.log(first);
const second = om.readFileSync(`./Basic Programs/content/subfolder/second.txt`,`utf-8`);
console.log(second);

om.writeFileSync(
    `./Basic Programs/content/subfolder/result.txt`,
    `I can write in files and also add first file as here :  ${first} and second file as here : ${second}`,
    {flag:'a'}

    // by default using this method if there is already some content in file then it is overrided by new content to avoide this one can use {flag :'a'} object
);


// console.log(first , second);