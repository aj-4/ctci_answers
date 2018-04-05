class Directed {
    constructor(){
        this.points = [];
    }
    addPoint() {
        this.points.push(new Node(this.points.length));
    }
    addEdge(from, to) {
        this.points[from].edges.push(to);
    }
}

class Node {
    constructor(val) {
        this.val = val
        this.edges = [];
    }
}

module.exports = Directed;