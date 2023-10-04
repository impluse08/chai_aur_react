import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Chai from './chai';

const reactElement = React.createElement(
  'a',
  {href:"https://google.com"},
  'Click me to visit google.com'
)


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // reactElement
  <App />
  
)

