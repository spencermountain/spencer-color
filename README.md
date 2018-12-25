# spencer-color
some colors i like to use

<div align="center">
  <a href="https://npmjs.org/package/spencer-color">
    <img src="https://img.shields.io/npm/v/spencer-color.svg?style=flat-square" />
  </a>
  <a href="https://unpkg.com/spencer-color">
    <img src="https://badge-size.herokuapp.com/spencermountain/spencer-color/master/builds/spencer-color.js" />
  </a>
</div>

`npm i spencer-color`

![image](https://user-images.githubusercontent.com/399657/50425342-2bf74580-0842-11e9-8b37-ad4d1a7326f1.png)

```js
import {colors, combos} from 'spencer-color'
console.log(colors.red)
// '#cc7066'
console.log(combos.dupont)
// [ "#6accb2", "#705E5C", "#cc8a66", "#cc7066", "#7f9c6c", "#6699cc" ]
```

yeah, instead of the default html colors:


![image](https://user-images.githubusercontent.com/399657/49593436-8e46df80-f941-11e8-9522-4a4a17d52e53.png)


client-side:
```html
<script src="https://unpkg.com/spencer-color"></script>
<script>
  let red= spencerColor.colors.red
  // '#cc7066'
</script>
```

#### See also:
* [spencer-css](https://github.com/spencermountain/spencer-css)
* [somehow](https://github.com/spencermountain/somehow) - svg drawing

**MIT**
