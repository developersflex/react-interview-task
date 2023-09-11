# Flex Business Solutions Tech Test - Inventory Management

In Flex Business Solutions, we aim to provide excellence and efficiency on all our lines of code in order to support the day-to-day activities of the company using our software solutions. In this task, you will be provided with a simple design of an app, fetching a list of products from an external source and allowing the user to search or filter among the list.

### Tech Test Overview

We have provided below the Figma link of this task. On the main page, we have a list of job sites with their corresponding status. By clicking the "Create" button we can create other job sites and add them to the list. By clicking to the jobsite name, we are redirected to the inventory dashboard for that particular job site. There, we can update items inside categories by double cliking on each cell where the content of that row will automatically be shown on the modal. Updating any specific column and hitting "Save", the content of the table should be automatically updated.

[FIGMA] [https://www.figma.com/file/uOxY3AiUFaGuxsU9nk0H1O/ReactJs-Test?node-id=0%3A1]

We love to see:

- Functional code
- Good design
- Unit testing

### Notes

All of you work should take place inside this repository.

You are free to use any packages that would help with this task

You do not need to add additional security measures as part of this exercise.
We're interested in how you break down the work and build your solution in a clean, easy-to-use, reusable and testable manner.

## Deliverables

You must follow the Figma design and need to add the functionality of:
a) Create new job sites with their categories
c) Search job sites & items on the inventory page
b) Update items on each category

**Create a folder inside the repository and include finished screenshots of the app.**
**Please make sure to update the readme with**:

## How to Run Your App

To run the app, follow these steps:

3. Install project dependencies using `yarn`.
4. Start the development server using `yarn dev`.
5. Start the mock API data using `yarn start`.
6. Start the test server using `yarn test`.

- Relating to the task please add answers to the following questions;

  1. How might you make this app more secure?

#### Authentication:

Implement user authentication to ensure that only authorized users can access certain features or data within the application.

#### Authorization:

In addition to authentication, implement authorization mechanisms to control what actions and resources users can access. Authorization ensures that authenticated users have the appropriate permissions. Here are some authorization strategies:

- **Role-Based Access Control (RBAC):** Define roles (e.g., admin, user) and associate them with specific permissions. Users are then assigned roles based on their responsibilities, and access to features or data is restricted accordingly.

By combining robust authentication and authorization mechanisms, we can ensure that our application maintains the highest level of security. These measures protect sensitive data, prevent unauthorized access, and provide a secure user experience.

### Server-Side Validation:

I already added client side validation using formik but I know that server-side validation is a must too.

2. How would you make this solution scale to millions of records?

Data Optimization:

Implement a real database backend.
