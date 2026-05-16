
const { SdkGen } = require('@voxgig/sdkgen')

const config = {
  root: __dirname+'/../dist/Root.js',
  folder: __dirname+'/../..',
  meta: {
    name: 'web-page-to-markdown'
  },
  model: {
    folder: __dirname+'/../model',
  },
  existing: { txt: { merge: true } },
}

module.exports = SdkGen.makeBuild(config)
