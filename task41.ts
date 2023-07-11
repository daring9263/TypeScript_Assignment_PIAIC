/* Magicians: Make a array of magician’s names. Pass the array to a function 
called show_magicians(), which prints the name of each magician in the array. */

var magician : string[] = ["David Copperfield", "Doug Henning", "Lance Burton"]

function show_magicians(magicianName : string[]) {
    console.log("Names of Magicians are:");
    console.log(magicianName.join(", "));
}

show_magicians(magician);