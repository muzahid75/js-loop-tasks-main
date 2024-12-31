/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

console.log("Odd Number");
for (let i = 61; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.log("Even Number");

for (let n = 78; n <= 98; n++) {
    if (n % 2 === 0) {
        console.log(n);
    }
}