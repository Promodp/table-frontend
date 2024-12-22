### Deployed Url: https://table-frontend-two.vercel.app/


# Frontend Assignment

## Assignment

You are required to fetch the details of the highly-rated kickstarter projects by implementing an AJAX call to their APIs.

Use the web API (link : https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json) ) to fetch the details of specific projects.

## Minimum Requirements

1. Create a table and list the following three attributes for all the projects:
    * S.No.
    * Percentage funded
    * Amount pledged

1. Ensure that the UI is aesthetically pleasing to gain extra points.
1. Implement pagination with maximum 5 records per page.
1. UX should remain like you would see on an ecommerce website (Amazon, Flipkart, etc.) and edge cases should not break

### Expected Output format

| **S.No.** | **Percentage funded** | **Amount pledged** |
|-----------|-----------------------|--------------------|
| 0         | 186                   | 15283              |


## Good to have

1. Unit tests.
1. Accessibility.


## Steps for submission

1. Fork this repo.
1. Do changes to the above assignment.
1. Email the assignment back to us with:
    1. Link of the open source repo.
    1. Link of the assignment hosted online. (You can use any free tools to host this assignment, eg. vercel, netlify or heroku). It should be accessible online for atleast 7 days.


## Frameworks Allowed
1. React/Vanilla JS for JavaScript
1. No framework for CSS. Only Raw CSS is allowed.

## Note

1. Result on platforms like codesandbox, replit are not accepted. 
1. Private unaccessible links will lead to rejection.



In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### `npm test`

Launches the test runner in the interactive watch mode.\



## Project includes

1. UI for the table with the following three attributes for all the projects in the sorted order based on percentage funded:
    * S.No.
    * Percentage funded
    * Amount pledged
2. Custom hooks utilization
    * usePagination
    * useApiCall
3. Basic testing
4. Includes color palatted that can be accessed accross the project.
    * Example:   --palette-neutral-50: #FBFCFE;  ---> which can be used as:  var(--palette-neutral-50: #FBFCFE);
5. contant file to include the various constant
6. Accessbility:
   * Keyboard navigation
   * basic mobile responsibility
7. Component Modularization
 
