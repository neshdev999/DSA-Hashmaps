/*
Write an algorithm to check whether any permutation of a string is a palindrome. Given the string "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to "racecar", which is a palindrome. In contrast, given the word "north", the algorithm should return false, because there's no way to rearrange those letters to be a palindrome.



*/


function isPermutablePalindrome(string) {
    // In order to be a palindrome, no more than one char in a string can add up to an odd number.

    const charMap = new HashMap;

    // Loop through the chars in the string and add them to the charMap library
    for (let char of string) {
        let currentCount = charMap.get(char) || 0;
        charMap.set(char, currentCount + 1)
    }

    let odds = 0;

    // Count the number of odds in our charMap library
    const charMapKeys = charMap.keys()
    charMapKeys.forEach(key => {
        if (charMap.get(key) % 2 !== 0) {
            odds++
        }
    })

    // If the number of odds is one or less, then the string can be permuted into a palindrome
    if (odds <= 1) {
        return true;
    }

    return false;
}
// isPermutablePalindrome('amanaplanacanalpanama')