const os = require('os'); //replace object to tinker :)
const objPropsLength = Object.getOwnPropertyNames(os).length;
let i = 0;
while(i < objPropsLength){
    const prop = Object.getOwnPropertyNames(os)[i];
    if(typeof os[prop] === "function"){
        try{console.log(`propName: ${prop} - ${os[prop]()}`);}
     catch{
        console.log("will need args");
    } }
    else{
        try{
            if(typeof os[prop] === object){
            console.log(`propName: ${prop} - ${JSON.stringify(os[prop])}`);
        } else { 
            console.log(`propName: ${prop} - ${os[prop]}`);
        }} catch(err){
            console.log(`error_received - ${err.message}`);
        }
    }
i++;}