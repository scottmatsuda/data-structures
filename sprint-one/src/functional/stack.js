var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numKey = 0;
  // Implement the methods below
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
