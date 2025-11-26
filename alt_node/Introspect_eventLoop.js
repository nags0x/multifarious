const fs = require('fs');
const path = require('path');

const bigFile = path.join(__dirname,'bigFile.txt');
if(!fs.existsSync(bigFile)){
    console.log('Creating a big file (~50MB)...');
    const data = 'x'.repeat(1024 * 1024 * 50);
    fs.writeFileSync(bigFile, data);
    console.log('Big file created.\n');

}
console.time('SyncTimer');
const SyncRead = fs.readFileSync(bigFile);
console.timeEnd('SyncTimer')
console.log("Just comepleted reading file synchronously")


console.time('AsyncTimer');
console.log("Async: This line runs IMMEDIATELY (before file is read!)");
const asyncReading = fs.readFile(bigFile, 'utf-8', (err, data) => {
    if(err) console.log("err on asyncFileRead: ", err);
    console.timeEnd('AsyncTimer'); 
    console.log('Async: File finally read - callback executed\n'); 
});

console.log("this would exec immediately cuz of asynchronicity");
for(let i = 0; i < 5; i++){
    console.log(`Async task exec ${i + 1}`);
}

console.log('\n=== DEMO FINISHED ===');