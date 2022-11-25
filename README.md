# Cypress-Mochawesome
In a nutshell
Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.

We make it possible to:

Set up tests
Write tests
Run tests
Debug Tests
Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.

This enables you to write faster, easier and more reliable tests.

Who uses Cypress?
Our users are typically developers or QA engineers building web applications using modern JavaScript frameworks.

Cypress enables you to write all types of tests:

End-to-end tests
Component tests
Integration tests
Unit tests
Cypress can test anything that runs in a browser.

Cypress ecosystem
Cypress consists of a free, open source, locally installed application and Cypress Cloud for recording your tests.

First: Cypress helps you set up and start writing tests every day while you build your application locally. TDD at its best!
Later: After building up a suite of tests and integrating Cypress with your CI Provider, Cypress Cloud can record your test runs. You'll never have to wonder: Why did this fail?
Our mission
Our mission is to build a thriving, open source ecosystem that enhances productivity, makes testing an enjoyable experience, and generates developer happiness. We hold ourselves accountable to champion a testing process that actually works.

We believe our documentation should be approachable. This means enabling our readers to understand fully not just the what but the why as well.

We want to help developers build a new generation of modern applications faster, better, and without the stress and anxiety associated with managing tests. We aim to elevate the art of software development by leveraging test results to generate actionable insights for long-term stability by proactively identifying areas for improvement.

We know that in order for us to be successful we must enable, nurture, and foster an ecosystem that thrives on open source. Every line of test code is an investment in your codebase, it will never be coupled to us as a paid service or company. Tests will be able to run and work independently, always.

We believe testing needs a lot of  and we are here to build a tool, a service, and a community that everyone can learn and benefit from. We're solving the hardest pain points shared by every developer working on the web. We believe in this mission and hope that you will join us to make Cypress a lasting ecosystem that makes everyone happy.

Features
Cypress comes fully baked, batteries included. Here is a list of things it can do that no other testing framework can:

Time Travel: Cypress takes snapshots as your tests run. Hover over commands in the Command Log to see exactly what happened at each step.
Debuggability: Stop guessing why your tests are failing. Debug directly from familiar tools like Developer Tools. Our readable errors and stack traces make debugging lightning fast.
Automatic Waiting: Never add waits or sleeps to your tests. Cypress automatically waits for commands and assertions before moving on. No more async hell.
Spies, Stubs, and Clocks: Verify and control the behavior of functions, server responses, or timers. The same functionality you love from unit testing is right at your fingertips.
Network Traffic Control: Easily control, stub, and test edge cases without involving your server. You can stub network traffic however you like.
Consistent Results: Our architecture doesn’t use Selenium or WebDriver. Say hello to fast, consistent and reliable tests that are flake-free.
Screenshots and Videos: View screenshots taken automatically on failure, or videos of your entire test suite when run from the CLI. Record to Cypress Cloud to store them with your test results for zero-configuration debugging.
Cross browser Testing: Run tests within Firefox and Chrome-family browsers (including Edge and Electron) locally and optimally in a Continuous Integration pipeline.
Smart Orchestration: Once you're set up to record to Cypress Cloud, easily parallelize your test suite and rerun failed specs first for tight feedback loops.
Flake Detection: Discover and diagnose unreliable tests with Cypress Cloud's Flaky test management.
 Setting up tests
There are no servers, drivers, or any other dependencies to install or configure. You can write your first passing test in 60 seconds.

 Writing tests
Tests written in Cypress are meant to be easy to read and understand. Our API comes fully baked, on top of tools you are familiar with already.

 Running tests
Cypress runs as fast as your browser can render content. You can watch tests run in real time as you develop your applications. TDD FTW!

 Debugging tests
Readable error messages help you to debug quickly. You also have access to all the developer tools you know and love.

Test types
Cypress can be used to write several different types of tests. This can provide even more confidence that your application under test is working as intended.

End-to-end
Cypress was originally designed to run end-to-end (E2E) tests on anything that runs in a browser. A typical E2E test visits the application in a browser and performs actions via the UI just like a real user would.

it('adds todos', () => {
  cy.visit('https://todo.app.com')
  cy.get('[data-testid="new-todo"]')
    .type('write code{enter}')
    .type('write tests{enter}')
  // confirm the application is showing two items
  cy.get('[data-testid="todos"]').should('have.length', 2)
})
Component
You can also use Cypress to mount components from supported web frameworks and execute component tests.

import TodoList from './components/TodoList'

it('contains the correct number of todos', () => {
  const todos = [
    { text: 'Buy milk', id: 1 },
    { text: 'Learn Component Testing', id: 2 },
  ]

  cy.mount(<TodoList todos={todos} />)
  // the component starts running like a mini web app
  cy.get('[data-testid="todos"]').should('have.length', todos.length)
})
API
Cypress can perform arbitrary HTTP calls, thus you can use it for API testing.

it('adds a todo', () => {
  cy.request({
    url: '/todos',
    method: 'POST',
    body: {
      title: 'Write REST API',
    },
  })
    .its('body')
    .should('deep.contain', {
      title: 'Write REST API',
      completed: false,
    })
})
Other
Finally, through a large number of official and 3rd party plugins you can write Cypress a11y, visual, email and other types of tests.

Cypress in the Real World
Cypress Real World App
Cypress makes it quick and easy to start testing, and as you begin to test your app, you'll often wonder if you're using best practices or scalable strategies.

To guide the way, the Cypress team has created the  Real World App (RWA), a full stack example application that demonstrates testing with Cypress in practical and realistic scenarios.

The RWA achieves full code-coverage with end-to-end tests across multiple browsers and device sizes, but also includes visual regression tests, API tests, unit tests, and runs them all in an efficient CI pipeline. Use the RWA to learn, experiment, tinker, and practice web application testing with Cypress.

The app is bundled with everything you need, just clone the repository and start testing.
