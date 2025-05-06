
const fs = require('fs')
// gausah di ubah rek karna
// udh ada request pas di scan pairing
global.ownername = 'lepp';
global.owner = '60149346494';
global.botname = '60149346494';

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    delete require.cache[file]
    require(file)
})
