const fs = require('fs')

fs.readFile('./url.txt', (err, data) => {
  if (err) throw err;
  const subscribeContent = data.toString('base64')
  fs.writeFile('./urlEn.txt', subscribeContent, (err) => {
    if (err) throw err;
  })
})