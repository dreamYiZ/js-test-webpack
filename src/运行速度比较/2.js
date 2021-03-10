const t0 = process.hrtime();
let x = new Array(10000)
while(x.length > 0){
	x--
}
const t1 = process.hrtime();
console.log(`Call to doSomething took ${t1[1] - t0[1]} milliseconds.`);