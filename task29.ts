/*Favorite Fruit: Make a array of your favorite fruits, and then write a 
series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit 
is in your array. If the fruit is in your array, the if block should print a 
statement, such as You really like bananas! */

let fav_fruits : string[] = ["Mangoes", "Banana", "Dates"];

if(fav_fruits.includes("Dates")){
    console.log(`You Really like ${fav_fruits[2]}`);
}
if(fav_fruits.includes("Mangoes") && fav_fruits.includes("Dates")) {
    console.log(`You Really like ${fav_fruits[0]} && ${fav_fruits[2]}`);
}
if(fav_fruits.includes("Banana") || fav_fruits.includes("Peach")){
    console.log(`You Really like ${fav_fruits[1]}`);    
}
if(fav_fruits.includes("Banana")) {
    console.log(`You Really like ${fav_fruits[1]}`);
}
if(fav_fruits[0] === "Mangoes") {
    console.log(`You Really like ${fav_fruits[0]}`);
}