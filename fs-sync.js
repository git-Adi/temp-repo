const {readFileSync,writeFileSync} = require('fs')
console.log('start')
const first =readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

// console.log(first,second);

writeFileSync('./content/result-sync.txt','Here is the result :'+first+second,{flag:'a'})

console.log('done with the task')
console.log('start the new task')

// while with the case with file-sync everything works synchronously form start -> done -> starting with the newtask.