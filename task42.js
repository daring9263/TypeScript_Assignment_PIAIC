"use strict";
/* Great Magicians: Start with a copy of your program from Exercise 41.
Write a function called make_great() that modifies the array of magicians
by adding the phrase the Great to each magician’s name. Call
show_magicians() to see that the list has actually been modified */
var magiciansName = ["David Copperfield", "Doug Henning", "Lance Burton"];
function make_great(magician_Name) {
    var mag_Names = magician_Name.map(index => "Great " + index);
    return mag_Names;
}
magiciansName = make_great(magiciansName);
function show_magician(magician_Names) {
    for (var i = 0; i < magician_Names.length; i++) {
        console.log(magician_Names[i]);
    }
}
show_magician(magiciansName);
