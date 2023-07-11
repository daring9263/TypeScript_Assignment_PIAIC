/* More Conditional Tests: You don’t have to limit 
the number of tests you create to 10. If you want 
to try more comparisons, write more tests. */

let str : string = "Pakistan";

//Tests for equality and inequality with strings
console.log('str == "Pakistan"');
console.log(str == "Pakistan");
console.log('str != "pakistan"');
console.log(str != "pakistan");

//Tests using the lower case function
console.log("String == pakistan");
console.log(str == str.toLowerCase());

let num : number = 7;

//Numerical tests involving equality and inequality
console.log("num == 3");
console.log(num == 3);
console.log("num != (10-3)");
console.log(num != (10-3));

//greater than and less than, greater than
console.log("num < 8");
console.log(num < 8);
console.log("num > 7");
console.log(num > 7);
 
// equalto, and less than or equal to
console.log("num >= 7");
console.log(num >= 7);
console.log("num <=10");
console.log(num <=10);

//Tests using "and" and "or" operators
console.log("num > 5 && num < 8");
console.log(num > 5 && num < 8);
console.log("str.startsWith('Pa') || str.endsWith('an')");
console.log(str.startsWith('Pa') || str.endsWith('an'));


let arry : string[] = ["Apple", "Banana"]

//Test whether an item is in a array
console.log('arry.includes("Apple")');
console.log(arry.includes("Apple"));

//Test whether an item is not in a array
console.log('arry.includes("Mangoes")');
console.log(arry.includes("Mangoes"));