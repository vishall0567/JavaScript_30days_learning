/* Day_3
Exercise_1 */

// LEVEL-1

// 1
// const firstName = "Vishal",
//   lastName = "Singh",
//   country = "India",
//   city = "Delhi",
//   age = 22,
//   isMarried = false,
//   year = 2024;

/*
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);   */

// 2
// console.log(typeof '10' == typeof 10);      //false
// console.log(typeof '10' === typeof 10);      //false
// console.log(typeof '10' === 10);      //false
// console.log(typeof '10' == 10);      //false

// 3
// console.log(typeof parseInt('9.8') === 10);      //false
// console.log(typeof parseInt('9.8') == 10);      //false

// 4
/*
const Day='monday'
const Month='may'
const Name='vishal'
console.log(Boolean(Day));
console.log(Boolean(Month));
console.log(Boolean(Name));     // Truthy value

const day=undefined;
const month= null;
const Year = '';
console.log(Boolean(day));
console.log(Boolean(month));
console.log(Boolean(Year));   // Falsy value
*/

// 5
/*
console.log(4 > 3); // true
console.log(4 >= 3); //true
console.log(4 < 3); // false
console.log(4 <= 3);  //false
console.log(4 == 4);  // true
console.log(4 === 4);  // true
console.log(4 != 4);  // false
console.log(4 !== 4);  // false
console.log(4 != '4'); // false
console.log(4 == '4');  //true
console.log(4 === '4');  // false */

// let a = "python";
// let b = "jargon";
// console.log(a.length != b.length)

// 6
/*
console.log(4 > 3 && 10 < 12);      // true
console.log(4 > 3 && 10 > 12);      //false
console.log(4 > 3 || 10 > 12);      //true
console.log(4 > 3 || 10 < 12);      //true
console.log(!(4 > 3));              //false
console.log(!(4 < 3));              //true
console.log(!(false));              //true
console.log(!(4 > 3 && 10 < 12));   //false
console.log(!(4 > 3 && 10 > 12));   //true
console.log(!(4 === '4'));          //true

let dra = "dragon"
let py = "python"
console.log(!(dra.search('on') === py.search('on')));
*/

// 7

// const now = new Date()

// dateObject.getFullYear()
// dateObject.getMonth()
// dateObject.getDate()
// dateObject.getDay()
// dateObject.getHours()
// dateObject.getMinutes()
// dateObject.getTime()


// LEVEL 2

// 1
/*
const aa = parseInt(prompt('Enter base:')), bb = parseInt(prompt('Enter height:'))
const cc = aa*bb
document.write('The area of the triangle is ' + 0.5*cc);        */

// // 2
// const aa = parseInt(prompt('Enter Side A:')),
// bb = parseInt(prompt('Enter Side B:')),
// cc = parseInt(prompt('Enter Side C:'));
// const dd = aa+bb+cc;
// document.write(('The parameter of triangle is ' + dd));

// // 3
// let length = prompt('Enter length: ');
// let width = prompt('Enter width: ');
// let perimeter = 2 * (parseFloat(length) + parseFloat(width));
// let area = parseFloat(length) * parseFloat(width);
// document.write(perimeter + ' ', area);

// 4
// const PI = 3.14
// const radius = prompt('Enter the Radius Of Circle')
// const AreaOfCircle = PI*radius*radius
// document.write(AreaOfCircle)         // Area of circle

// const coc = (2*PI*radius)
// document.write(coc)              //circumference of circle

// 5
// const x_intercept = prompt('Enter x-intercept')
// const y = (2 * x_intercept -2)
// document.write(y)


// 6
// const x1 = prompt('Enter x1 Value'),
//   x2 = prompt('Enter x2 Value'),
//   y1 = prompt('Enter y1 Value'),
//   y2 = prompt('Enter x2 Value');
//   m = (y2-y1)/(x2-x1);
// document.write(m);

// 7

// const y = prompt('Enter y value')
// const m = prompt('Enter m value')
// document.write(y == m)

// 8
// const x= Number(-3)
// const y = (x**2)+(6*x)+9
// console.log(y)

// 9
// const HH = prompt('Enter Hour')
// const rph = prompt('Enter Rate/hour')
// const we = (HH*rph)
// document.write(we)

// 10
// let n = prompt('Enter your name: ');
// n.length > 7
// ? document.write('Your name is long')
// : document.write('Your name is short');

// 11
// const firstName = "victor"
// const lastName = "kenneth"
// firstName.length > lastName.length 
// ? console.log('your first Name is greater than your family name') 
// : console.log('your last name is greater than your name');

// 12
// let aa = parseInt(prompt("Enter My age: ")),  //250
//   bb = parseInt(prompt("Enter Your Age: "));  //50
// if (aa < bb) {
//   cc = bb - aa;
//   document.write("You'are " + cc + " years younger than me.");
// } else {
//   cc = aa - bb;
//   document.write("I am " + cc + " years older than you.");
// }

// 13
// let yourBirthYear = prompt('Enter the year you were born:');
// let age = new Date().getFullYear() - yourBirthYear;
// if (age >= 18) {
//   document.write(`You are ${age}. You are allowed to drive.`);
// } else {
//   document.write(`You are ${age}. You will be allowed to drive in ${18 - age} years.`);
// }

// 14
// let age = parseFloat(prompt('Enter your age: '));
// let remainingYears = 100 - age;
// let remainingSeconds = remainingYears * 365 * 24 * 60 * 60;
// document.write(
//   `You have lived ${
//     age * 365.25 * 24 * 60 * 60
//   } seconds. You have ${remainingSeconds} seconds more to live reach 100 years`
// );

// 15
// const y = new Date()
// const YYYY = (y.getFullYear())
// const MM = (y.getMonth()+1)
// const DD = (y.getDate())
// const HH = (y.getHours())
// const mm = (y.getMinutes())
// console.log(YYYY+'-'+MM+'-'+DD+" "+HH+':'+mm);   // YYYY-MM-DD HH:mm
// console.log(DD+'-'+MM+'-'+YYYY+" "+HH+':'+mm);   // DD-MM-YYYY HH:mm
// console.log(DD+'/'+MM+'/'+YYYY+" "+HH+':'+mm);   // DD/MM/YYYY HH:mm



// LEVEL 3

// 1

// let dateInfo = new Date();
// let year = dateInfo.getFullYear();
// let month = dateInfo.getMonth()+1;
// let date = dateInfo.getDate();
// let hours = dateInfo.getHours();
// let minutes = dateInfo.getMinutes();

// function format(a) {
//   if (a < 10) {
//     return (a = `0${a}`);
//   }
//   return a;
// }
// let formatHours = format(hours);
// let formatMinutes = format(minutes);
// let formatMonth = format(month);

// console.log(`${year}-${formatMonth}-${date} ${formatHours}:${formatMinutes}`);
