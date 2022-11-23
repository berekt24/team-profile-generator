const Intern = require('../lib/Intern');
const intern = new Intern('berekt', '981235', 'bashenafi35@gmail.com', 'ohio state');

it('should be able to get constructor values for Manager object', () => {
    expect(intern.name).toBe('berekt');
    expect(intern.id).toBe('981235');
    expect(intern.email).toBe('bashenafi35@gmail.com');
    expect(intern.school).toBe('ohio state');
});

it('should be able to get name from getName() method', () => {
    expect(intern.getName()).toBe('berekt');
});

it('should be able to get id from getId() method', () => {
    expect(intern.getId()).toBe('981235');
});

it('should be able to get email from getEmail() method', () => {
    expect(intern.getEmail()).toBe('bashenafi35@gmail.com');
});

it('should be able to get school from getGithub() method', () => {
    expect(intern.getSchool()).toBe('ohio state');
});

it('should be able to get role from getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});