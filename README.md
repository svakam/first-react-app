# ReactJS Tutorial: First React app

Learning ReactJS journal. Thanks to Codevolution for his detailed Youtube playlist on ReactJS! https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3

View my Google Docs notes here: https://drive.google.com/drive/folders/1e938NkaP0iMmdfjR6f4Tk74-AOBqE6ZP?usp=sharing

## Table of contents
1. Intro
2. Hello World
3. Folder Structure
4. Components
5. Functional components
6. Class components
7. Hooks update
8. JSX
9. Props
10. State
11. setState
12. Destructuring props and state
13. Event handling
14. Binding event handlers
15. Methods as props
16. Conditional rendering
17. List rendering
18. Lists and keys
19. Index as key anti-pattern
20. Styling and CSS basics
21. Basics of form handling
22. Component lifecycle methods
23. Component mounting lifecycle methods
24. Component updating lifecycle methods
25. Fragments
26. Pure components
27. memo
28. Refs
29. Refs with class components
30. Forwarding refs
31. Portals
32. Error boundary
33. Higher order components
34. Render props 
35. Context
36. HTTP and React

### Intro
React is an open-source JS library for building user interfaces (UI). 

React's architecture is component-based. An app is compartmentalized that can be put together for more complex UIs. While a traditional website may have DOM sections like a header, sidenav, main content, and footer, ReactJS compartmentalizes these into components. 

React components are reusable. The same component can be reused if the right data is passed in. 

React is a "declarative" library; the React-DOM library builds the UI for the developer while abstracting away logic. In other words, tell React what you want, and React will build the UI. This is like outsourcing the painting of a landscape to an artist, and receiving the painting back when it's finished. React also efficiently handles updating and rendering the components.

An "imperative" implementation involve explicitly writing out an algorithm. In the artist analogy, this is like you controlling the flow by drawing the parts of the landscape yourself. 

ReactJS allows seamless integration of React into Web apps. This can be just a portion of a page, or the whole application itself. 

React Native is for mobile development. 

It's important to know the following before diving into ReactJS: 
- HTML
- CSS
- JS fundamentals
  - 'this'
  - Arrays: filter, map, reduce
  - ES6
    - Let, const
    - Arrow functions
    - Template literals
    - Default parameters
    - Object literals
    - Rest, spread operators
    - Destructuring assignment

### Hello World: Create React App

To get started, you need Node.js (runtime environment that runs JS code outside a web browser) and an IDE. 

To create a React app, go to a CLI and enter `npx create-react-app hello-world`. 

There are two main approaches to create/setup a React app: `npx` and `npm`. 
- `npx`
  - `npx create-react-app <project-name>`
  - Npx is an npm package runner that is installed when Node.js is installed. 
  - This allows the create-react-app to run without installing it - npx takes care of this for us. No need to install a global package or update the create-react-app package. 
- `npm`
  - `npm install create-react-app -g`, then `create-react-app <project_name>`
  - This installs create-react-app package globally and uses the package to generate the project. 
  - This approach is possible, but less preferred. 

### Folder Structure

It's important to understand the files/folders involved, and the control flow when the app is run. 

Important files/folders to know are: 
- `package.json`
  - Dependencies and scripts for project
  - Ex. version 16.13.1 is a dependency itself
- `package-lock.json`
  - Ensures dependencies are installed correctly
- `node_modules`
  - All dependencies are installed here for `npm install` or `create-react-app`
- `public`
  - `manifest.json`
    - For progressive Web apps
  - `index.html`
    - Only 1 HTML file is needed, which is used for a single-page app. The page will change dynamically. 
    - No code is needed here; React will control the UI at `<div id="root"></div>`
- `src`
  - `index.js`
    - Starting point of React app is here: `ReactDOM.render(<App />, document.getElementByID('root'));`
    - Specify root component with `<App />` component and is controlled by React, and the DOM element with `id=root` is controlled by React
    - The `<App />` component is rendered inside the "root" DOM node
  - `App.js`
    - This is responsible for the HTML, and thus view, displayed in the browser. 
  - `App.css`
    - Styling
  - `App.test.js`
    - Unit testing
  - `Index.css`
    - Style for the body tag
  - `Logo.svg`
    - Referenced in the App component
  - `serviceworker.js`
    - Progressive Web apps
