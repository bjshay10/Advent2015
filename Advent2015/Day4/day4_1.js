const crypto = require('crypto');

const input = 'iwrupvqb'

const md5 = data => crypto.createHash('md5').update(data).digest('hex');
// const isStartWithFive = data => data.slice(0,5) === '00000';
const isStartWithFive = data => data.slice(0,6) === '000000';

let counter = 0;
while(!isStartWithFive(md5(`${input}${counter}`))) counter++;

console.log(counter);