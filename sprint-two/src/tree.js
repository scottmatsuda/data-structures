var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
 newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  var isFound = false;
  if (this.value === target) {
    return true;
  }
  if (this.children.length > 0) {
    for (let i = 0; i < this.children.length; i++) {
      var testchild = this.children[i].contains(target);
      isFound = isFound ? isFound : testchild;
    }
  }
  return isFound;

};

// inputs: addChild => value, contains => target
   //outputs: contains => boolean
/*
 * Complexity: What is the time complexity of the above functions?
 */
// contains => O(n), addChild => O(1)
