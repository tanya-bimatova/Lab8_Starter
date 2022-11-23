// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber tests
test('phone number: a valid american format', () => {
    expect(functions.isPhoneNumber("(000)867-5309")).toBe(true);
  });

test('phone number: international format', () => {
    expect(functions.isPhoneNumber("+1-909-539-1111")).toBe(true);
});

test('phone number: 9 digits', () => {
    expect(functions.isPhoneNumber("(000)867-530")).toBe(false);
});

test('phone number: letter present', () => {
    expect(functions.isPhoneNumber("(000)867-53o9")).toBe(false);
});

// isEmail tests
test('email: valid case 1', () => {
    expect(functions.isEmail("tatiana@ucsd.edu")).toBe(true);
  });

test('email: valid case 2', () => {
    expect(functions.isEmail("bimatova@gmail.com")).toBe(true);
});

test('email: no domain', () => {
    expect(functions.isEmail("bimatova@")).toBe(false);
});

test('email: no @', () => {
    expect(functions.isEmail("bimatovagmail.com")).toBe(false);
});

// test isStrongPassword
test('password: short and valid', () => {
    expect(functions.isStrongPassword("B_ma")).toBe(true);
});

test('password: long and valid', () => {
    expect(functions.isStrongPassword("Bimatova_123456")).toBe(true);
});

test('password: short invalid', () => {
    expect(functions.isStrongPassword("Bim")).toBe(false);
});

test('password: invalid character present', () => {
    expect(functions.isStrongPassword("Bimatova@123")).toBe(false);
});

// test isDate
test('date: XX is 1 digit long', () => {
    expect(functions.isDate("1/2/2003")).toBe(true);
});

test('date: XX is 2 digits long', () => {
    expect(functions.isDate("01/02/2003")).toBe(true);
});

test('date: invalid year', () => {
    expect(functions.isDate("01/02/900")).toBe(false);
});

test('date: letter present', () => {
    expect(functions.isDate("1/2/2oo3")).toBe(false);
});

// test isHexColor
test('HexColor: 3 characters', () => {
    expect(functions.isHexColor("ABC")).toBe(true);
});

test('HexColor: 6 characters', () => {
    expect(functions.isHexColor("ABC123")).toBe(true);
});

test('HexColor: 5 characters', () => {
    expect(functions.isHexColor("ABC12")).toBe(false);
})

test('HexColor: invalid character', () => {
    expect(functions.isHexColor("ABC12#")).toBe(false);
});