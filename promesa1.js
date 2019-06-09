const fs = require('fs');

let pato=new Promise((resolve, reject)=>
	fs.readFile(process.argv[2], 'utf8',
	(err,data)=> !err ? resolve(data):reject(err))
)
.then(data=> console.log("FILE:\n" + data))
.catch(err=> console.log("error\n:"+ err))

