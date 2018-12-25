const spencerColor = require('./src')
// const spencerColor = require('./builds/spencer-color')

let html = Object.keys(spencerColor.colors).map((name) => {
  return `<div class="w6 h4 rounded" style="background-color:${spencerColor.colors[name]};" title="${name}"></div>`
}).join('')
document.querySelector('#stage').innerHTML = html

const showList = function(list, title) {
  list = list.map((c) => {
    return `<div class="w4 h3 rounded" style="background-color:${c};" title="${c}"></div>`
  }).join('')
  return `<div class="row">
    ${list}
  </div>`
}

let gradients = '<div class="col left">'
Object.keys(spencerColor.combos).map((combo) => {
  gradients += `<div style="color:#9aa4ac; margin-top:1.5rem;">${combo}:</div>`
  gradients += showList(spencerColor[combo])
})
// gradients += showList(spencerColor.pinks)
// gradients += showList(spencerColor.purples)
// gradients += showList(spencerColor.steel)
// gradients += showList(spencerColor.greens)
// gradients += showList(spencerColor.browns)
gradients += '</div>'
document.querySelector('#gradients').innerHTML = gradients
