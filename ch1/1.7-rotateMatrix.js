//given an image represented by NxN rotate it 90deg
//can you do it in place?

const rotateMatrix = (matrix) => {
    matrix = matrix.reverse();

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < r; c++) {
            let tmp = matrix[r][c];
            matrix[r][c] = matrix[c][r];
            matrix[c][r] = tmp;
        }
    }

    return matrix;
}  

console.log(rotateMatrix([[1,2,3], [4,5,6], [7,8,9]]));