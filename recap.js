// 1. var let const
// brakup with var
const numbers = [12, 546, 45, 98];
let salary = 450;
salary = 455;

// default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0) {
  const remaining = salary - salary * tax;
  const total = remaining + bonus;
  return total;
}

// 3 .template string
const elementHTML = `e
<div>
  <h3>Name:</h3>
  <p>Address:</p>
  <p>Salary:${calculateSalary(1000, 0, 0)}</p>
  <p>Others:${numbers[2]}</p>
</div>
`;

// 4. Arrow function
const doubleIt = (x) => x * 2;
const calculatesalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5. spread
const ages = [11, 13, 15, 14, 10, 16];
const newAges = [...ages, 22, 24, 23];

// destructuring
const { x, y, z, /* rest=>*/ ...c } = {
  x: 45,
  y: 33,
  z: 33,
  name: "Sakib Al Hasan",
  salary: 450000,
};
const [a, b, ...r] = [12, 45, 21, 45, 65];
