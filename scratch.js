const spencerColor = require('./src')
// const spencerColor = require('./builds/spencer-color')

let el = document.querySelector('#stage')
let html = Object.keys(spencerColor).map((k) => {
  if (k === 'black' || k === 'white') {
    return ''
  }
  return `<div class="w6 h4 rounded" style="background-color:${spencerColor[k]}; "></div>`
}).join('')
el.innerHTML = html
