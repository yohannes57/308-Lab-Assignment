console.log("lab asseesmetn");
let x = 30;

while (x > 0) {
  x /= 2;
  x--;

  if (x % 1 != 0) {
    break;
  }
  console.log(x);
}
// // Count down to 0 from a given number.
// Log integers in multiples of 3 as long as they are less than 35.
// Print integers in multiples of 5 as long as they are less than 100.
// Print integers between 0 and 20 with the following conditions:
// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.
// Print all prime numbers between 0 and 20.
// 1
// // let xx = 10;
// // while (xx > 0) {
// //   console.log(--xx);
// // }
// // 2
// let num = 1;
// while (num < 35) {
//   if (num % 3 == 0) {
//     console.log("multiple of 3 :" + num);
//   }
//   num++;
// }
// // 3
// let num5 = 1;
// while (num5 < 100) {
//   if (num5 % 5 == 0) {
//     console.log("multiple of 5 :" + num5);
//   }
//   num5++;
// }
// // 4
// let n = 0; //random number
// while (n > 0 && n < 20) {
//   if (n % 2 == 0) {
//     console.log("multiple of two multiplied with 3==" + n + "*3" + n * 3);
//   }
//   n++;
// }
// 5
// let prime=1;
// while(prime<=20){
//     if(prime==2||prime==3){
//         console.log(prime+" two is prime")
//     }
// let i=5;
// if(prime%i==0 || prime%(i+2)==0){

// }
// }
let prime = 0; //random number
while (prime < 20) {
  if (prime % 2 !== 0 && prime % 3 != 0) {
    console.log(prime);
  }
  prime++;
}
//
// let cost = 4;
// let returnMoney = 6 * 4;
// let i = 1;
// while (returnMoney > 0) {
//   console.log("quarter" + i);
//   i++;

//   returnMoney--;
// }
// console.log(" quare i" + i);

// // fuzz buzz
// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
// 1
let num = 1;
while (num < 100) {
  if (num % 3 == 0 && num % 5 != 0) {
    console.log("FiZZZZZZZ");
  } else if (num % 5 == 0 && num % 3 != 0) {
    console.log("Buzzzzzzz");
  } else if (num % 5 == 0 && num % 3 == 0) {
    console.log("Fizz Buzz");
  } else console.log(num);
  num++;
}
console.log("Second question next .....");
// Find the nextPrime number
// 2
let number = 9;

if (number <= 1) {
  number = 2;
}
let primeNum = number;
let found = false;

while (!found) {
  primeNum++;

  if (primeNum <= 1) {
    continue;
  }
  if (primeNum <= 3) {
    found = true;
    break;
  }
  if (primeNum % 2 == 0 || primeNum % 3 == 0) {
    continue;
  }
  let isPrime = true;

  for (let i = 5; i * i <= primeNum; i = i + 6) {
    if (primeNum % i == 0 || primeNum % (i + 2) == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    found = true;
  }
}
console.log("next prime of number: " + number + " is " + primeNum);

console.log("third part ahead !");
// Feeling loopy
// Index    Mass (kg)   Spring 1 (m)  Spring 2 (m)
// 1        0.00        0.050           0.050
// 2         0.49       0.066           0.066
console.log("\n \n");

let stringContent =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let currentWord = " ";

for (let i = 0; i < stringContent.length; i++) {
  let curretChar = stringContent[i];
  if (stringContent[i] === ",") {
    // console.log(currentWord + " ");
    curretChar = "                  ";
  }
  if (stringContent[i] == "\n") {
    curretChar = "\n";
    curretChar += "        ";
  }
  currentWord += curretChar;

  if (i == stringContent.length - 1) {
    console.log(currentWord);
  }
}
console.log("second way two two do it \n");
//
let cell1 = "",
  cell2 = "",
  cell3 = "",
  cell4 = "";
let eachChar = "";
for (let i = 0; i < stringContent.length; i++) {
  eachChar = stringContent[i];
  if (stringContent[i] == ",") {
    continue;
  } else if (stringContent[i] == "\n") {
    console.log(cell1, cell2, cell3, cell4);
    cell1 = cell2 = cell3 = cell4 = "";
  } else {
    if (cell1.length < 1) {
      cell1 = eachChar;
    } else if (cell2.length < 1) {
      cell2 += eachChar;
    } else if (cell3.length < 1) {
      cell3 += eachChar;
    } else {
      cell4 += eachChar;
    }
  }
}
