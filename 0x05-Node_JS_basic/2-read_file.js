const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const newdata = data.split('\n');
    newdata.shift();
    console.log(`Number of students: ${newdata.length}`);
    let cs = 0;
    const csStudents = [];
    let swe = 0;
    const sweStudents = [];
    newdata.forEach((student) => {
      const details = student.split(',');
      if (details[3] === 'CS') {
        cs += 1;
        csStudents.push(student);
      } else if (details[3] === 'SWE') {
        swe += 1;
        sweStudents.push(student);
      }
    });
    const csFirstNames = [];
    for (const names of csStudents) {
      const data = names.split(',');
      csFirstNames.push(data[0]);
    }
    const sweFirstNames = [];
    for (const names of sweStudents) {
      const data = names.split(',');
      sweFirstNames.push(data[0]);
    }
    console.log(
      // eslint-disable-next-line comma-dangle
      `Number of students in CS: ${cs}. List: ${csFirstNames.join(', ')}`
    );
    console.log(
      // eslint-disable-next-line comma-dangle
      `Number of students in SWE: ${swe}. List: ${sweFirstNames.join(', ')},`
    );
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    }
    throw err;
  }
}
module.exports = countStudents;
