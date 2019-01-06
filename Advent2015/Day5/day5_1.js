const fs = require('fs');

// var strings = fs.readFileSync('input_test.txt', 'utf-8').split('\r\n');
var strings = fs.readFileSync('input.txt', 'utf-8').split('\r\n');
var vowelCount = 0;
var charCount = 0;
var goodCount = 0;
// console.log(strings);
// contains 3 vowels aeiou
// at least 1 letter appearing twice in a row
// no ab, cd, pq, or xy

// read a line in
// check for ab, cd, pq, or xy
// check for a letter appearing twice in a row
// check for vowels

function cntVowels(s) {
    // console.log(`1. checking vowels in ${s}`);
    vowelCount = 0;
    for (j = 0; j < s.length; j++) {
        if (s.substring(j,j+1).match(/[aeiou]/)) {
            vowelCount++;
        }
    }
    if (vowelCount < 3) {
        return false;
    } else {
        return true;
    }
}

function chkCharCount(str) {
    // console.log(`2. Checking for 2 characters in a row in ${str}`);
    let charCount = 0;
    for (a = 0; a < str.length-1; a++){
        let t1 = str.substring(a, a+1);
        let t2 = str.substring(a+1,a+2);

        if (t1 == t2) {
            charCount++;
        }
    }
    if (charCount === 0) {
        return false;
    } else {
        return true;
    }
}

function badStrs(str) {
    if (strings[i].indexOf('ab') > -1){
        return false;
    }
    if (strings[i].indexOf('cd') > -1){
        return false;
    }
    if (strings[i].indexOf('pq') > -1){
        return false;
    }
    if (strings[i].indexOf('xy') > -1){
        return false;
    }

    return true;
}

for (i = 0; i < strings.length; i++) {
    // console.log(`checking ${strings[i]}`);

    // count vowels
    let matchVowels = cntVowels(strings[i]);
    if (!matchVowels) {
        continue;
    } else {
        // console.log(`PASSED: ${strings[i]} has at least 3 vowels`);
    }

    //check for letter appearing 2x in a row
    let matchTwoChars = chkCharCount(strings[i]);
    if (!matchTwoChars) {
        continue;
    } else {
        // console.log(`PASSED: ${strings[i]} has 2 characters in a row`);
    }
    

    // check to see if string has ab, cd, pq, or xy
    let matchBadStr = badStrs(strings[i]);
    if (!matchBadStr) {
        continue;
    } else {
        // console.log(`PASSED: ${strings[i]} doesn't contain forbidden strings`);
    }

    // console.log(`${strings[i]} is good`);
    goodCount++;
}

console.log(`Number of good strings: ${goodCount}`);