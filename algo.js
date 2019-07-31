/*
A theatre employee wants a list of all the seats from the main room.

In this room, the seats are organised as follows:
    - There are 26 columns of seats numbered from "1" to "26"
    - Each column contains 100 seats numbered from "1" to "100"

In the end, the list should look like this:
1-1
1-2
1-3
.
.
.
26-98
26-99
26-100

Create a function that returns an array containing all of the seat numbers.
*/

function matrix(column, row) {
  let matrix_array = [];
  for (let i = 0; i < column; i++) {
    matrix_array[i] = [];
    for (let j = 0; j < row; j++) {
      matrix_array[i][j] = i + 1 + "-" + (j + 1);
    }
  }
  return console.log(matrix_array);
}
matrix(3, 4);
