"use strict";
/* Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a color
or an optional feature. Print the Object that’s returned to make sure all
the information was stored correctly. */
function carInfo(manufacturer, model, colour) {
    let objt = {
        Manufacturer: manufacturer,
        Model: model,
        Colour: colour
    };
    return objt;
}
console.log(carInfo("Honda", "2020", "Silver"));
console.log(carInfo("Tesla", "2023", "Gray"));
console.log(carInfo("Toyota", "2022", "Black"));
