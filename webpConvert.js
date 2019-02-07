const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')

imagemin(['src/**/*.{jpg,png}'], './', {
  use: [imageminWebp({ quality: 50 })]
})
  .then(() => {
    console.log('Images optimized')
  })
  .catch(err => console.log('err', err))
