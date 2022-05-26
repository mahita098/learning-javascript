/* String Concatenation
Connecting two or more strings together is 
called concatenation.
*/


let space = ' '           // an empty space string
let firstName = 'Mahita'
let lastName = 'Ramgolam'
let country = 'Mauritius'
let city = 'Port Louis'
let language = 'JavaScript'
let quote = 'i have a twin'

let fullName = firstName + space + lastName;


console.log(fullName)

// to add sentence use '. i am ' - that is singlequote, dot, words

let personInfo = fullName + '. i am ' + age + '. i live in ' + country;

console.log(personInfo)

// can do paragraph. to break it use \

const paragraph = "My name is Mahita. I live in Mauritius.\
I am a studemt learning javascript. I am actually a finance university student.\
but i started learning html, css and it was coool so hwaiting mahi\
Now, we are in 2022. I am enjoying  the 30DaysOfJavaScript challenge."

console.log(paragraph)


//  \t: Tab, means 8 spaces

console.log('Day 1\t3\t5')

console.log('Kids 2\t6\t20')



// template string
// To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign.
// `${}`

console.log(`The sum of 4 and 5 is 9`) 
             // statically writing the data
let a = 4
let b = 5
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically


// using variable line 7

// ES6 - String interpolation method

let personInfoOne = `I am ${fullName}. I am ${age}.`
console.log(personInfoOne)











































































