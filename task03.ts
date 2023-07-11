/* Name Cases: Store a person’s name in a variable, and
 then print that person’s name in lowercase, uppercase, 
 and titlecase. */

let myName: string = "Abdul rahman";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

function toTitleCase(myName: string): string {
    return myName.toLowerCase().split(" ").map(function(word :string) : string {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(" ");
};

console.log(toTitleCase(myName));
