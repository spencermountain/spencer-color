const greys = require('./greys')
const colors = require('./colors')
const combos = require('./combos')

let methods = {
  colors: colors,
  list: Object.keys(colors).map((k) => [k, colors[k]]),
  all: Object.assign({}, colors, greys),
  combos: combos,
}
methods = Object.assign(methods, combos)

module.exports = methods
