// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

//    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

function narcissistic(value) {
  // Code me to return true or false
  let str = value.toString();
  let digitCount = 0;
  let nums = [];
  let sum = 0;

  // 1st loop counts digit count
  for (let i = 0; i < str.length; i++) {
    digitCount++;
    nums.push(str[i]);
  }
  // 2nd loop squares each number by digitCount
  for (let i = 0; i < str.length; i++) {
    console.log(+nums[i] * digitCount);
    // add '+' in front of nums[i] to turn the string number to an integer
    sum += (+nums[i]) ** digitCount;
  }

  // sum == value then it's narcisstic
  if (sum == value) {
    return true;
  }
  // is automatically narcissistic because it is single digit
  else if (digitCount == 1) {
    return true;
  }
  //anything else will be false
  else {
    return false;
  }
}

console.log(narcissistic(7));
