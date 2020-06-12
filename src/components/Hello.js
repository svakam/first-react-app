// demonstrates using JSX vs not

import React from 'react'

// no JSX:

// using React.createElement()

// first parameter is the HTML element in String type to be rendered
// second parameter is optional (used for specifying class, id, etc)
// third parameter is children for div tag

// this will render as a text node
// const Hello = () => {
//   return React.createElement('div', null, 'Hello Vik')
// }

// this will also render as a text node with <h1> as text
// const Hello = () => {
//   return React.createElement('div', null, '<h1>Hello Vik</h1>')
// }

// createElement can take in multiple parameters after the first 2 to specify multiple nodes
// this will render 2 text nodes, the first saying h1 and the second appearing beside it saying Hello Vik
// const Hello = () => {
//   return React.createElement('div', null, 'h1', 'Hello Vik')
// }

// the right way to include a child node of a child is by creating that child element as the 3rd parameter of a current node creation
// const Hello = () => {
//   return React.createElement('div', null, React.createElement('h1', null, 'Hello Vik'))
// }

// add attributes via 2nd argument
// const Hello = () => {
//   return React.createElement('div', { id: 'hello', className: 'dummy' }, React.createElement('h1', null, 'Hello Vik'))
// }

// JSX:

const Hello = () => {
  return <h1 id="hello" className="dummy">Hello Vik</h1>
}

export default Hello