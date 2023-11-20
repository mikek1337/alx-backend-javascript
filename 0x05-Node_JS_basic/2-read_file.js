const fs = require("fs");
module.exports = (path) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log("Cannot load the database");
    }
    const lines = data.toString().split("\n");
    lines.shift();
    console.log(`Number of students: ${lines.length}`);
    let fieldsCounts = {};
    for (let line in lines) {
      const entry = lines[line].split(",");
      if (fieldsCounts[entry[entry.length - 1]] != null) {
        if (entry[entry.length - 1] !== "") {
          fieldsCounts[entry[entry.length - 1]].count++;
          fieldsCounts[entry[entry.length - 1]].names.push(entry[0]);
        }
      } else {
        if (entry[entry.length - 1] !== "") {
          fieldsCounts[entry[entry.length - 1]] = {
            count: 1,
            names: [entry[0]],
          };
        }
      }
    }

    for (let field in fieldsCounts) {
      console.log(
        `Number of students in ${field}: ${
          fieldsCounts[field].count
        }. List: ${fieldsCounts[field].names.join(", ")}`
      );
    }
  });
};
