// EXERCISE 1
// LEVEL 1

// 1
// let yourAge = prompt('Enter your age:');
// if (yourAge >= 18) {
//   document.write('You are old enough to drive.');
// } else {
//   document.write('You are left with ' +(18 - yourAge)+ ' years to drive.');
// }

// 2
// let myAge = parseInt(prompt("Enter My age: ")),
//   yourAge = parseInt(prompt("Enter Your Age: "));  //30
// if (myAge < yourAge) {
//   result = yourAge - myAge;
//   document.write("You are " + result + " years older than me.");
// } else {
//   result = myAge - yourAge;
//   document.write("You are " + result + " years younger than me.");
// }

// 3
// let a = prompt("Enter the A value"  )
// let b = prompt("Enter the B value")
//   if (a > b) {
//     document.write(a+ ' is greater than ' +b);
//   }
//   else document.write(a+' is less than '+b);

// use ternary operator.

// a>b
// ? document.write(a+ ' is greater than ' +b)
// : document.write(a+' is less than '+b)

// 4
// const a = prompt("Enter the Number");
// const b = a % 2;
// if (b == 0) {
//   document.write(a+ " is a even number");
// } else {
//   document.write(a+ " is a odd number");
// }

// LEVEL 2

// 1

// let score = prompt("Enter score");
// function calculateGrades(score) {
//   if (score >= 80) {
//     document.write("A");
//   } else if (score >= 70) {
//     document.write("B");
//   } else if (score >= 60) {
//     document.write("C");
//   } else if (score >= 50) {
//     document.write("D");
//   } else if (score >= 0) {
//     document.write("Fail");
//   } else {
//     document.write("Enter valid Score");
//   }
// }
// calculateGrades(score);

// 2
// const month = prompt("Enter month to check seasons: ");
// switch (month) {
//   case "september":
//   case "october":
//   case "november":
//     document.write("The season is Autumn");
//     break;
//   case "december":
//   case "january":
//   case "february":
//     document.write("The season is Winter");
//     break;
//   case "march":
//   case "april":
//   case "may":
//     document.write("The season is Spring");
//     break;
//   case "june":
//   case "july":
//   case "august":
//     document.write("The season is Summer");
//     break;
//   default:
//     document.write("Invalid Month");
// }

// 3
// const days = prompt("Enter days name");
// const day = days.toLowerCase();
// if (day == "saturday" || day == "sunday") {
//   document.write(`${days} is a weekend day`);
// } else if (
//   day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday"
// ) {
//   document.write(day + ' is a working day');
// } else {
//   document.write("Invalid Days");
// }

// 4
// let months = prompt("enter month to check number of days");
// let month = months.toLowerCase(); 
// switch (month) {
//     case "january":
//     case "march":
//     case "may":
//     case "july":
//     case "august":
//     case "october":
//     case "december":
//         document.write(`${months} has 31 days`)
//         break;
//     case "april":
//     case "june":
//     case "september":
//     case "november":
//         document.write(`${months} has 30 days`)
//         break;
//     case "february":
//         document.write(`${months} has 29 days`)
//         break;
//     default:
//         document.write("invalid month entered");
// }