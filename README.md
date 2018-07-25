# vue-container-component

A simple container component inspired on Bootstrap container

## Getting Started

#### NPM

```bash
$ npm install vue-container-component --save
```

#### Clone this repo

Clone or [download](https://github.com/kavalcante/vue-container-component/archive/master.zip) the component and save in your own project.

## Installing

#### ES6
```js
import container from 'vue-container-component';

new Vue({
  components: {
    container
  }
})
```

#### CommonJS

```js
var container = require('vue-container-component');

new Vue({
  components: {
    'container': container
  }
})
```

## USAGE

#### Common usage

```html
<container>
  <!-- content -->
</container>
```

#### Container fluid

```html
<container fluid>
  <!-- content -->
</container>
```

## Attributes


| Option        | Default       | Type   | Description  |
| :------------ | :------------ | :----- | :--------- |
| __fluid__     | false         | boolean| Enable container fluid |

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details