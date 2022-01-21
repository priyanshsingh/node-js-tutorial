// The Global Object

// console.log(global);

setTimeout(() => {
    console.log("Inside the timeout");
    clearInterval(int);
}, 10000);

const int = setInterval(() => {
    console.log("Inside the interval");
}, 1000)

console.log(__dirname);
console.log(__filename);