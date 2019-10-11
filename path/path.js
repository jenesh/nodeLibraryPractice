const path = require('path')

const path = require('path')

const currDir = path.parse(__dirname);
const currFileName = path.parse(__filename);
const pathBaseName = path.posix.basename(currFileName.dir);
const pathBaseNameFilteredExtention = path.posix.basename(currFileName.dir, '.js');

console.clear()

console.log('Dir name: ', currDir)
console.log('File name: ', currFileName)
console.log('Path Base name: ', pathBaseName)
console.log('Path Base name .js filtered :', pathBaseNameFilteredExtention)


const currPath = 'Documents/Pursuit/nodeLibraryPractice/path/path.js';
const dirName = path.dirname(currPath);
const extName = path.extname(currPath);

console.log('Dir name of a path: ', dirName)
console.log('Ext name of a path: ', extName)

const pathFormated = path.format(currFileName);
const pathAbsolute = path.isAbsolute(pathFormated);

console.log('Formatted Path: ', pathFormated)
console.log('Is path Absolute: ', pathAbsolute)

const joinPath = path.join('Documents', 'Pursuit', 'nodeLibraryPractice')
const normalizePath = path.normalize('/Documents/Pursuit/nodeLibraryPractice/..')

console.log('Join path: ', joinPath)
console.log('Normalized Path: ', normalizePath)
