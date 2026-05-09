const { add, subtract, divide } = require('./app');

test('add: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtract: 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
});

test('divide: 10 / 2 = 5', () => {
    expect(divide(10, 2)).toBe(5);
});

test('divide: throws on zero', () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});
