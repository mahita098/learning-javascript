/* 
NON PRIMITIAVE DATA in js - modifiable ( mutable)                                                                                     
- arrays
- objects

*/

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo) //it is true

let js = 'javascript'
let py = 'python'

console.log(js == py)   //it is false

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff)   //it is false



// using arrays
/* In JavaScript array index starts at zero. I.e., 
the first element of an array is found at 
index zero, the second element at index one, 
and the third element at index two, etc. */

let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)   //[10, 2 , 3]



let numero = [1, 2 , 3]
let numbers = [1, 2, 3]  //Even if two non-primitive data types have the same properties and values, they are not strictly equal.


console.log(numero == numbers)   //false


let userOne = {
    name: 'Mahita',
    role: 'teaching',
    country: 'Mauritius'
}

let userTwo = {
    name: 'Mahita',
    role: 'teaching',
    country: 'Mauritius'
}

console.log(userOne == userTwo)   //false


let adminOne = {
    name: 'Mahita',
    role: 'teaching',
    country: 'Mauritius'
}

let adminTwo = adminOne       //this

console.log(adminOne == adminTwo) //true






























