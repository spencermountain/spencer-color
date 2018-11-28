const spencerColor = require('./src')
console.log(spencerColor)

let el = document.querySelector('#stage')
let html = Object.keys(spencerColor).map((k) => {
  if (k === 'black' || k === 'white') {
    return ''
  }
  return `<div class="w6 h4 rounded" style="background-color:${spencerColor[k]}; "></div>`
}).join('')
el.innerHTML = html
