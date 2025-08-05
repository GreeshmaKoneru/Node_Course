const cp = require('child_process')
// cp.execSync('open -a Calculator')
// cp.execSync('open -a "Google Chrome" https://www.google.com')
console.log('output ' + cp.execSync('node demo.js'))