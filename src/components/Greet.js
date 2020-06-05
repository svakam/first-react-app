import React from 'react'

// first funtional component
// needs to be connected to rest of app by exporting this function, import where needed and insert in app component

// traditional JS function
// function Greet() {
//   return <h1>Hello, Vik</h1>
// }

// ES6 arrow function
// const Greet = () => <h1>Hello, Vik</h1>

// export default Greet // 'default' allows component to be renamed in the file it's being used in; most commonly used

// named export requires component to be imported in App.js with the exact name here
export const Greet = () => <h1>Hello, Vik: first functional component</h1>