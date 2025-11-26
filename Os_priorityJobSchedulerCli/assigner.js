import {input} from '@inquirer/input';
import {rawlist} from '@inquirer/rawlist';

let maxRange = 10;
let minRange = 1;
let duration = Math.tunc(Math.random() * 1000);
let size = Math.trunc(Math.random() * 10);
let status = null;
let refferal = null;

class tasks{
    constructor(id, name, duration, type, size, status, refferal){
        this.id = id;
        this.name = name;
        this.duration = duration;
        this.size = size;
        this.stats = status;
        this.refferal  = refferal
    }
}

function generateNo(max, min){
    let temp = Math.random() * (max - min) + min;
    console.log(`No of tasks generated: ${Math.trunc(temp)}`);
    return temp;
}
generateNo(maxRange,minRange);

//assin all_DataMembers && display table
async function defineTask_meat(){
let flukeNo = generateNo(maxRange, minRange);
let i = 1, tasksArray;
let choices = Array.from({length: flukeNo}, (_, index) => ({ //callback_inline 
    name: `t${index + 1}`,
    value: index + 1
}));
while(i <= flukeNo){
    const approval = await input({message: "Wanna reffer any task: "});
    approval.then((value) => {
        if(value === 'Yes'){
            const choice = await rawlist({
                message: 'Select task to reffer: ' ,
                choices
            })
        }
    })

    tasksArray.push(new tasks(i, `t${i}`,duration, size, status, refferal));
    i+=1;
}}