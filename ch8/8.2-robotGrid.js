const robotMaze = (row, column) => {
    let maxR = row;
    let maxC = column;

    findPath(0, 0);

    function findPath(r, c) {
        if (r > maxR || c > maxC || r < 0 || c < 0) {
            return false;
        }
        if (r === r - 1 && c === c - 1) {
            return true;
        }
        return findPath(r + 1, c) || findPath(r, c + 1);
    }
}