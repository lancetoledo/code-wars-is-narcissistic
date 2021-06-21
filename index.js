function narcissistic(value) {
  // Code me to return true or false
  let str = value.toString();
  let digitCount = 0;
  let nums = [];
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    digitCount++;
    nums.push(str[i]);
  }
  for (let i = 0; i < str.length; i++) {
    console.log(+nums[i] *digitCount)
    sum += (+nums[i]) ** digitCount;
  }
  if (sum == value) {
    return true
  }
  else if(sum == 1) {
    return false
  }
  else {
    return false
  }
}

console.log(narcissistic(7));
