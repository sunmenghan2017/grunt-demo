#!/usr/bin/node

const add = require('./add');

console.log(`30 + 40 = ${add(30, 40)}`);

if(process.argv.lenght != 4){
    console.log('add x y');
    process.exit(1);
}
var x=Number(process.argv[2]),
    y=Number(process.argv[3]);
console.log(`x + y = ${add(x, y)}`);
