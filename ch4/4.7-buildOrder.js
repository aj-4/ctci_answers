const dg = require('./*Graph');

//given a schedule of projects and dependencies, find a build order

const tSort = (dag) => {
    const marked = [];
    const postOrderStack = [];
    for (let point of dag.points) {
        if (!marked[point.val]) {
            marked[point.val] = true;
            DFS(point);
            postOrderStack.push(point.val);
        }
    }

    return postOrderStack.reverse();

    function DFS(point) {
        for (let edge of point.edges) {
            if (!marked[edge]) {
                marked[edge] = true;
                DFS(dag.points[edge]);
                postOrderStack.push(edge);                                    
            }
        }
    }
}

let dag = new dg;

dag.addPoint();
dag.addPoint();
dag.addPoint();
dag.addPoint();
dag.addPoint();
dag.addPoint();

dag.addEdge(0, 3);
dag.addEdge(5, 1);
dag.addEdge(1, 3);
dag.addEdge(5, 0);
dag.addEdge(3, 2);

console.log(tSort(dag));