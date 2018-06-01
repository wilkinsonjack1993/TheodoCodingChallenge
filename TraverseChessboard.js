// This function assumes that we are starting at the top left corner of the array and traversing
// to the bottom right corner by only moving right or down
// Each square has a values
// What is the maximum value you could collect via traversing the board.

function solution(A) {
    // Find array dimensions
    var N = A.length;
    var M = A[0].length;

    var maxArray = populateMaxValueArray(A, N, M);

    // Now that the maximum array has been populated, we can return the value in the finishing square
    return maxArray[N-1][M-1];
}

// Traverse through array and update the value in each array to be the maximum amount of grains
// of rice that can be collected by traversing to that point from the beginning moving in only a right
// or down direction.

//e.g. [1,2,3]   becomes: [1, 3, 6]
//     [4,5,6]            [5,10,16]
function populateMaxValueArray(A, N, M) {
  for(i=0; i<N; i++) {
    for(j=0; j<M; j++) {
      // If the top left square in array, the max value to get to that square is equal to itself
      if (i ===0 && j === 0) {
        A[i][j]= A[i][j]

      // Else if i is zero we are on the side of the chess board so the max value of that square
      // is equal to the one above plus the original value of that square
      } else if (i===0) {
        A[i][j]= A[i][j] + A[i][j-1]

      // Else if j is zero we are on the side of the chess board so the max value of that square
      // is equal to the one to the left plus the original value of that square
      } else if (j===0) {
        A[i][j]= A[i][j] + A[i-1][j]

      // else we take the largest value of the square above and the square to the left and add it
      // to the existing array value
      } else {
        A[i][j]= A[i][j] + maxValue(A[i-1][j], A[i][j-1]);
      }
    }
  }
  return A;
}


// Returns max value of the given two values
function maxValue(A, B) {
  if(A > B) {
    return A;
  } else {
    return B;
  }
}

console.log(solution([[1,2,3],[4,5,6]]));
