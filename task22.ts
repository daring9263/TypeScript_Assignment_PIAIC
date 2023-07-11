/* Intentional Error: If you haven’t received an 
array index error in one of your programs yet, try 
to make one happen. Change an index in one of your 
programs to produce an index error. Make sure you 
correct the error before closing the program. */

let error_Array: string [] = ["Abdul Rahman", "Talha", "Zain", "Abdullah"];

//Error
console.log(error_Array[error_Array.length+1]);

try {
    console.log(error_Array[10][2]);
    //Exceprtion thrown
} 
//Exception Handler
catch (error) {
    console.log(error_Array);
}