const x = {
	"name" : "Priyansh",
	"phone_no" : 7310756276,
	"email" : "priyansh@gmail.com"
}


const y = JSON.stringify(x);
console.log('y :>> ', y);
console.log('y :>> ', typeof(y));

const z = JSON.parse(y);
console.log('z :>> ', z);
console.log('z :>> ', typeof(z));

console.log('x :>> ', y.name);
console.log('z :>> ', z.name);