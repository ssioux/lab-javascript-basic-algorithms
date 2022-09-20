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
} else if (length1 < hacker2){
    console.log(`It seems that ${hacker2} has the longest name, it has ${length2} characters.`);
} else if(length1 === length2){
    console.log(`Wow, you both have equally long names, ${length1} characters!`)
}


// Iteration 3: Loops




let counter = ""
for (let i = 0; i < hacker1.length; i++){
    
 counter = counter + hacker1[i] + " "
 
}
console.log(counter);
// counter = counter + 1 + " ";

counter = counter.toUpperCase();
console.log(counter);





