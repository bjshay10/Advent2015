const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8').toString().split('');
const santaDirections = input.filter((item, index) => index % 2 === 0);
const roboSantaDirections = input.filter((item, index) => index % 2 === 1);;

const traverse = directions => {
    let visitedCoordinates = ['0x0'];
    let currentPosition = {x: 0, y: 0};
  
    directions.forEach(direction => {
      if (direction === '^') currentPosition.y++;
      if (direction === 'v') currentPosition.y--;
      if (direction === '>') currentPosition.x++;
      if (direction === '<') currentPosition.x--;
  
      visitedCoordinates.push(`${currentPosition.x}x${currentPosition.y}`);
    });
  
    return visitedCoordinates;
  };
  
  const result = new Set(traverse(santaDirections).concat(traverse(roboSantaDirections))).size;
  
  console.log(result);