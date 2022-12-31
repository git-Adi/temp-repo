const {readFile,writeFile, read} = require('fs')

console.log('start')
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result;
    readFile('./content/second.txt','utf8',(err,result1)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result1
        writeFile('./content/result-async.txt','Here is the result :'+first+second,(err,result2)=>{
            if(err){
                console.log(err)
                return
            }
            // console.log(result2)
            console.log('done with the task')
        })
    })
})

console.log('starting the new task')
// its just like Os input output got postponed while the other thread starts working until its done the i/o waits and then gain the ocntrol.
