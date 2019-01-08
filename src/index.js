const colors = require('./colors')
const combos = require('./combos')

let methods = {
  colors: colors,
  list: Object.keys(colors).map((k) => colors[k]),
  combos: combos
}
module.exports = methods
