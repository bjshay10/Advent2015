// It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
// It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.

const fs = require('fs');

var strings = fs.readFileSync('input_test.txt', 'utf-8').split('\r\n');
// var strings = fs.readFileSync('input.txt', 'utf-8').split('\r\n');
var isNice = 0;

function isTwoChar(string) {
    let char1Pos = 0;
    let char2Pos = 1;
    for (j = 0; j < string.lenght-1; j++) {
        char1Pos = j;
        char2Pos = j + 1;
        let char1 = string.substring(j,j+1);
        let char2 = string.substring(j+1,j+2);
        for (k = j+2; k < string.lenght;k++){
            let temp1 = string.substring(k,k+1);
            let temp2 = string.substring(k+1,k+2);
        }
        
    }
    // var count = (temp.match(/is/g) || []).length;
}

function constainsOneBetweenTwo(string) {

}

for (i = 0; i < strings.length; i++){
    isNice = 0;
    //check 2 characters to repeat
    const isContainPair = string => /([a-z][a-z]).*\1/.test(string);
    console.log(isContainPair(strings[i]));
}
