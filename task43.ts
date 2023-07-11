/* Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of 
magicians’ names. Because the original array will be unchanged, 
return the new array and store it in a separate array. Call 
show_magicians() with each array to show that you have one array 
of the original names and one array with the Great added to each magician’s name. */

var magiciansName : string[] = ["David Copperfield", "Doug Henning", "Lance Burton"];

function make_great1(magician_Name : string[]) {
    var mag_Names = magician_Name.map(index => "Great " + index);
    return mag_Names;
}

var magician : string[] = make_great1(magiciansName);

console.log("Original Array is: " , magiciansName);
console.log("Array with addition of Great is: ", magician);