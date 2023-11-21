const fs = require('fs');

module.exports = async (path) => {
  try
  {
    const data = await fs.readFileSync(path);

  } catch(error)
  {
    throw new Error('Cannot load the database');
  }
  if (!data) {
    throw new Error('Cannot load the database');
  } else {
    const lines = data.toString().split('\n');
    lines.shift();
    console.log(`Number of students: ${lines.length}`);
    const fieldsCounts = {};
    // eslint-disable-next-line guard-for-in
    for (const line in lines) {
      const entry = lines[line].split(',');
      // eslint-disable-next-line no-lonely-if
      if (fieldsCounts[entry[entry.length - 1]] != null) {
        if (entry[entry.length - 1] !== '') {
          fieldsCounts[entry[entry.length - 1]].count += 1;
          fieldsCounts[entry[entry.length - 1]].names.push(entry[0]);
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (entry[entry.length - 1] !== '') {
          fieldsCounts[entry[entry.length - 1]] = {
            count: 1,
            names: [entry[0]],
          };
        }
      }
    }
    // eslint-disable-next-line guard-for-in
    for (const field in fieldsCounts) {
      console.log(`Number of students in ${field}: ${fieldsCounts[field].count}. List: ${fieldsCounts[field].names.join(', ')}`);
    }
  }
};
