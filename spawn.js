const child_process = require('child_process');

var workerProcess = child_process.spawn('python', ['myPython.py','noob manasvi']);

workerProcess.stdout.on('data',function(data){
	console.log("stdout->",data.toString());
});

workerProcess.stderr.on('data',function(data){
	console.log("stderr->",data);
})

workerProcess.on('close', function(code){
	console.log("child process returned with code->",code);
})