const firstName = "Talip";
const lastName = "Akcelik";
console.log(firstName + " " + lastName);


const firstNamee = "Talip ";
const lastNamee = "Akcelik";
console.log(firstNamee + lastNamee);



const ageSarah = 19

let ageJonas = 32


const averageAge = ageJonas + ageSarah / 2
console.log(ageJonas, ageSarah, averageAge);

/**************************
 **** CODE CHALLENGE 1 ****
 *************************/

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.*/

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

/************************/

const job = "Öğrenci";
const birthYear = 1995;
const year = 2037;

const talip = "Ben " + firstName + ", " + (year - birthYear) + " yaşındayım. " + job + "yim."
console.log(talip)

const talipNew = `Ben ${firstName}, ${year - birthYear} yaşındayım. ${job}yim.`
console.log(talipNew)

console.log("string with \n\
multiple \n\
line")

console.log(`string with
multiple
line`)




if (birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21;
}



let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century)



let a = 10
b = 7 * a
console.log(b)

const max = 57
const actual = max - 13
const percentage = actual / max

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
// alert(+apples + +oranges);


const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18)

console.log(String(23), 23);

// const money = 100;
// if (money) {
//   console.log("Don't spend it all.");
// } else {
//   console.log("You should get a job!");
// }

const money = 0;
if (money) {
  console.log("Don't spend it all.");
} else {
  console.log("You should get a job!");
}


let height;

if (height) {
  console.log("Yükseklik tanımlanmış.");
} else {
  console.log("Yükseklik tanımlanmamış.");
}

/*******022 */
const age = 18;
if (age === 18) console.log("Ehliyet alabilirsin. (strict)")


if (age == 18) console.log("Ehliyet alabilirsin. (loose)")

