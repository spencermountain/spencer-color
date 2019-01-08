const spencerColor = require('./src')
//log it for the console in the demo
window.spencerColor = spencerColor
console.log(spencerColor)

window.hmm = function(hex) {
  let el = document.querySelector('#hmm')
  el.innerHTML = hex
  el.style['border-bottom'] = '4px solid ' + hex
  el.style.margin = '10px'
}

// const spencerColor = require('./builds/spencer-color')
let html = Object.keys(spencerColor.colors).map((name) => {
  return `<div class="w5 h4 rounded" onclick="hmm('${spencerColor.colors[name]}')" style="background-color:${spencerColor.colors[name]};" title="${name}"></div>`
}).join('')
document.querySelector('#stage').innerHTML = html

const showList = function(list) {
  list = list.map((c) => {
    return `<div class="w4 h3 rounded" onclick="hmm('${c}')" style="background-color:${c};" title="${c}"></div>`
  }).join('')
  return `<div class="row">
    ${list}
  </div>`
}

let gradients = '<div class="col left">'
Object.keys(spencerColor.combos).map((combo) => {
  gradients += `<div style="color:#9aa4ac; margin-top:1.5rem;">${combo}:</div>`
  gradients += showList(spencerColor.combos[combo])
})
gradients += '</div>'
document.querySelector('#gradients').innerHTML = gradients
