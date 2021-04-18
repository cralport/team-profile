const Employee = require('../lib/Employee');


test('create the Employee card', () => {
    const e = new Employee();

    expect(typeof(e)).toBe('object');
});

test('set name from the constructor', () => {
    const name ="Dave";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('id from constructor', () => {
    const testValue = 1;
    const e = new Employee('Dave', testValue);
    expect(e.id).toBe(testValue);
});

test('email from constructor', () => {
    const emailTest = 'test@email.com';
    const e = new Employee('Dave', emailTest);
    expect(e.email).toBe(emailTest);
});

