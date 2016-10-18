var hash = require('./')
var fs = require('fs')

fs.createReadStream('LICENSE').pipe(hash(24, console.log))
