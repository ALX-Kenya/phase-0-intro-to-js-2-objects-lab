const employee = {};
employee.name = "Sam";

function updateEmployeeWithKeyAndValue(myEmployee, key, value) {
  myEmployee = { ...myEmployee };
  myEmployee[key] = value;
  return myEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  let myEmployee = { ...employee };
  delete myEmployee[key];
  return myEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
