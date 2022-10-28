const cities = ['Mexico city', 'Bogota', 'Lima', 'Buenos aires'];

const randomCity = () => {
  const string = cities[Math.floor(Math.random() * cities.length)]
  return string;
}

const reverseWord = (str, callback) => {
  callback(str.split('').reverse().join(''))
}

module.exports = { randomCity, cities, reverseWord };