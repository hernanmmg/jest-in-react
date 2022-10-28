const {randomCity, cities} = require('../index');

test('Should returns a random city from cities', () => {
  expect(cities).toContain(randomCity());
})

test('Should not exist a city outside of cities', () => {
  expect(cities).not.toContain('Caracas');
})