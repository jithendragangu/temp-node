const {readFileSync,writeFileSync } =require('fs')

// const fs = require('fs')
// fs.readFileSync()

// const fs = require('fs');
// console.log(fs);


const first =readFileSync('./content/first.txt','utf8');
const secound =readFileSync('./content/secound.txt','utf8');

console.log(first,secound); 
writeFileSync('./content/result-sync.txt',
`Here is the result : ${first},${secound}`,{flag:'a'})