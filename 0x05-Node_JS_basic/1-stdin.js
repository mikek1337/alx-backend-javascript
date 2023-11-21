function input() {
  console.log("Welcome to Holberton School, what is your name?");
  process.stdin.on("readable", () => {
    let data;
    if ((data = process.stdin.read()) !== null) {
      process.stdout.write(`Your name is: ${data}`);
    }
  });
  process.stdin.on("end", (code) => {
    console.log("This important software is now closing");
  });
}

input();
