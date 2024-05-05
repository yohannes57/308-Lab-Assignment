// Part 1 -------------------------------------------------------------------------
//Initial Numbers to verify
const num1 = 10;
const num2 = 15;
const num3 = 20;
const num4 = 5;

//Do numbers add to 50? True/False
const isSum50 = num1 + num2 + num3 + num4 === 50;
console.log("Is the sum 50?", isSum50);

//Are at least 2 numbers odd? True/False
const areTwoOdd = (num1 % 2) + (num2 % 2) + (num3 % 2) + (num4 % 2) >= 2;
console.log(`Are there two or more odd numbers?`, areTwoOdd);

//No numbers can be larger than 25
const areLargerThan25 = num1 > 25 || num2 > 25 || num3 > 25 || num4 > 25;
console.log(`Are any numbers over 25?`, areLargerThan25);

//Are all numbers unique?
const isUnique =
  num1 != num2 &&
  num1 != num3 &&
  num1 != num4 &&
  num2 != num3 &&
  num2 != num4 &&
  num3 != num4;
console.log(`Are all numbers unique?`, isUnique);

//Did the numbers pass all validation checks?
const isValid = isSum50 && areTwoOdd && !areLargerThan25 && isUnique;
console.log(`Do the numbers pass all validation checks?`, isValid);
// Check if all numbers are divisible by
let isDivisibleBy5 =
  num1 % 5 == 0 && num2 % 5 == 0 && num3 % 5 == 0 && num4 % 5 == 0;
console.log("is all number are divisible by 5 " + isDivisibleBy5);

// Check if the first number is larger than the last
let isFirstNumGreateThanLast = num1 > num4;
console.log(
  "first number is larger than last number :",
  isFirstNumGreateThanLast
);

// sub first number from second num
let firstSubFromSecondNum = num2 - num1;
console.log("second number subract first numb :", firstSubFromSecondNum);
console.log(
  "multiply the result by third number",
  firstSubFromSecondNum * num3
);
let remainderOfResultDividedBynum4 = firstSubFromSecondNum % num4;
console.log(
  "the remainder of the dividing by the result is ",
  remainderOfResultDividedBynum4
);

//  Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

// Part 2 -------------------------------------------------------------------------
// practice math
const speed155 = 30;
const speed260 = 28;
const speed375 = 23;

const totalbudget = 175;
const totalMile = 1500;
const fuelPerGallon = 3;
let budget;

// case one at 55mile perhour
let gallonWith55millPer = totalMile / speed155;
console.log("total gallon with 55 mile per hours ?", gallonWith55millPer);
let gallonWith60milePer = totalMile / speed260;
console.log("total gallewith60milePer hour :", gallonWith60milePer);
let gallewith75milePer = totalMile / speed375;
console.log("gallon with 75mile per hour :", gallewith75milePer);
//
// budget=gallon*3;
let budgetOne = gallonWith55millPer * 3;
let isBudgetEnough = totalbudget == budgetOne || totalbudget > budgetOne;
// speed 1
console.log(budgetOne + " is budget enough ?", isBudgetEnough);
// with speed2
let budgetTwo = gallonWith60milePer * 3;
isBudgetEnough = totalbudget == budgetTwo || totalbudget > budgetTwo;
console.log("with speed of " + 60 + " Is budget enough ?" + isBudgetEnough);
// with speed3
let budgetThree = gallewith75milePer * 3;
isBudgetEnough = totalbudget == budgetThree || totalbudget > budgetThree;
console.log("with speed of " + 75 + " Is budget enough ?" + isBudgetEnough);

//
// case 1 with speed 55mph
// distance =spead*time
// time=distance/spead
let howLongItTakeInHour = totalMile / 55;
console.log(
  "Hours it take to arrive at speed of " + 55 + " is " + howLongItTakeInHour
);
// case two at speed 60
howLongItTakeInHour = totalMile / 60;
console.log(
  "Hours it take to arrive at speed of " + 60 + " is " + howLongItTakeInHour
);
// case three at speed 75
howLongItTakeInHour = totalMile / 75;
console.log(
  "Hours it take to arrive at speed of " + 75 + " is " + howLongItTakeInHour
);

// Part 3 -------------------------------------------------------------------------
// with help of controle flow
