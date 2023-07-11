"use strict";
/* Sandwiches: Write a function that accepts a array of items a person
wants on a sandwich. The function should have one parameter that collects
as many items as the function call provides, and it should print a summary
of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time. */
function makeSandwich(...items) {
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
    console.log("Bread");
    console.log("Sandwich is ready");
}
makeSandwich("Cheese", "Tomato", "Lettuce");
makeSandwich("Turkey", "Swiss Cheese");
makeSandwich("Ham", "Mustard", "Pickles", "Onion");
