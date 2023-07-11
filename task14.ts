/*Guest List: If you could invite anyone,
living or deceased, to dinner, who would 
you invite? Make a list that includes at 
least three people you’d like to invite 
to dinner. Then use your list to print a 
message to each person, inviting them to dinner. */

let guests : string[] = ["Aslam", "Akbar", "Usman", "Hassan"];
for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, Would you like to join me on Dinner?`);
}
