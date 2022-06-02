# SinglePageApp

This project is a single page app with a sign-up form. The form has 4 fields first name, last name, email and password. All fields are required.

Password validation supports

- a minimum of eight characters
- lower and uppercase letters
- do not contain the user’s first or last name

Email validation is a standard angular forms email validator. Please check the link below for more details.
https://angular.io/api/forms/Validators#email

The form sends a POST request to https://demo-api.now.sh/users.

## About the project

_Note_ This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.
Angular CLI provides the default configuration to run unit tests. Angular CLI doesn't provide end-to-end testing capabilities by default.

The project relies on [Angular Material](https://material.angular.io/) and [Bootstrap Grid system](https://getbootstrap.com/). Angular Material provides a set of reusable and accessible UI components. Angular Material perfectly fits projects with forms which require various validation scenarios.

The project employs [prettier](https://prettier.io/docs/en/install.html) with a pre-commit hook. This makes sure all your commits are formatted.

The project uses [Cypress](https://www.cypress.io/) as an end-to-end testing framework.

The app contains to 2 pages: `signup` and `home`; 1 `signup` service; 1 `shouldNotContain` custom form validator. The app fully reflects the angular component based architecture.

## Testing and strategy

`shouldNotContain` validator and `signup` service are covered by unit tests

`signup` and `home` page are covered by components tests

`signup-form` component has mixed of unit and component tests (more tes scenarious can be added)

`signup` page is also covered by e2e tests

The testing strategy follows the `shift left` testing approach. The key idea is about pushing testing toward the early stages of software development. While testing a component, you first cover it by unit tests, then you consider scenarios which are not covered, and cover them by component tests. You evaluate if more scenarios are left and cover them by e2e tests.

## The project structure

The project has `pages` and `libs` folders. The page embraces and isolates the business logic. The `libs` folder is a shared folder for common components and services.

## The project improvements

- `signup-form` component can be extended and covered by various scenarios of component tests. The scenarios can validate the template representation and consider error testing based on the user input. The extansion of component scenarious can prevent the need of having e2e tests.

## Question and answers

- Why angular forms email validator is used?

It is a well-tested and robust solution which doesn't require extra effort.

- Why Angular Material is used?

Angular Material perfectly fits projects with forms which require various validation scenarios.
Angular Material UI and animation bring the project to the 'production-ready' state: it stays on brand; it works across the web and mobile; it is optimized for Angular.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
