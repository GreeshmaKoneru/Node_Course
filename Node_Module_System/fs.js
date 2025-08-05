const fs = require('fs')
// //reading a file

// let fileContent = fs.readFileSync('f1.txt')
// console.log('data of file 1-> ' + fileContent)

// //writing a file

// fs.writeFileSync('f3.txt', 'This is Greeshma')
// console.log('File has been written')

// //append a file

// fs.appendFileSync('f3.txt', ' I am a Software Engineer')
// console.log('File has been append')

// //delete a file
// fs.unlinkSync('f3.txt')
// console.log('File has been deleted')

//Directories

//Create a Directory

// fs.mkdirSync('myDirectory')

//Check contents inside directory

let folderpath = '/Users/greeshmakoneru/Documents/Node/Node_Module_System/myDirectory'
let foldercontent = fs.readdirSync(folderpath)
console.log("Folder Content: " , foldercontent)

//Check whether directory exists or not

let doesexist = fs.existsSync('cp.js')
console.log(doesexist)

//Delete directory

fs.rmdirSync('myDirectory')
console.log('Directory deleted')