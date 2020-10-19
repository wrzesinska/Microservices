const path = require('path')
const fs = require('fs')

function exportCatalogue() {
  const productsDir = path.join(__dirname, '../data/products')
  const outputFile = path.join(__dirname, '../output/catalogue.html')

  let outputHTML = ''

  // Read all descriptions from products
  fs.readdir(productsDir, (err, files) => {
    fs.access(outputFile, (err) => {
      fs.mkdir(path.dirname(outputFile), () => {
        console.log('dir created: ' + (path.dirname(outputFile)))
        fs.writeFile(outputFile, '', (err) => {
          if (err) {
            console.log(err)
            return;
          }
          console.log('Success!')
        })
      })
    })

    for (let file of files) {
      console.log(file)
      fs.readFile(path.join(productsDir, file, 'description.html'), (err, data) => {
        // outputHTML += (data.toString())
        data = '<h1>Product '+file+'</h1> \r\n' + data.toString()
        fs.appendFile(outputFile, (data),()=>{
          console.log('Appended product: '+file)
        })
        // console.log(path.parse(outputFile))
      })
    }

  })

  // Combine all 'description.html' in one Catalogue file

  // Send as responses
}

exportCatalogue()