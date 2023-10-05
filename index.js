function hasTargetSum(array, target) {
  // Write your algorithm here
  let seenNumbers = new Set();
  for(const num of array) {const complement = target - num;
  if(seenNumbers.has(complement)){
    return true;
  }
  else{
    seenNumbers.add(num)
  }
}
return false
}

/* 
  Write the Big O time complexity of your function here
  0(n) - Linear time complexity because of iteration through the array
*/

/* 
  Add your pseudocode here
    Create an empty set to store numbers
    Calculate the complement of current number
    Check if complement is in the set
    Return true if its found
    Otherwise, add the current number to the set
    If no pair is found, return false.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
