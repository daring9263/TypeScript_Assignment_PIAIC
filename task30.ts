/* Hello Admin: Make a array of five or more usernames, 
including the name 'admin'. Imagine you are writing code 
that will print a greeting to each user after they log in 
to a website. Loop through the array, and print a greeting 
to each user:
• If the username is 'admin', print a special greeting, 
such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, 
thank you for logging in again. */

let users_array : string[] = ["Eric", "Joe", "Admin", "David", "Abraham"];

for(var i= 0; i < users_array.length; i++){
    if(users_array[i] === "Admin"){
        console.log(`Hello ${users_array[i]}, Would you like to see Status Report?`);
    }
    else{
        console.log(`Hello ${users_array[i]}, Thank you for logging in again`);
    }
}