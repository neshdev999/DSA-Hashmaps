/*

Write an algorithm to group a list of words into anagrams. For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].
*/

// I think I would refactor this by sorting the strings alphabetically and comparing them that way rather than using deep-equal.

function groupAnagrams(arr) {
    // To avoid looping too much we'll use hash maps to compare each element in the array against.

    const resultArray = [];
    const charMapArray = []; // For storing hash maps of char counts

    arr.forEach((string, idx) => {
        let charMap = {};
        // Map the chars in the current word
        for (let char of string) {
            charMap[char] = charMap[char] + 1 || 1;
        }

        let wasPushed = false;
        // Loop over each of the character maps that we've seen so far and check if they are a match
        charMapArray.forEach((map, idx) => {
            if (deepEqual(map, charMap)) {
                resultArray[idx].push(string)
                wasPushed = true;
            }

        })

        // If the charMap wasn't pushed before, push it now along with a new array for the string.
        if (!wasPushed) {
            charMapArray.push(charMap)
            resultArray.push([string])
        }

        console.log(charMap)
    })
    console.log(resultArray)
}
groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'])