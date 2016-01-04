## @ftbl/initializer

Initializer helper.

### Usage

Locate your initializers in the ```lib/initializers``` folder. Given an initializer at ```lib/initializers/routes.js```, then to call the initializer:

```javascript

var initialize = require('@ftbl/initializer');

initialize('routes');
```

The initializer should export a function:

```javascript

module.exports = function(apps, options) {
  // Do something with apps and options
};
```

To pass arguments to the initializer:

```javascript
initialize('routes', apps, options);
```
