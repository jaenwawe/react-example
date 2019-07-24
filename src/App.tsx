import React from 'react';
import './include/bootstrap';
import './App.css';
import { FirstComponent } from './components/my-first-component';
import SecondComponent from './components/my-second-component';
import NavComponent from './components/nav-component';


/*
  Components
  Components makeup the abstract structure from which an application can be built.
  Components are intended to be reusable, flexible sections of a website, that
  maintain their own state and behavior.

  There are primarily two ways to define a component.  The first, is by extending
  the React.Component class. The second is a "Function Component" which is used
  for simpler components that don't need any additional behavior.

  All components require method: render

  The render method returns an HTML-like syntax that is used to then
  render the component by React. Function components are essentially components
  that only have a render method.
*/
const App: React.FC = () => {
  return (
    <div>
      <NavComponent />
    </div>
  );
}

export default App;
