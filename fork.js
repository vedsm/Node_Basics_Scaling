const child_process = require("child_process");

var workerProcess = child_process.fork("work.js",["stud ved"]);

workerProcess.on('close',function(code){
	console.log("child process exited with code->",code);
})