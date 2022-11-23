const Employee = require('../lib/employee');
const employee = new Employee('berekt', '981235','bashenafi35@gmail.com');

it('should be able to get constructor values for Employee object', () => {
    expect(employee.name).toBe('berekt');
    expect(employee.id).toBe('981235');
    expect(employee.email).toBe('bashenafi35@gmail.com');
});

it('should be able to get name from getName() method', () => {
    expect(employee.getName()).toBe('berekt');
});