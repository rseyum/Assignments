console.log("Hello World");
let randomNumber = Math.random();
/*math.random methods generets random numbers between
        This function returns a number in the range 0 to less than 1*/

if (randomNumber < 0.5) {
  console.log("Condition was Met");
  console.log(randomNumber);
}
/*"if" is used to specify a part of code to be excuted if a specified condition is true
        the if statement excutes one set of code if a specified conditon is met (true) or another
        set of code evaluates to false*/

if (randomNumber >= 0.5) {
  console.log("Condition Was Met");
  console.log(randomNumber);
}
// Condition was Met will be return if if the condition matches

const dayOfWeek = "Saturday";
if (dayOfWeek === "Monday") {
  console.log("Yee its Monday!");
} else if (dayOfWeek === "Friday") {
  console.log("Yee Its Friday");
} else if (dayOfWeek === "Saturday") {
  console.log("You have the correct Day from the variable");
}
/*else if is used to specify a new condition to test if,the first conditon is false
        else is used to specify a part of code to be excuted ,if the first codition is false
        if condition is used to specify a block of code to be excuted , if a specified condition is true
        switch case:many altrnative block to be excuted*/

if (age < 5) {
  console.log("You Type pretty fast -5");
} else if (age < 10) {
  console.log("hey , watch kids movie");
} else {
  console.log("password is too short");
}
/*here we are prompting the user to enter age, then it will check that age
 with the series of if statements, and if age matches a certain group, it 
 will print out the corresponding message*/
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("orange are $o.59 a pound");
    break;
  case "Bananas":
    console.log("Hello Bananas");
    break;
  case "Avocados":
    console.log("Hello Avocados");
    break;
  default: //
    console.log("sorry we are out of your asked item");
}
/* We will get an out put "sorry we are out of your asked item" 
   because there is no match for Papayas switch case is same as if and
   else condition but in case of many alternative blocks to be executed 
   is used. The default keyword must not always be at the end of our code; 
   it can be at the first of the code. The break helps to end the processing 
   of a statement within the switch case statement.*/
const password = prompt("Please Enter a New Password");
if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid Password");
  } else {
    console.log("Password Cant Have Spaces");
  }
} else {
  console.log("Password is too short");
}

function singSong() {
  console.log("DO");
  console.log("RE");
  console.log("MI");
}
singSong();
singSong();
singSong();
/*"singSong()" is a function call for the function;
   in this case, we are calling three times, and we will
   get an out put of DO RE MI three times in new lines templates
   literal or backticks helps to use single or double quotes in a 
   string and also for creating multiple literals.*/

function greet(firstName) {
  console.log(`hey there, ${firstName}`);
}
greet("Rahel");
/* We will get an output; hey there Rahel interpolation is an automatic
 replacement of a variable with an accurate value we want to symbolize.
        */
function greet1(firstName, lastName) {
  console.log(`hey there, ${firstName} ${lastName}`);
}
greet1("Rahel", "Seyum");
//we will get an out put hey there Rahel Seyum
