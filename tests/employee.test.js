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

it('should be able to get id from getId() method', () => {
    expect(employee.getId()).toBe('981235');
});

it('should be able to get email from getEmail() method', () => {
    expect(employee.getEmail()).toBe('bashenafi35@gmail.com');
});

it('should be able to get role from getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});