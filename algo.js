console.clear();
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
function theatre(rows, columns) {
let theaterArray = new Array();
for (let i=1; i<= rows; i++) {
    for (let j=1; j<= columns;j++){
        theaterArray.push(i + "-" + j);
    }
}
    return theaterArray;
}
theatre(26,100).forEach(element => {
    console.log(element);
});