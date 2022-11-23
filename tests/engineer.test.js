const Engineer = require('../lib/Engineer');
const engineer = new Engineer('berekt', '981235', 'bashenafi35@gmail.com', 'berekt24');

it('should be able to get constructor values for Engineer object', () => {
    expect(engineer.name).toBe('berekt');
    expect(engineer.id).toBe('981235');
    expect(engineer.email).toBe('bashenafi35@gmail.com');
    expect(engineer.github).toBe('berekt24');
});

it('should be able to get name from getName() method', () => {
    expect(engineer.getName()).toBe('berekt');
});

it('should be able to get id from getId() method', () => {
    expect(engineer.getId()).toBe('981235');
});

it('should be able to get email from getEmail() method', () => {
    expect(engineer.getEmail()).toBe('bashenafi35@gmail.com');
});

it('should be able to get github username from getGithub() method', () => {
    expect(engineer.getGithub()).toBe('berekt24');
});

it('should be able to get role from getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});