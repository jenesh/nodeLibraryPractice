const fs = require('fs')

console.clear()

fs.readdir('/Users/jenesh/Documents', (err, files) => {
    if (err) {
        console.log('Error: ', err)
    } else {
        console.log('Result: ', files)
    }
})

fs.readFile('./fileSystem.js', 'utf8', (err, files) => {
    if (err) {
        console.log('Error: ', err)
    } else {
        console.log('Result: ', files)
    }
})


// fs.symlink('./fileSystem', '../nodeLibraryPractice', (err, files) => {
//     if (err) {
//         console.log('Error: ', err)
//     } else {
//         console.log('Result: ', files)
//     }
// })