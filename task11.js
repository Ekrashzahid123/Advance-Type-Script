"use strict";
/*Store the names of a few of your friends in a array called names. Print each person’s
 name by accessing each element in the list, one at a time.*/
let array = ["Ali", "Hamza", "Usman", "Suffyan", "Ekrash"];
console.log("The Names of the student is as");
for (let i = 0; i < 4; i++) {
    console.log(array[i]);
}
let message = [
    "I am Ali I am From Pakistan",
    "My name is Hamza I am From India",
    "I am Usman",
    "I am Suffyan",
    "I am Ekrash",
];
/*Greetings: Start with the array you used in Exercise 11,
 but instead of just printing each person’s name, print a message to them.
The text of each message should be the same
, but each message should be personalized with the person’s name.*/
array.forEach((array) => {
    console.log(`Hello ${array} How are you?`);
});
/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list to print a
 series of statements about these items, such as “I would like to own a Honda motorcycle.” */
let transportation = ["Bike ", "Car"];
transportation.forEach((transportation) => {
    console.log(`I love To Experience The ${transportation} once!`);
});
/*Guest List: If you could invite anyone, living or deceased, to dinner,
 who would you invite? Make a list that includes at least three people you’d like to
  invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
let invitation = ["InhalFatima", "MuhammadHamza", "muhammadTalha"];
invitation.forEach((transportation) => {
    console.log(`You are invited ${invitation} to the party`);
});
