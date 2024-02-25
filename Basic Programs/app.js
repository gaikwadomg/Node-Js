const om = require('fs');

for(i =0 ; i <10000000 ; i++) {
    om.writeFileSync(`./kk.txt`,'I can create file',{flag:'a'});
}