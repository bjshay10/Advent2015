var unique = require('array-unique');

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./input.txt')
});


lineReader.on('line', (line) => {
    var direction = line.split("")
    var houses = ['0,0'];
    var x = 0;
    var y = 0;
    var v = 0;
    var visited = [];
    direction.forEach((e) => {
        if (e === "^") y--;
        if (e === ">") x++;
        if (e === "v") y++;
        if (e === "<") x--;
        houses.push([`${x},${y}`]);
    });
    
    for(i = 0; i < houses.length; i++) {
        if (visited.length === 0) {
            visited.push(houses[i]);
        } else {
            // console.log(`${houses.length}`);
            for (j = 0; j < visited.length; j++) {
                var temp1 = houses[i].toString();
                var temp2 = visited[j].toString();
                if (temp1 === temp2) {
                    v = 1;
                    break;
                } else {
                    v = 0;
                }
            }
            if (v === 0) {
                visited.push(houses[i]);
            }
        }
    }

    console.log(visited.length);
});





// var v = input.split("")
// .reduce((data, ch) => {
//     if (ch === "^") data.y--;
//     if (ch === ">") data.x++;
//     if (ch === "v") data.y++;
//     if (ch === "<") data.x--;
//     data.visited.add(data.x + "," + data.y);

//     return data;
// }, {
//     x: 0,
//     y: 0,
//     visited: new Set
// }).visited.size;

// console.log(v);