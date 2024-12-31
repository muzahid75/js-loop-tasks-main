for (let i = 1; i <= 100; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      console.log(i); // Output the first square number
      break; // Exit the loop when the first square number is encountered
    }
  }
  