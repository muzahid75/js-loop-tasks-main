const number = 9; // Replace this with any number for which you want the table
const range = 10; // Range for the multiplication table (default is 10)

console.log(`Multiplication Table for ${number}:`);

for (let i = 1; i <= range; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
