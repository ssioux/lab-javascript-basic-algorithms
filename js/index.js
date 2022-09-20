console.log("i am ready");

// Iteration 1: Names and Input

let hacker1 = "Lolito";
console.log(`The driver's name is: ${hacker1}`);
let hacker2 = "Paco";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

let length1 = hacker1.length;
let length2 = hacker2.length;

if (length1 > length2) {
  console.log(`${hacker1} has the longest name, it has ${length1} characters.`);
} else if (length1 < hacker2) {
  console.log(
    `It seems that ${hacker2} has the longest name, it has ${length2} characters.`
  );
} else if (length1 === length2) {
  console.log(`Wow, you both have equally long names, ${length1} characters!`);
}

// Iteration 3: Loops

// 3.1

let counter = "";
for (let i = 0; i < hacker1.length; i++) {
  counter = counter + hacker1[i] + " ";
}

counter = counter.toUpperCase();
console.log(counter);

// 3.2

let counter2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  counter2 += hacker2[i];
}
console.log(counter2);

// 3.3

for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log(`${hacker1} goes first.`);
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log(`Yo, ${hacker2} goes first definitely.`);
    break;
  } else if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`);
    continue;
  }
}

// --------------------------------- BONUS 1

let paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis egestas nulla eu congue. Vestibulum ac aliquam ante. Duis pellentesque ut nisi a volutpat. Vestibulum non justo ut augue mollis posuere ut non purus. Aliquam diam enim, molestie volutpat porta vitae, molestie vitae erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim condimentum felis tincidunt sagittis. Donec vitae blandit lectus, et suscipit urna. In ac iaculis nibh. Duis ut accumsan lacus, nec molestie velit. Vestibulum tincidunt sem ac ex ultricies consequat. Ut egestas ac turpis sed malesuada. Nullam ac varius quam. Integer sit amet risus vulputate, interdum arcu eget, consectetur nulla.";

// Bonis 1.1
let cantPalabras = 0;
let space = " ";
let lastChar = undefined;

for (i = 0; i < paragraph.length; i++) {
  if (
    (typeof paragraph[i] === "string" && paragraph[i + 1] === space) ||
    paragraph[i + 1] === lastChar
  ) {
    cantPalabras++;
  }
}

console.log(cantPalabras);

// Bonus 1.2

let etTimes = 0;

for (i = 0; i < paragraph.length; i++) {
  if (paragraph[i] === "e" && paragraph[i + 1] === "t") {
    etTimes++;
  }
}
console.log(etTimes);

//  --------------------------------  BONUS 2

let phraseToCheck = "Amor, Roma";

let counterFow = "";


for (let i = 0; i < phraseToCheck.length; i++) {
  
    if (phraseToCheck[i] === ",") {
      continue;
    } else if (phraseToCheck[i] === " ") {
      continue;
    } else if (phraseToCheck[i] === "!") {
      continue;
    } else {
    counterFow += phraseToCheck[i];
   
    }
  }

let counterInv = "";

for (let j = phraseToCheck.length -1; j >= 0; j--) {
  
    if (phraseToCheck[j] === ",") {
      continue;
    } else if (phraseToCheck[j] === " ") {
      continue;
    } else if (phraseToCheck[j] === "!") {
      continue;
    } else {
    counterInv += phraseToCheck[j];
   
    }
  }
  
let cap1 = counterInv.toUpperCase();
let cap2 = counterFow.toUpperCase();
 
console.log(cap1);
console.log(cap2);

if (cap1 == cap2){
  console.log(`${phraseToCheck} es Palindrome`)
} else if (cap1 != cap2){
  console.log(`${phraseToCheck} no es Palindrome`)
}