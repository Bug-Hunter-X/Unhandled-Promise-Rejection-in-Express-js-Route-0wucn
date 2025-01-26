# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: neglecting to handle promise rejections in asynchronous route handlers.  Improper error handling can lead to silent failures, making debugging difficult.

The `bug.js` file showcases the problematic code. The `bugSolution.js` provides a corrected version with robust error handling.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Observe that errors from `someAsyncOperation()` are not handled gracefully.

## Solution

The `bugSolution.js` file demonstrates the proper way to handle asynchronous operations within Express.js routes, preventing unhandled promise rejections and providing informative error messages.