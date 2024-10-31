//1.- Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback: 'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years, he needs toturn 18.

let age = prompt('Enter your age')
if (age >= 18){
    console.log('You are old enough to drive')
}else {
let yearsLeft = 18 - age
console.log(`You are left with ${yearsLeft} years to drive`)
}

//2.- Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 19
let yourAge = prompt('Enter your age'); 
let yearsLeft = 19 - yourAge

if (yourAge < myAge) {
    console.log(`You are ${myAge - yourAge } years older than me.`);
} else {
    console.log(`I am ${yourAge - myAge} year(s) older than you.`);
}

//3.- If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a = 4
let b = 3
//using if else
if (a > b) {
    console.log(a + ' is greater than ' + b)
} else {
    console.log(a + ' is less than ' + b)
}
//ternary operator.
let result = a > b ? a + ' is greater than ' + b : a + ' is less than ' + b
console.log(result)


//4.- Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

let seasonUserInput = prompt('What season is it?' , 'Enter the month of the season');
let season = seasonUserInput.toLowerCase();

switch (true) {
    case /september|october|november/.test(season):
        console.log('The season is Autumn');
        break;
    case /december|january|february/.test(season):
        console.log('The season is Winter');
        break;
    case /march|april|may/.test(season):
        console.log('The season is Spring');
        break;
    case /june|july|august/.test(season):
        console.log('The season is Summer');
        break;
    default:
        console.log('It does not correspond to any');
}

//5.- Write a code which can give grades to students according to their scores: 

let score = prompt('Enter the score')

if (score >= 80 && score <= 100) {
    console.log('Your score is A')
} else if (score >= 70 && score < 80) {
    console.log('Your score is B')
} else if (score >= 60 && score < 70) {
    console.log('Your score is C')
} else if (score >= 50 && score < 60) {
    console.log('Your score is D')
} else if (score >= 0 && score < 50) {
    console.log('Your score is F')
} else {
    console.log('Invalid score.');
}
