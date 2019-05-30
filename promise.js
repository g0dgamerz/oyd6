let p = new Promise((resolve,reject)=>{
	let a = 1+4;
	if(a==5){
		resolve('Binod')
	}else{
		reject('mr. X')
	}
});

p.then((message) =>{
	console.log('this one was goog ' + message);
}).catch((message)=>{
	console.log('these were very dissapointing'+ message);
})
