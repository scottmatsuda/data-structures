var Graph = function() {
  this.newGraph = {};
};

Graph.prototype.addNode = function(node) {
  this.newGraph[node] = [];
};

Graph.prototype.contains = function(node) {
  return this.newGraph[node] ? true: false;
};

Graph.prototype.removeNode = function(node) {
  while (this.newGraph[node].length > 0) {
    this.removeEdge(this.newGraph[node][0], node);
  }
  delete this.newGraph[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromtrue = false;
  var totrue = false;
  if (this.newGraph[fromNode]) {
    for (let i = 0; i < this.newGraph[fromNode].length; i++) {
      fromtrue = fromtrue ? fromtrue : this.newGraph[fromNode][i];
    }
  }
  if (this.newGraph[toNode]) {
    for (let i = 0; i < this.newGraph[toNode].length; i++) {
      totrue = totrue ? totrue : this.newGraph[toNode][i];
    }
  }
  if (totrue && fromtrue) {
    return true;
  } else {
    return false;
  }

};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this.newGraph[fromNode].push(toNode);
  this.newGraph[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (let i = 0; i < this.newGraph[fromNode].length; i++) {
    if (this.newGraph[fromNode][i] === toNode) {
      this.newGraph[fromNode].splice(i, 1);
    }
  }
  for (let i = 0; i < this.newGraph[toNode].length; i++) {
    if (this.newGraph[toNode][i] === fromNode) {
      this.newGraph[toNode].splice(i, 1);
    }
  }
};

Graph.prototype.forEachNode = function(cb) {
  for (let key in this.newGraph) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode => O(1)
 * contains => O(1)
 *remove node => O(n^2)
 * hasEdge => O(n)
 * removeEdge => O(n)
 * forEachNode => O(n)
 */


