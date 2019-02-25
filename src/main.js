/*const pi = 3.14;
let r = 20;
let area = pi*r*r;
console.log(`Area is:${area}`);


*/

/* ******************************** let and var *************************** */
/*
NOTE:
1. let is similar to var but has scope.
2. let is accessible in the block level it is defined
*/

//Examples:

let a=20;
let b=100;

if(true)
{
	let a=60;
	
	var c=10;
	console.log("(if)a:"+a);
	console.log("(if)b:"+b);
	console.log("(if)c:"+c);

	console.log("(if)a/c:");
	console.log(a/c);

	console.log("(if)b/c:");
	console.log(b/c);
}

console.log("c:"+c);
console.log("a:"+a);



/* ************************ const ************************************ */
/*
1. Const is used to assign a constant value to the variable. 
	And the value cannot be changed. Its fixed.
*/
const c1=50;
//c1=60;
console.log("c1:"+c1);

const colors = ['red','blue','green','black'];
//colors = 'pink';	// SyntaxError: "colors" is read-only
colors.push('white');
console.log(colors); 

//Explanation example
// variable colors actually references to the memory allocated to the array
// so you can not change the variable to reference someother memory location later
// through out the program it only references to the array


/* ***************************** Arrow Function ********************* */
//Function in ES6 are same just the Syntax are differnt
// old version Syntax
function square(num)
{
	let sqr =num*num;
	console.log("Square of number: "+sqr);
}

square(5);    // output: Square of number: 25


//New syntax
var cube = (num) => {
	let cube = num*num*num;
	console.log("Cube of number: "+cube);
}

cube(4);   // output: Cube of number: 64

//Example 2
let func = (a,b=10) =>{
	console.log("func:"+(a+b));

}

func(40);