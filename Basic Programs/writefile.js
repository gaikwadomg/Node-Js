const om = require('fs');

om.readFile(
    './Basic Programs/content/om.txt',
    'utf8',
    (err,result) =>{
        if(err){
                console.log(err);
                return
        } 
        console.log(result);
    }
);