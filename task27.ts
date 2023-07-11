/* Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */

let alien_cl1 : string = "Green";
if (alien_cl1 == "Green") {
    console.log("You just Earned 5 points");
} else if (alien_cl1 == "Yellow"){
    console.log("You just Earned 10 points");
} else if (alien_cl1 == "Red"){
    console.log("You just Earned 15 points");
}

let alien_cl2 : string = "Yellow";
if (alien_cl2 == "Green") {
    console.log("You just Earned 5 points");
} else if (alien_cl2 == "Yellow"){
    console.log("You just Earned 10 points");
} else if (alien_cl2 == "Red"){
    console.log("You just Earned 15 points");
}

let alien_cl3 : string = "Red";
if (alien_cl3 == "Green") {
    console.log("You just Earned 5 points");
} else if (alien_cl3 == "Yellow"){
    console.log("You just Earned 10 points");
} else if (alien_cl3 == "Red"){
    console.log("You just Earned 15 points");
}