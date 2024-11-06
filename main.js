const { error } = require('console');
const fs = require('fs');

// TODO: Write the message "Hello, World!" to the file "output.txt"
const fileName = "output.txt"
fs.readFile(fileName,(error)=>{
    if(error){
        console.error("An error occurred while writing to the file:", err);
        throw err;
    }
    console.log("Message written to file successfully.");
})
