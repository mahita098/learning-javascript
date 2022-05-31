// lenght

let jss = 'Javascript'
console.log(jss.length)         // 10


let myFirstName = 'Mahita'
console.log(myFirstName.length)  // 6


// accessing characters in a string
// its counts as 0123456 not from the first letter 1 directly
//start by zero
// tell firstLetter to be string [0]

let string = 'modem'
let mdFirstLetter = string[0]

console.log(mdFirstLetter)

let secondLetter = string[1]       // o
let thirdLetter = string[2]
let lastLetter = string[4]       // m

console.log(lastLetter)


let lastIndex = string.length - 1

console.log(lastIndex)  // 5-1 = 4

console.log(string[lastIndex])  // m

//toUpperCase()
//toLowerCase()

console.log(string.toUpperCase())
console.log(firstName.toUpperCase())

console.log(string.toLowerCase())
console.log(lastName.toLowerCase())

//substr()

console.log(string.substr(2,3))

//split()

let sstring = '40 days of javascript'

console.log(sstring.split()) // change to an array []
console.log(sstring.split('')) // splits word "" ""

//trim()

console.log(sstring)   //like if theres unnecessary spaces it removes it
console.log(sstring.trim(' '))





















