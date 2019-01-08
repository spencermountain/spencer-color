(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
"use strict";

var spencerColor = _dereq_('./src'); //log it for the console in the demo


window.spencerColor = spencerColor;
console.log(spencerColor);

window.hmm = function (hex) {
  var el = document.querySelector('#hmm');
  el.innerHTML = hex;
  el.style['border-bottom'] = '4px solid ' + hex;
  el.style.margin = '10px';
}; // const spencerColor = require('./builds/spencer-color')


var html = Object.keys(spencerColor.colors).map(function (name) {
  return "<div class=\"w5 h4 rounded\" onclick=\"hmm('".concat(spencerColor.colors[name], "')\" style=\"background-color:").concat(spencerColor.colors[name], ";\" title=\"").concat(name, "\"></div>");
}).join('');
document.querySelector('#stage').innerHTML = html;

var showList = function showList(list) {
  list = list.map(function (c) {
    return "<div class=\"w4 h3 rounded\" onclick=\"hmm('".concat(c, "')\" style=\"background-color:").concat(c, ";\" title=\"").concat(c, "\"></div>");
  }).join('');
  return "<div class=\"row\">\n    ".concat(list, "\n  </div>");
};

var gradients = '<div class="col left">';
Object.keys(spencerColor.combos).map(function (combo) {
  gradients += "<div style=\"color:#9aa4ac; margin-top:1.5rem;\">".concat(combo, ":</div>");
  gradients += showList(spencerColor.combos[combo]);
});
gradients += '</div>';
document.querySelector('#gradients').innerHTML = gradients;

},{"./src":4}],2:[function(_dereq_,module,exports){
"use strict";

var colors = {
  blue: '#6699cc',
  green: '#6accb2',
  yellow: '#e1e6b3',
  red: '#cc7066',
  pink: '#F2C0BB',
  //'#e6b8b3',
  brown: '#705E5C',
  orange: '#cc8a66',
  purple: '#d8b3e6',
  navy: '#335799',
  olive: '#7f9c6c',
  fuscia: '#735873',
  //'#603960',
  beige: '#e6d7b3',
  slate: '#8C8C88',
  suede: '#9c896c',
  burnt: '#603a39',
  sea: '#50617A',
  sky: '#2D85A8',
  night: '#303b50',
  // dark: '#2C3133',
  rouge: '#914045',
  grey: '#838B91',
  mud: '#C4ABAB',
  royal: '#275291',
  cherry: '#cc6966',
  tulip: '#e6b3bc',
  rose: '#D68881',
  fire: '#AB5850',
  greyblue: '#72697D',
  greygreen: '#8BA3A2',
  greypurple: '#978BA3',
  burn: '#6D5685',
  slategrey: '#bfb0b3',
  light: '#a3a5a5',
  lighter: '#d7d5d2',
  fudge: '#4d4d4d',
  lightgrey: '#949a9e',
  white: '#fbfbfb',
  dimgrey: '#606c74',
  softblack: '#463D4F',
  dark: '#443d3d',
  black: '#333333'
};
module.exports = colors;

},{}],3:[function(_dereq_,module,exports){
"use strict";

var colors = _dereq_('./colors');

var combos = {
  juno: ['blue', 'mud', 'navy', 'slate', 'pink', 'burn'],
  barrow: ['rouge', 'red', 'orange', 'burnt', 'brown', 'greygreen'],
  roma: ["#8a849a", "#b5b0bf", 'rose', "lighter", "greygreen", 'mud'],
  palmer: ['red', 'navy', 'olive', 'pink', 'suede', 'sky'],
  mark: ["#848f9a", "#9aa4ac", 'slate', "#b0b8bf", 'mud', 'grey'],
  salmon: ['sky', 'sea', 'fuscia', 'slate', 'mud', 'fudge'],
  dupont: ['green', 'brown', 'orange', 'red', 'olive', 'blue'],
  bloor: ['night', 'navy', 'beige', 'rouge', 'mud', 'grey'],
  yukon: ['mud', 'slate', 'brown', 'sky', 'beige', 'red'],
  david: ['blue', 'green', 'yellow', 'red', 'pink', 'light'],
  neste: ['mud', 'cherry', 'royal', 'rouge', 'greygreen', 'greypurple'],
  ken: ["red", "sky", "#c67a53", "greygreen", "#dfb59f", "mud"] // slug: ['', '', '', '',]
  // reds: ['#cc6966', '#cc6f66', '#e6b3bc', 'orange']
  // browns: ["#9a9484", "#a39e8f", "#aca89a", "#b6b1a5", "#bfbbb0", "#c8c5bc", "#d1cec7", "#dad8d2", "#e3e2dd"],
  // reds: ["#9a8487", "#a38f92", "#ac9a9d", "#b6a5a8", "#bfb0b3", "#c8bcbe", "#d1c7c8", "#dad2d3", "#e3ddde"],
  // blues: ["#2d5086", "#335b99", "#3966ac", "#4072bf", "#5380c6", "#668ecc", "#799cd2", "#8caad9", "#9fb8df", "#b3c6e6"],
  // reds: ["#862d35", "#99333d", "#ac3944", "#bf404c", "#c6535e", "#cc6670", "#d27982", "#d98c94", "#df9fa6", "#e6b3b7"],
  // greens: ["#2d864c", "#339957", "#39ac62", "#40bf6d", "#53c67b", "#66cc8a", "#79d298", "#8cd9a7", "#9fdfb6", "#b3e6c4"],
  // purples: ["#4e2d86", "#593399", "#6439ac", "#6f40bf", "#7d53c6", "#8c66cc", "#9a79d2", "#a88cd9", "#b79fdf", "#c5b3e6"]

};
Object.keys(combos).forEach(function (k) {
  combos[k] = combos[k].map(function (c) {
    return colors[c] || c;
  });
});
module.exports = combos;

},{"./colors":2}],4:[function(_dereq_,module,exports){
"use strict";

var colors = _dereq_('./colors');

var combos = _dereq_('./combos');

var methods = {
  colors: colors,
  list: Object.keys(colors).map(function (k) {
    return colors[k];
  }),
  combos: combos
};
module.exports = methods;

},{"./colors":2,"./combos":3}]},{},[1]);
