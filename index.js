let testCase1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

let testCase2 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 80,
    chemistry: 100,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

const sortStudents = (students) => {
  students.sort((a, b) => {
    const totalMarks = b.biology - a.biology;
    if (totalMarks !== 0) return totalMarks;

    const biologyMarks = b.chemistry - a.chemistry;
    if (biologyMarks !== 0) return biologyMarks;

    const [day_a, month_a, year_a] = a.dob.split('-');
    const [day_b, month_b, year_b] = b.dob.split('-');
    const date_a = new Date(year_a, month_a - 1, day_a);
    const date_b = new Date(year_b, month_b - 1, day_b);

    return date_a - date_b;
  });

  return students.map((student) => student.name);
};

const sortedNames1 = sortStudents(testCase1);
const sortedNames2 = sortStudents(testCase2);

console.log(sortedNames1);
console.log(sortedNames2);
