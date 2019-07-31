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


var seats = []

function theatre (i,x) {
    for(i=1;i<27;i++)
for(x=1;x<101;x++){ 

  seats.push([i,x])}
console.log(seats)
}

theatre ()


