function findSum(num1: number, num2: number): number {
  return num1 + num2;
}

function findSumInString(num1: number, num2: number): String {
  //arrow function
  return `sum is ${num1 + num2}`;
}

const findSum2 = (num1: number, num2: number): number => {
  return num1 + num2;
};
const findTheSum = (num1: number | string, num2: number | string): number => {
  if (typeof num1 === "string" || typeof num2 === "string") {
    //type guard
    return +num1 + +num2;
  } else {
    return num1 + num2;
  }
};

let result1 = findSum(10, 70);
console.log(result1);

let resul = findSumInString(10, 70);
console.log(resul);

let result3 = findSum2(10, 70);
console.log(result3);

let result4 = findTheSum("10", 70);
console.log(result3);
