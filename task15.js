"use strict";
/* Changing Guest List: You just heard
that one of your guests can’t make the
dinner, so you need to send out a new
set of invitations. You’ll have to think
of someone else to invite. */
//Task 14
let guest_name = ["Aslam", "Akbar", "Usman", "Hassan"];
for (let i = 0; i < guest_name.length; i++) {
    console.log(`${guest_name[i]}, Would you like to join me on Dinner?`);
}
//Task 15
//Insertion of new Inedx
guest_name.splice(guest_name.length - 1, 1, "Kamaran");
// console.log(guest_name);
for (let i = 0; i < guest_name.length; i++) {
    console.log(`${guest_name[i]}, Would you like to join me on Dinner?`);
}
