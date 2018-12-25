const colors = require('./colors')
let combos = {

  juno: ['blue', 'mud', 'navy', 'slate', 'pink',],
  barrow: ['rouge', 'red', 'orange', 'burnt', 'brown'],
  rome: ["#8a849a", "#9f9aac", "#b5b0bf", "#cac7d1", "#dfdde3"],
  palmer: ['red', 'navy', 'olive', 'pink', 'suede', 'sky'],
  mark: ["#848f9a", "#9aa4ac", 'slate', "#b0b8bf", 'mud', 'grey'],
  salmon: ['sky', 'sea', 'fuscia', 'slate', 'suede'],
  dupont: ['green', 'brown', 'orange', 'red', 'olive', 'blue'],
  bloor: ['night', 'sky', 'beige', 'grey', 'mud', 'pink', 'red'],
  yukon: ['mud', 'slate', 'brown', 'sky', 'beige', 'red'],
  dave: ['blue', 'green', 'yellow', 'red', 'pink'],

  ned: ['mud', 'cherry', 'royal', 'rouge', 'greygreen', 'greypurple']
// reds: ['#cc6966', '#cc6f66', '#e6b3bc', 'orange']
// browns: ["#9a9484", "#a39e8f", "#aca89a", "#b6b1a5", "#bfbbb0", "#c8c5bc", "#d1cec7", "#dad8d2", "#e3e2dd"],
// reds: ["#9a8487", "#a38f92", "#ac9a9d", "#b6a5a8", "#bfb0b3", "#c8bcbe", "#d1c7c8", "#dad2d3", "#e3ddde"],
// blues: ["#2d5086", "#335b99", "#3966ac", "#4072bf", "#5380c6", "#668ecc", "#799cd2", "#8caad9", "#9fb8df", "#b3c6e6"],
// reds: ["#862d35", "#99333d", "#ac3944", "#bf404c", "#c6535e", "#cc6670", "#d27982", "#d98c94", "#df9fa6", "#e6b3b7"],
// greens: ["#2d864c", "#339957", "#39ac62", "#40bf6d", "#53c67b", "#66cc8a", "#79d298", "#8cd9a7", "#9fdfb6", "#b3e6c4"],
// browns: ["#864b2d", "#995633", "#ac6039", "#bf6b40", "#c67a53", "#cc8966", "#d29779", "#d9a68c", "#dfb59f", "#e6c4b3"],
// purples: ["#4e2d86", "#593399", "#6439ac", "#6f40bf", "#7d53c6", "#8c66cc", "#9a79d2", "#a88cd9", "#b79fdf", "#c5b3e6"]
}

Object.keys(combos).forEach((k) => {
  combos[k] = combos[k].map((c) => colors[c] || c)
})
module.exports = combos
