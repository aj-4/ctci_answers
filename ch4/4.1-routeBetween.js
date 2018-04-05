const DirGraph = require('./*Graph');

//given a directed graph, determine whether there is a route between 2 points

const routeBetween = ( graph, pt1, pt2 ) => {
    const marked = [];
    
    if (pt1 === pt2) return true;
    let found = dfsFind(graph.points[pt1]);
    return found ? true : false;

    function dfsFind(pt) {
        if (pt.val === pt2) return true;
        let found;
        for (let edge of pt.edges) {
            if (!marked[edge]) {
                marked[edge] = true;
            }
            if (dfsFind(graph.points[edge])) {
                return true;
            }
        }
    }
}

let dg = new DirGraph;
dg.addPoint();
dg.addPoint();
dg.addPoint();
dg.addPoint();
dg.addPoint();

dg.addEdge(0, 1);
dg.addEdge(1, 2);
dg.addEdge(2, 3);
dg.addEdge(3, 4);

dg.addPoint();

console.log(routeBetween(dg, 0, 4) === true);
console.log(routeBetween(dg, 0, 5) === false);

dg.addEdge(2, 5);

console.log(routeBetween(dg, 0, 5) === true);