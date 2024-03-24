const score = 400;
// console.log(typeof score);

const balance = new Number(300);
// console.log(typeof(balance), balance );

// //console.log(balance.toString().length)
// console.log(typeof balance);

// console.log(balance.toFixed(1))

const hundreds = 100000000;
// console.log(hundreds.toLocaleString('en-In'))

// console.log(Number.MAX_VALUE,
// Number.MIN_VALUE)

// console.log(`Max safe value is ${Number.MAX_SAFE_INTEGER} Min safe value is ${Number.MIN_SAFE_INTEGER}`)

// Maths Library 

// console.log(Math.abs(-4));

// console.log(Math.round(4.5));

// console.log(Math.min(1,2,3,4,5,6))
// console.log(Math.max(1,2,3,4,5,6))

console.log((Math.random()*10)+1); // it generates a value between the 0 to 1 

const min = 10;
const max = 30;

console.log(Math.floor(Math.random()*(max-min+1))+min)