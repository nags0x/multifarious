const fs = require('fs');

const reader1 = fs.createReadStream('./input.txt');
const writer = fs.createWriteStream('./output.txt');
const reader2 = fs.createReadStream('./output.txt');
let data2 = '';

reader1.setEncoding('UTF8');
reader2.setEncoding('UTF8');

reader1.on('data', (chunk) => {
    writer.write(chunk);
})

reader1.on('end', () => {
    writer.end();
    console.log('writing from input.txt to output.txt done!!!');
    writer.on('finish', () => {
        reader2.on('data', (chunk) => {
            data2 += chunk;
        })
        reader2.on('end', () => {
            console.log(data2);
            console.log('read output.txt and chunked into data2');
        })
        reader2.on('error', (err) => {
            console.log(err.stack);
        })
    })
})

reader1.on('error', (err) => {
    console.log(err.stack);
})