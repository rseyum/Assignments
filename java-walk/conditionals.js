console.log("Hello World");

let randomNumber = Math.random(); //math.random methods generets random numbers between 
// 0-1 , but never reaches 1 but inludes 0
//

if (randomNumber < 0.50) {

    console.log("Condition was Met");
    console.log(randomNumber);
}
//if is used to specify a part of code to be excuted if a specified condition is true
////////////////////////
if (randomNumber >= 0.5) {

    console.log('Condition Was Met');
    console.log(randomNumber); 
}
//use of math.random
//range
//how to make 
//how it works
// /////////////////

const dayOfWeek = 'Saturday';

if (dayOfWeek === 'Monday'){
    console.log("Yee its Monday!");

} else if (dayOfWeek === 'Friday'){

    console.log("Yee Its Friday");

} else if (dayOfWeek === 'Saturday') {

    console.log("You have the correct Day from the variable"); 
}
//else if is used to specify a new condition to test if,the first conditon is false
//else is used to specify a part of code to be excuted ,if the first codition is false
// if condition is used to specify a block of code to be excuted , if a specified condition is true 
// switch case:many altrnative block to be excuted

if (age<5){
console.log("You Type pretty fast -5")
}
else if (age<10){
    console.log("hey , watch kids movie")
}
else{console.log ("password is too short")

}
const expr='Papayas';
switch(expr){
case"moranges":
console.log("orange are $o.59 a pound");
break;
case"Bananas":
console.log("Hello Bananas");
break;
case"Avocados":
console.log("Hello Avocados");
break;
default:// 
console.log ("sorry we are out of your asked item")
}
// switch case is same as if and else condition but incase of many 
// alternative block to be exuted is used.the default keyword must not be at 
// the end of our code all the time ,it can be in the first of the code 
// the break helps to end processing of a statement with in the switch case statement



const password= prompt ("Please Enter a New Password");
if (password.length >=6){
    
    if (password.indexOf("")===-1){
        console.log("Valid Password");
    }
    else  {
        console.log("Password can't have spaces")
    }
    else{
        console.log("password is to short");
    }
}

function singSong(){
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
singSong()
singSong()
singSong()
// its a function name for the function, it should be 
// called out side the function in order to excute and it should allow js identification
//  rule that means it should be in lowerCase, and templates literal the back ticks helps to 
//  use single or double quates in a string and also for creating multiple literals 

////////////////////////////////////////////////////////////////

function greet(firstName){
    console.log(`hey there, ${firstName}`)
        }
    greet('Rahel')
    
//interpolation is an automatic replacing of 
//variable with a real value we want symbolize
function greet1(firstName,lastName){
    console.log(`hey there, ${firstName} ${lastName}`)
        
    }

greet1('Rahel','Seyum')








