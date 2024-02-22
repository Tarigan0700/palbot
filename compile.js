const { compile } = require('nexe')
const package = require('./package.json')

const inputAppName = `${package.name}`
const outputAppName = `./bot/${package.name}`

compile({
    clean: false,
    build: true,
    verbose: true,
    input: inputAppName,
    output: outputAppName,
    resources: [
        './package.json',
        './Commands',
        './Events',
        './Functions',
        './Handlers',
    ],
}).then((err) => {
  if (err) throw err
  console.log('success')
})