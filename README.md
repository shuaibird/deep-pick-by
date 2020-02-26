# deep-pick-by
Recursively pick an object or an array by given criteria.

## Installation
```
npm install deep-pick-by --save
```

## Usage
```javascript
const deepPickBy = require('deep-pick-by');

const collection = {
  a: 0,
  b: 0,
  c: {
    a: 0,
    b: 0,
    c: {
      a: 0,
      b: 0,
    },
  },
};

deepPickBy(collection, (val, key) => key === 'a');
//=> { a: 0, c: { a: 0, c: { a: 0 } } }
```
