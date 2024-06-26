// FUNCTION IMPLEMENTATION (MULTIPLE BUGS)
const isPalindrome = function(str) {
  const noSpaces = str.replace(' ', '');
  const midIndex = Math.floor(noSpaces.length / 2);
  const lastIndex = noSpaces.length - 1;

  //console.log(noSpaces, midIndex, lastIndex);

  for (let i = 0; i < midIndex; i++) {
    if (noSpaces[i] !== noSpaces[lastIndex - i]) {
      //console.log(str[i], str[lastIndex - i + 1]);
      return false;
    }
  }
  //added true option to stop first two cases returning undefined
  return true;
};

// Assertion Function
const assertPalindrome = function(word, expected) {
  console.log(`Testing isPalindrome("${word}"):`);
  const actual = isPalindrome(word);
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ function returned ${actual}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 function returned ${actual} (expected ${expected})\n`);
  }
};


// TEST CODE
// These should all pass assertion, but they don't.
assertPalindrome('p', true);
assertPalindrome('racecar', true);
// my gym fails related to the space, when removed returns true
assertPalindrome('my gym', true);
assertPalindrome('foo', false);
assertPalindrome('fluff', false);
assertPalindrome('just some random words', false);
assertPalindrome('abcba', true);

// Bonus / Stretch: Uncomment these tests and figure out why these are also failing
//assertPalindrome('Kayak', true);
//assertPalindrome('a santa at NASA', true);
