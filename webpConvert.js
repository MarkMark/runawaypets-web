const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')

/**
 * npm run webp
 * Convert images {jpg,png} to webp
 * @returns - ./webp folder with webp`s inside
 */
imagemin(['src/**/*.{jpg,png}'], './webp', {
  use: [imageminWebp({ quality: 50 })]
})
  .then(() => {
    console.log('Images optimized')
  })
  .catch(err => console.log('err', err))
