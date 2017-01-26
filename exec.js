const child_process = require('child_process');

var name = "noob manasvi";

var workerProcess = child_process.exec('python myPython.py',function(error,stdout,stderr){
	if(error){
		console.log("error->",error);
	}
	console.log("stdout->",stdout);
	console.log("stderr->",stderr);
});

workerProcess.on('exit',function(code){
	console.log("Child process returned with an exit code of->",code);
});