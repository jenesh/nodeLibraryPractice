const os = require('os')

const osCpu = os.cpus()
const freeMemory = os.freemem()
const homeDir = os.homedir()
const hostName = os.hostname()
const platform = os.platform()
const totalMemory = os.totalmem()
const upTime = os.uptime() / 3600;

console.clear()

console.log('>>> OS Module <<<')
console.log('CPU: ', osCpu)
console.log('Free Memory: ', freeMemory)
console.log('Home Dir: ', homeDir)
console.log('Host Name: ', hostName)
console.log('Platform: ', platform)
console.log('Total Memory: ', totalMemory)
console.log('Up Time: ', upTime)