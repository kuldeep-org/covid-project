const app = require('./app');

test('name should be Kuldeep', () => {
  expect(app()).toBe('Kuldeep');
});