"use strict";
/* Your Own Array: Think of your favorite mode
of transportation, such as a motorcycle or a
car, and make a list that stores several examples.
Use your list to print a series of statements
about these items, such as “I would like to
own a Honda motorcycle.” */
let owns = ["Motorcyclye", "Car"];
let statement = ["I have", "I want to Buy"];
for (let i = 0; i < statement.length; i++) {
    for (let j = 0; j < owns.length; j++) {
        if (((i == 0) && (j == 0)) || ((i == 1) && (j == 1))) {
            console.log(`${statement[i]}, ${owns[j]}`);
        }
    }
}
