//if an element in an MxN matrix is zero, set its entire row and column to zero

const zeroRc = (matrix) => {
    let zRows = [];
    let zCols = [];
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (matrix[r][c] === 0) {
                zRows.push(r);
                zCols.push(c);
            }
        }
    }
    for (let r of zRows) {
        for (let c = 0; c < matrix[0].length; c++) {
            matrix[r][c] = 0;
        }
    }
    for (let c of zCols) {
        for (let r = 0; r < matrix.length; r++) {
            matrix[r][c] = 0;
        }
    }

    return matrix;
}

console.log(zeroRc([[1,2,3],[4,5,0],[7,8,9]]))