/* Day 2
Exercise: Level 1 */

// 1
var challenge = "30 Days Of JavaScript";
// console.log(challenge)

// 2
let print = "This is the print text.";
// console.log(print);

// 3
let a = "30 Days Of JavaScript";
// console.log(a.length);

// 4
let b = "30 Days Of JavaScript";
// console.log(b.toUpperCase());

// 5
let c = "30 Days Of JavaScript";
// console.log(c.toLowerCase());

// 6
let d = "30 Days Of JavaScript";
// console.log(d.substring(11));

// 7
let e = "30 ";
// console.log(e.concat("days of JavaScript"));

// 8
let f = "30 Days Of JavaScript";
// console.log(f.includes(30));   // true
// console.log(f.includes(40));   // false
// console.log(f.includes("Days"));   // true

// 9
let g = "30 Days Of JavaScript";
// console.log(g.split(""));   // Split into array

// 10
let h = "30 Days Of JavaScript";
// console.log(h.split(' '));

// 11
let i = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(i.split(' '));

// 12
let j = "30 Days Of JavaScript";
// console.log(j.replace('JavaScript','Python'));       // replace the word JavaScript to Python

// 13
let k = "30 Days Of JavaScript"; // Count the character at the num of 15.
// console.log(k.charAt("15"));

// 14
let l = "30 Days Of JavaScript";
// console.log(l.charCodeAt("J"));

// 15
let m = "30 Days Of JavaScript";
// console.log(m.indexOf("S"));

// 16
let n = "30 Days Of JavaScript S";
// console.log(n.lastIndexOf("S"));

// 17
let o =
  "You cannot end a sentence with because because because is a conjunction"; // this is print the first "because" of the sentence.
// console.log(o.indexOf("because"));

// 18
let p =
  "You cannot end a sentence with because because because is a conjunction"; // this is print the last "because" of the sentence.
// console.log(p.lastIndexOf("because"));

// 19
let q =
  "You cannot end a sentence with because because because is a conjunction"; // search the word "with" after how many char.
// console.log(q.search("with"));

// 20
let r = " 30 Days Of JavaScript ";
// console.log(r.trim());     // First nd last space deleted
//  console.log(r.trim(' '));       // also First nd last space deleted with ' '.

// 21
let s = "30 Days Of JavaScript";
// console.log(s.startsWith("30"));      // true (because the sentence start with 30)
// console.log(s.startsWith("Days"));    // false (because the sentence not start with Days)

// 22
let t = "30 Days Of JavaScript";
// console.log(t.endsWith("JavaScript"));  //true
// console.log(t.endsWith("javascript"));  //false because of case sensitive

// 23
let u = "30 Days Of JavaScript";
// console.log(u.match("a"));

// 24
let v = "30 Days Of ";
// console.log(v.concat("JavaScript"));

// 25
let w = "30 Days Of JavaScript ";
// console.log(w.repeat(2));

// Exercise level 2..........

// 1
let aa =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
// console.log(aa);

// 2
let bb =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
// console.log(bb.concat("- By Mother Teresa"));
// console.log(bb+ ' ' + "-By Mother Teresa");

// 3
// console.log(typeof Number('10') === typeof 10);      // change string to number using Number()

// 4
let cc = "9.8";
// console.log(typeof Math.round('cc') === typeof 10);     // 9.8 round fig 10 according the rule Math.round

// 5
let dd = "python, jargon";
// console.log(dd.match(/on/gi).length);

// 6
let ee = "I hope this course is not full of jargon.";
// console.log(ee.includes('jargon'));

// 7
let ff = Math.floor(Math.random() * 100);
// console.log(ff)

// 8
let gg = Math.floor(Math.random() * 51 + 50);       //using Math.floor for rounding down
// console.log(gg)

// 9
let hh = Math.ceil(Math.random() * 256);    // using Math.ceil for rounding up
// console.log(hh)

// 10
let ii = "JavaScript";
// console.log(ii.charAt(Math.floor(Math.random()* ii.length)));

// 11
let jj = '1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125';
// console.log(jj);

// 12
let kk = 'You cannot end a sentence with because because because is a conjunction';
// console.log(kk.substr(31,23));            // slice the word from 31st word of sentence to 31st to its 23rd word


// level 3.......

// 1
let aaa = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// console.log(aaa.match(/love/gi).length)

// 2
let bbb = 'You cannot end a sentence with because because because is a conjunction';
// console.log(bbb.match(/because/gi).length)

// 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// console.log(sentence.replaceAll(/[@$%#&]/g,""));

// 4
