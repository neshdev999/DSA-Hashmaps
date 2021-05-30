/*

DO NOT run the following code before solving the problem.

What is the output of the following code? explain your answer.

*/

const WhatDoesThisDo = function() {
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1, 10);
    map1.set(str2, 20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3, 20);
    map2.set(str4, 10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

/*

Initializes two HashMaps and sets key/values on them. It uses the same string as the key when setting key/values, which results in the hashmap replacing the value stored with that key. In other words, it sets a value at a specific index in the hashmap and then overwrites it.

*/