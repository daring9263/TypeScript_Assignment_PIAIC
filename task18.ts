/* Seeing the World: Think of at least 
five places in the world you’d like to visit. */

let cities :string[] = ["Istambul", "Cape Town", "Pyrmids of Ghiza", "Rome", "New York"]
//Orignal Array
console.log(cities);

//Sorted List
let sortedCities = [...cities].sort();
console.log("Alphabatecially Sorted list is");
console.log(sortedCities);
//Original Array
console.log("Original list is");
console.log(cities);

//Reverse Sort
let reverseCities = [...sortedCities].reverse();
console.log("Reverse Alphabatecially Sorted list is");
console.log(reverseCities);
//Original Array
console.log("Original list is");
console.log(cities);

//Revrese Original Array
cities.reverse();
console.log("Reverse of original list is");
console.log(cities);

//Turning Reverse back to Original
cities.reverse();
console.log("Original list is");
console.log(cities);

//Alphabetically Sorted
cities.sort();
console.log("Alphabatecially Sorted list is");
console.log(cities);

//Alphbeticallty Reverse
cities.reverse();
console.log("Reverse Alphabatecially Sorted list is");
console.log(cities);




