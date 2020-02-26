const _ = require('lodash');

const deepPickBy = (obj, predicate) => {
  if (!_.isObject(obj)) {
    throw new Error('expected the first argument to be an object or an array');
  }

  if (!_.isFunction(predicate)) {
    throw new Error('expected the second argument to be a function');
  }

  return _.transform(obj, (memo, val, key) => {
    var include = predicate(val, key);
    if (!include && _.isObject(val)) {
      val = deepPickBy(val, predicate);
      include = !_.isEmpty(val);
    }
    if (include) {
      if (_.isArray(obj)) {
        memo.push(val);
      } else {
        memo[key] = val;
      }
    }
  });
};

module.exports = deepPickBy;
