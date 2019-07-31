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

// function columns(col) {
// 	let columnsArray = [];

// 	for (let i = 1; i <= col; i++) {
// 		columnsArray.push(i);
// 	}
// 	return columnsArray;
// }
// console.log(columns(26));

// function rows(row) {
// 	let rowsArray = [];

// 	for (let i = 1; i <= row; i++) {
// 		rowsArray.push(i);
// 	}
// 	return rowsArray;
// }

// console.log(rows(100));

function setSeatsNumbers(col, rows) {
	let seatsNumber = [];
	for (let i = 1; i <= col; i++) {
		for (var j = 1; j <= rows; j++) {
			seatsNumber.push(i + '-' + j);
		}
	}
	return seatsNumber;
}

console.log(setSeatsNumbers(26, 100));
