function input() {
  console.log("Welcome to Holberton School, what is your name?");
  const input = process.stdin.on("readable", () => {
    let data;
    if ((data = process.stdin.read()) !== null) {
      console.log(`Your name is: ${data}`);
    }
  });
}

input();
