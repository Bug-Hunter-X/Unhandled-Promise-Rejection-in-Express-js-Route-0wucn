const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    console.error('Error:', error);
    res.status(500).send('Something went wrong!');
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Simulate an asynchronous operation that might fail
function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a potential error
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      reject(new Error('Simulated asynchronous operation failed!'));
    } else {
      resolve('Asynchronous operation successful!');
    }
  });
}
