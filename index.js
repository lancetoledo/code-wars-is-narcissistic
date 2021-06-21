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
