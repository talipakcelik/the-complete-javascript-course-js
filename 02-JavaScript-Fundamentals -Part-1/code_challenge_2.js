/* Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement */

const massMark = 78
const heightMark = 1.69

const massJohn = 92
const heightJohn = 1.76


const markBMI = massMark / (heightMark ** 2)
console.log(markBMI) // 27.309968138370508

const johnBMI = massJohn / (heightJohn ** 2)
console.log(johnBMI) // 29.700413223140497

const compMarkJohn = markBMI >= johnBMI
console.log(compMarkJohn)  // false 



if (markBMI > johnBMI) {
  console.log(`Mark'ın BMI'ı John'unkinden yüksek`)
} else {
  console.log(`John'un BMI'ı (${johnBMI}) Mark'ınkinden (${markBMI}) yüksek.`)
}


/***/
