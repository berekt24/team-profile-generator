const Manager = require('../lib/Manager');
const manager = new Manager('berekt', '981235','bashenafi35@gmail.com','98');

it('should be able to get constructor values for Manager object', () => {
    expect(manager.name).toBe('berekt');
    expect(manager.id).toBe('981235');
    expect(manager.email).toBe('bashenafi35@gmail.com');
    expect(manager.officeNumber).toBe('98');
});

it('should be able to get name from getName() method', () => {
    expect(manager.getName()).toBe('berekt');
});

it('should be able to get id from getId() method', () => {
    expect(manager.getId()).toBe('981235');
});

it('should be able to get email from getEmail() method', () => {
    expect(manager.getEmail()).toBe('bashenafi35@gmail.com');
});

it('should be able to get office number from getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('98');
});

it('should be able to get role from getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});