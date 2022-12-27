function isPalindrome(word) {
  // Write your algorithm here
let charArr = []
for (i in word) {
  charArr.push(word[i])
}
let backwardsCharArr = []
while (backwardsCharArr.length < word.length) {
  backwardsCharArr.push(charArr.pop())
}
let backwordsWords = backwardsCharArr.join('')
return backwordsWords === word
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
