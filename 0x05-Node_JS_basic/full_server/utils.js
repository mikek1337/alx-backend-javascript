import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }

      if (data) {
        const lines = data.toString().split('\n');
        lines.shift();
        const students = {};
        // eslint-disable-next-line guard-for-in
        for (const line in lines) {
          const entry = lines[line].split(',');
          if (students[entry[entry.length - 1]] != null) {
            // eslint-disable-next-line no-lonely-if
            if (entry[entry.length - 1] !== '') {
              students[entry[entry.length - 1]].firstname.push(entry[0]);
            }
          } else {
            // eslint-disable-next-line no-lonely-if
            if (entry[entry.length - 1] !== '') {
              students[entry[entry.length - 1]] = {
                firstname: [entry[0]],
              };
            }
          }
        }
        resolve(students);
      }
    });
  });
}

export default readDatabase;
module.exports = readDatabase;
