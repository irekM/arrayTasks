const employees = [
    {
      name: "Alice Johnson",
      department: "Marketing",
      position: "Marketing Specialist",
      salary: 60000
    },
    {
      name: "Bob Smith",
      department: "Marketing",
      position: "Marketing Specialist",
      salary: 85000
    },
    {
      name: "Catherine Lee",
      department: "Sales",
      position: "Sales Manager",
      salary: 70000
    },
    {
      name: "David Brown",
      department: "Marketing",
      position: "Content Creator",
      salary: 55000
    },
    {
      name: "Evelyn Davis",
      department: "IT",
      position: "System Administrator",
      salary: 75000
    },
    {
      name: "Frank Wilson",
      department: "Sales",
      position: "Account Executive",
      salary: 65000
    }
  ];
  
  /* Task - How many people work in sales? */
const salesEmp = employees.filter(employee => employee.department === "Sales");
console.log(salesEmp);
console.log(`${salesEmp.length} wakaty`)
  
  /* Task - How many people make more than 60k? */
  
const numberOfSalaries = employees.filter(employee => employee.salary > 60000).length;
console.log(`ilość osób zarabiających więcej niż 60k to ${numberOfSalaries}`);

  /* Task - Is there at least one System Administrato? */

const isAnyAdminHere = employees.some(employee => employee.position === "System Administrator");
console.log(`jest tu jaki admin? ${isAnyAdminHere ? "Tak" : "Nie"}`);
  
  /* Task - What is average salary? */
const sumOfAllSalaries = employees.reduce((sum, employee) => sum + employee.salary, 0);
const avg = sumOfAllSalaries / employees.length; // write your function here

console.log('Is average correct?: ', avg.toFixed(2) === '68333.33')
//true
  
  /* Task - Which department is the biggest? */
// const biggestDept: string = '' // write your function here
 
const marketing = employees.filter(employee => employee.department === "Marketing").length;
const sales = employees.filter(employee => employee.department === "Sales").length;
const it = employees.filter(employee => employee.department === "IT").length;

const biggestDept = marketing >= sales && marketing >= it ? "Marketing" : sales >= it ? "Sales" : "IT";

console.log('Is biggest department correct?: ', biggestDept === 'Marketing')
  
  /* Task (fun one) - Create an object that groups employees by department 
  The result should look like this: */
const departments = {
    marketing: {
        deptName: 'Marketing',
        positions: ['Marketing Specialist', 'Content Creator'], // list all positions once
        people: [] // list all people that works in this dept
      }
      // ... all other depts 
  }