const arr = new Array(10).fill().map((i,idx)=>idx);

console.log(`arr is: ${arr}`)

const arr2 = arr.sort((a)=>(0.5-Math.random()))

console.log(`arr is: ${arr}`)
console.log(`arr2 is: ${arr2}`)
