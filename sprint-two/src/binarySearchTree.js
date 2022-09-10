var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value === value) {
    return;
  } else if (this.value < value) {
    if (!this.right) {
      var newtree = new BinarySearchTree(value);
      this.right = newtree;
    } else {
      this.right.insert(value);
    }
  } else if (this.value > value) {
    if (!this.left) {
      var newtree = new BinarySearchTree(value);
      this.left = newtree;
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else {
    if (this.value > value) {
      if (!this.left) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (!this.right) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
