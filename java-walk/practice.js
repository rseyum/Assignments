const dayOfweek="monday";





const age= prompt('Enter An Age To Drive');

// if condition is used to specsify a block of code to be excuted , if a specified condition is true 
// else: if the same condition is false
// else if: if the first condition is false
// switch case:many altrnative block to be excuted 
if (age<5){
console.log("You Type pretty fast -5")
}
else if (age<10){
    console.log("outpu")
};
else(){

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
// the end of our code all the time ,lastNamcan be 
const password= prompt ("please enter a new password");
if (password.length >=6){
    
    if (password.indexOf("")===-1){
        console.log("valid password")
    }
    else {
        console.log("password can't have spaces")
    }
    else {
        console.log("password is to short")
    }
}


function singSong(){
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
singSong 
// its a function name for the function, it should be 
// called out side the function in order to excute and it should allow js identification
//  rule that means it should be in lowerCase, and templates literal the back ticks helps to 
//  use single or double quates in a string and also for creating multiple literals 



function greet(firstName){
    console.log(`hey there, ${firstName}`)
        
    }
    greet('Rahel')
    
//interpolation is an automatic replacing of 
//variable with a real value we want symbolize
function greet1(firstName,lastName){
    console.log(`hey there, ${firstName} ${lastName}`)
        
    }
    greet('Rahel')

greet1('Boomer','Sooner')








