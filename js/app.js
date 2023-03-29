"use strict";

//let answer1 = confirm("Are you ready to rumble?");
//if (answer1 === true) {
// console.log("Let's Get Ready To Rumble");
//} else {
//console.log("Oh, Well then");
//}

//let first = true;
//let second = false;
//let third = false;

//if (first && second) {
//  console.log("first and second were both true");
//} else if

let userName = prompt("Welcome to Lou's website! What is your name?");
{
  alert("So lovely to meet you, " + userName + "!");
}

let answer1 = prompt(
  "Here's a few questions to get to know me better! QUESTION ONE: Do I own a Porsche? (Please answer either yes/no or y/n )"
);
if (answer1.toLowerCase() === "yes" || answer1.toLowerCase() === "y") {
  // console.log("Nope! I do not drive!");
  alert("Nope! I do not drive!");
} else {
  // console.log("Correct! No porsche for me.");
  alert("Correct! No porsche for me.");
}

let answer2 = prompt(
  "QUESTION TWO: Am I older than 21? (Please answer either yes/no or y/n )"
);
if (answer2.toLowerCase() === "yes" || answer2.toLowerCase() === "y") {
  // console.log("Oh yes. Many many older!");
  alert("Oh yes. Many many older!");
} else {
  // console.log("Silly sausage.");
  alert("Silly sausage.");
}

let answer3 = prompt(
  "QUESTION THREE: Do I like red wine? (Please answer either yes/no or y/n )"
);
if (answer3.toLowerCase() === "yes" || answer3.toLowerCase() === "y") {
  // console.log("Nope. Gives me a stonking headache.");
  alert("Nope. Gives me a stonking headache.");
} else {
  // console.log("No red wine for me, but I'll take a white if you have it!");
  alert("No red wine for me, but I'll take a white if you have it!");
}

let answer4 = prompt(
  "QUESTION FOUR: Do I live in Peterborough? (Please answer either yes/no or y/n )"
);
if (answer4.toLowerCase() === "yes" || answer4.toLowerCase() === "y") {
  // console.log("Correct! Proper suburban now, I am.");
  alert("Correct! Proper suburban now, I am.");
} else {
  // console.log("Wrong! I moved here recently after 15 years in London.");
  alert("Wrong! I moved here recently after 15 years in London.");
}

let answer5 = prompt(
  "QUESTION FIVE: Do I love DIY? (Please answer either yes/no or y/n )"
);
if (answer5.toLowerCase() === "yes" || answer5.toLowerCase() === "y") {
  // console.log("OH MY GOD I LOVE DIY SO MUCH!");
  alert("OH MY GOD I LOVE DIY SO MUCH!");
} else {
  // console.log("What?! Learn a new skill, save a load of money. What's not to love? ");
  alert("What?! Learn a new skill, save a load of money. What's not to love?");
}
