
// conditionals
/* using
if
if else
if else if else
switch
ternary operators
*/

// to create an if condition, we need if keyword, condition inside a parenthesis and block of code inside a curly bracket({}).

//using only if condition will display the if the condition is true and if not. nothing is displayed

// use of 'if else"


let num = 10
if (num > 0) {
    console.log(`${num} is a positive number`)     // 10 is a positive number
} else {
    console.log(`${num} is a negative number`)   //if number is less " # is a negative number"
}      


let sunIsShining = true
if (sunIsShining) {
    console.log('Remember to put sunscreen')
} else {
    console.log(`Remember to smile`)
}


// using more than two conditions
// if else if else


let weather = 'sunny'
if (weather === 'rainy') {
    console.log('You need a rain coat')
} else if (weather === 'cloudy') {
    console.log('might get cold, get a jacket bruh') 
} else if (weather === 'sunny') {
    console.log('go out enjoy')
} else {
    console.log('no rain coat needed')
}


// switch break

let sky = 'sunny'
switch (sky) {
    case 'rainy':
        console.log('you need umbrella')
        break
    case 'cloudy':
        console.log('it might be cold')
        break
    case 'sunny':
        console.log('go get tanned')
        break
    default:
        console.log('no need of umbrella')
}



let numb = prompt('Enter number');
switch (true) {
  case numb > 0:
    console.log('Number is positive');
    break;
  case numb == 0:
    console.log('Numbers is zero');
    break;
  case numb < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}

//exercise

let age = prompt('enter your age')
if(age > 18) {
    console.log('You are old enough to drive')
} else if(age < 18) {
    console.log('You are left with xx years to drive')
}



















































































































