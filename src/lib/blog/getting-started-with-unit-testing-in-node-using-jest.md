---
title: Getting started with Unit Testing in Node using Jest
date: Aug 5, 2022
cover: https://images.unsplash.com/photo-1576444356170-66073046b1bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
excerpt: In this post we're going to take a look at the basics of unit testing, particularly with Jest.
---

In this post we're going to take a look at the basics of unit testing, particularly with [Jest](https://jestjs.io/). By the time you've finished up reading, you'll have learned what unit testing is, the benefits of unit testing and have created and run basic unit tests.

## Introduction to Unit Testing

Let's break down what unit testing is. A unit is a single functionality or component of an application. Testing is a review of how your code will execute. Therefore, unit testing is reviewing a single functionality to ensure that it performs as expected. A suite of unit tests are then created to test that every function of the application performs as expected. Unit testing really comes into use when an update is made to a piece of code. After the code has been updated, the test can be ran to ensure that the functionality of the code has not been broken.

Unit testing differs greatly from testing a whole application end-to-end, but is equally as important.

## So, why should you write Unit Tests?

Usually, unit tests are wrote *before* the software code by developers. Known as TDD, Test Driven Development, the requirements are turned into specific test cases, which are developed so that the software can be improved to pass the new tests. In the case of unit tests, it allows code to be modified without affecting other unit's functionality or the entire software package. Aided by Unit Tests, the early discovery of bugs in the software development lifecycle can greatly reduce the overall cost of development, as less time is spent on bug fixing in the later stage of the project and therefore increasing overall customer satisfaction.

Within unit test environments, all modules of a product become individually isolated from one another. This means that the tests are more reliable as they are run in a contained environment. This, in turn, causes the code written to be more reliable.

### Benefits of Unit Tests

- They ensure the functionality of components and applications
- They prove the effective reliability and performance of applications
- They help find and fix bugs quickly and easily
- They contribute to higher code quality & better application architecture
- They can act as an additional source of documentation

Unit Testing makes an application more robust and less error prone. It is a method of verification to show that your code performs it's intended function and that your application works as intended for your users. 

## Getting Started

Let's get cracking by putting together our testing environment. Create a new folder, open the terminal and type `npm init -y` to generate a `package.json` file. Next let's install Jest as a dev dependancy. Type `npm i -save-dev jest` into the console. 

Open up this folder in your favourite IDE and we'll get started. There's a few methods of file management that are generally accepted when writing unit tests. The method we will be using is we will be creating the tests in the same directory as the unit being tested. For example:

```
 src
- utils
-- unit-one
--- unit-one.js
--- unit-one.test.js
-- unit-two
--- unit-two.js
--- unit-two.test.js
```

So let's go ahead and create a couple of units to test. Create the `src` folder and within this create a folder called `mathOperations`. Within this folder create two files, `mathOperations.js` & `mathOperations.test.js`.

## Basic tests

So what we want these functions to do is to take 2 numbers as an input, run a math operation on them and return the answer. Let's write the tests for this first, so our use cases are clearly defined. Open up `mathOperations.test.js` and add the below, which we will look further into.

```
const mathOperations = require("./mathOperations");

describe("Math Operations on 2 numbers", () => {
  test("Add 2 numbers together", () => {
    
  });
  test("Subtract 2 numbers from each other", () => {

  });
});
```

Here we can see that we are describing a test suite using the `describe` method. It takes a basic string input and a function, in which we add our unit tests. Let's break down the test to add 2 numbers together.

```
test("Add 2 numbers together", () => {
  var result = mathOperations.add(1, 2);
  expect(result).toBe(3);
});
```

We create a variable, `result`, which uses the function `add` in the `mathOperations` module and inputs 2 numbers, in our case `1` and `2`. We then `expect` our `result` variable to be `3`. Jest uses a very plain-English style typing for it's language, as we can see here, so it is very easy to pick up.

Go ahead and write the rest of the tests - you should get something similar to the below.

```
const mathOperations = require("./mathOperations");

describe("Math Operations on 2 numbers", () => {
  test("Add 2 numbers together", () => {
    var result = mathOperations.add(1, 2);
    expect(result).toBe(3);
  });
  test("Subtract 2 numbers from each other", () => {
    var result = mathOperations.subtract(3, 2);
    expect(result).toBe(1);
  });
  test("Multiply 2 numbers together", () => {
    var result = mathOperations.multiply(2, 3);
    expect(result).toBe(6);
  });
  test("Divide 2 numbers from each other", () => {
    var result = mathOperations.divide(4, 2);
    expect(result).toBe(2);
  });
});
```

Now that we have wrote our tests, open up `mathOperations.js` and create our functions like below.

```
const mathOperations = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

module.exports = mathOperations;
```

For us to be able to then run these tests, you will need to modify `package.json`. Update the `"scripts"` section as below.

```
"scripts": {
    "test": "jest --verbose"
  },
```

We are using the `verbose` flag so that we get a full output of our tests. You should now be able to run your tests. In the terminal, type `npm test` and take a look at the output.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659713394090/91LVsB2J9.png)

Here we can see that all 4 of our unit tests have passed! Try changing one of the unit tests to something that is incorrect, re-run `npm test` and note the output.

![image.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1659713516440/TUM9uhJbA.png)

As we can see from the above output, one of the unit tests has failed, and it lets you know reasoning for the test to fail. In this case, I am multiplying 3 by 3. The expected result is 6, whereas the actual result is 9, so the test fails.

## Conclusion

As you can see, the quality of your application can easily be improved with Unit Testing as it helps find bugs and defects in your code. This was just a very brief introduction to Unit Tests, and I hope it was informative for you.