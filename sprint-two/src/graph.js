

// Instantiate a new graph
var Graph = function() {
  this.newGraph = {}
  //this.edge = [];
  // newGraph[4] = [3, 2]
  // newGraph[3] = [4]
  // node => key/value key(value) => value[edges]
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.newGraph[node] = [];
  //initialize object with key of node, value of [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
   return this.newGraph[node] ? true: false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  while(this.newGraph[node].length > 0){
      this.removeEdge(this.newGraph[node][0], node);
    }
  delete this.newGraph[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromtrue = false;
  var totrue = false;
  if(this.newGraph[fromNode]){
    for(let i =0 ; i <  this.newGraph[fromNode].length; i++) {
      fromtrue = fromtrue ? fromtrue: this.newGraph[fromNode][i];
    }
  }
  if(this.newGraph[toNode]){
    for(let i =0 ; i <  this.newGraph[toNode].length; i++) {
      totrue = totrue ? totrue: this.newGraph[toNode][i];
    }
  }
  if(totrue && fromtrue){
    return true;
  }else {
    return false;
  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // adds edge to array of each node
 // if(this.newGraph[fromNode] && this.newGraph[fromNode]) {
    this.newGraph[fromNode].push(toNode);
    this.newGraph[toNode].push(fromNode);
//  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for(let i = 0; i < this.newGraph[fromNode].length; i++){
    if(this.newGraph[fromNode][i] === toNode){
      this.newGraph[fromNode].splice(i, 1);
    }
  }
  for(let i = 0; i < this.newGraph[toNode].length; i++){
    if(this.newGraph[toNode][i] === fromNode){
      this.newGraph[toNode].splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(let key in this.newGraph){
    cb(key);
  }
};

// inputs addnode,contains, remove => node; hasEdge, addEdge,RemoveEdge => 2 nodes; forEachNode +> callback Function
//contains , hasEdge return boolean values;


/*
 * Complexity: What is the time complexity of the above functions?
 * addNode => O(1)
 * contains => O(1)
 *remove node => O(n^2)
 * hasEdge => O(n)
 * removeEdge => O(n)
 * forEachNode => O(n)
 */


