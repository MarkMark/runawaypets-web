const autoprefixer = require('autoprefixer')
const postcss = require('postcss')

postcss([autoprefixer])
  .process(css, {
    from: '../build/**/*.css',
    to: 'dest/app.css'
  })
  .then(function(result) {
    result.warnings().forEach(function(warn) {
      console.warn(warn.toString())
    })
    console.log(result.css)
  })
