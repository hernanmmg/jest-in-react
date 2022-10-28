const text = 'Hello world';
const fruits = ['apple', 'pineapple', 'banana'];

test('Must contain a text', () => {
  expect(text).toMatch(/Hello/i);
});

test('find a fruit in a collection', () => {
  expect(fruits).toContain('banana');
})

test('one number must be greater than other', () => {
  expect(10).toBeGreaterThan(9);
})

test('the rhs must be truthy', () => {
  expect(true).toBeTruthy();
})

const reverseString = (str, callback) => {
   callback(str.split('').reverse().join(''))
}

test('must reverse a word', () => {
  reverseString('civic', (str) => {
    expect(str).toBe("civic")
  })
})

const reverseString2 = str => {
  return new Promise((res, rej) => {
    if (!str) {
      rej(Error('error'))
    }

    res(str.split('').reverse().join(''))
  })
}

test('should reverse a word as a promise and await the response', async () => {
  const response = await reverseString2('ban');
  expect(response).toBe('nab');
})

test('should reverse a word as a promise and to do a "then" to expect the result', () => {
  reverseString2('YOB')
    .then(res => expect(res).toBe('BOY'))
})

/*afterEach(() => console.log('After each test'))
afterAll(() => console.log('After all tests'))

beforeEach(() => console.log('Before each test'))
beforeAll(() => console.log('Before all tests'))*/