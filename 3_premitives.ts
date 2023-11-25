function sendSum(
  num1: number,
  num2: number,
  name: string,
  isWithName: boolean
) {
  let result = isWithName
    ? `hi ${name}  sum is ${num1 + num2}`
    : `sum is ${num1 + num2}`;
  return result;
}

let num1: number = 10;
let num2: number = 20;
let myName: string = "Piumika";
let withName: boolean = true;

let result = sendSum(num1, num2, myName, withName);
console.log(result);

let result2 = sendSum(num1, num2, myName, withName);
console.log(result2);
