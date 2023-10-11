function transposeMatrix(matrix) {
    //new matrix to return
    const newMatrix = [];
    //swap the row and column places for each value
    for (let i = 0; i < matrix[0].length; i++) {
      const row = [];
      for (let j = 0; j < matrix.length; j++) {
        //push value into new row
        row.push(matrix[j][i]);
      }
      //push the new row into the new matrix
      newMatrix.push(row);
    };
    return newMatrix;
  }
