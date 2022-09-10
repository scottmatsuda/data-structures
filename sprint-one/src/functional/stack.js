var Stack = function() {

  var someInstance = {};
  var storage = {};
  var numKey = 0;

  someInstance.push = function(value) {
    storage[numKey] = value;
    numKey++;
  };

  someInstance.pop = function() {
    if (numKey > 0) {
      numKey--;
    }
    return storage[numKey];
  };

  someInstance.size = function() {
    return numKey;
  };

  return someInstance;
};
