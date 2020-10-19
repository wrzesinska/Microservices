const path = require('path')
const fs = require('fs')

async function exportCatalogue() {
  const productsDir = path.join(__dirname, '../data/products')
  const outputFile = path.join(__dirname, '../output/placki/catalogue.html')
  const outputDir = path.dirname(outputFile)

  try {
    await fs.promises.access(outputDir)
  } catch (err) {
    await fs.promises.mkdir(outputDir, { recursive: true })
  }
  await fs.promises.writeFile(outputFile, '')

  const dir = await fs.promises.opendir(productsDir)
  dir.

  const dirs = await fs.promises.readdir(productsDir)
  // All at once
  // await Promise.all(dirs.map( async (dir) => {
  //   const content = await fs.promises.readFile(path.join(productsDir, dir, 'description.html'))
  //   // ...
  // }))

  // In sequence
  for (let dir of dirs) {
    const content = await fs.promises.readFile(path.join(productsDir, dir, 'description.html'))
    data = '<h1>Product ' + file + '</h1> \r\n' + content.toString()
    await fs.promises.appendFile(outputFile, (data))
  }
  console.log('Success - file ready!')

  return ({
    dirs: dirs,
    outputFile,
    outputDir,
    status: 'success'
  })
}

/* 
function exportCatalogue() {
  const productsDir = path.join(__dirname, '../data/products')
  const outputFile = path.join(__dirname, '../output/placki/catalogue.html')
  const outputDir = path.dirname(outputFile)

  let outputHTML = ''

  return fs.promises.readdir(productsDir).then(dirs => {
    fs.promises.access(outputDir)
      .catch(err => fs.promises.mkdir(outputDir, { recursive: true }))
      .then(() => {
        console.log('Directory exists, clearing file')
        return fs.promises.writeFile(outputFile, '')
      })
      .then(() => {
        const allFilesPromise = dirs.map(file => {
          return fs.promises.readFile(path.join(productsDir, file, 'description.html'))
            .then((data) => {
              data = '<h1>Product ' + file + '</h1> \r\n' + data.toString()
              return fs.promises.appendFile(outputFile, (data))
            })
            .then(() => console.log('Appended product: ' + file))
        })
        return Promise.all(allFilesPromise)
      })
      .then(() => console.log('Success - file ready!'))
      .then(() => ({
        dirs: dirs,
        outputFile,
        outputDir,
        status: 'success'
      }))
  })
    .catch((error) => { console.log('Error' + error.message) })
}
 */

/* 
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
} */

exportCatalogue()