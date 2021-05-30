/*

Implement a function to delete all duplicated characters in a string and keep only the first occurrence of each character. For example, if the input is string “google”, the result after deletion is “gole”. Test your program with a sentence as well such as "google all that you think can think of".

*/

function removeDuplicates(string) {
    const lib = new HashMap;

    let result = '';

    for (let char of string) {
        if (!lib.get(char)) { // If the char is not in the library, add the char to our result and then add it to the library
            result += char;
            lib.set(char, true);
        }
    }

    return result;
}