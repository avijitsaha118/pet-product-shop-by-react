import React from 'react';
import './Answer.css';

const Answer = () => {
    return (
        <div className='answer'>

<h3>Question-01: How React works? </h3>
<h2>Answer:</h2>
<p>
React follows the components based approach which helps to build reusable UI components. Besides, React has its own DOM. 
Eventually, whatever changes are going to occur are on the browser's DOM.
Whenever a component's state changes, code is re rendered by DOM and browser has to repaint each and every element on the screen. This involves a lot of mathematical and other calculations.
And thinking at scale, our app would have multiple state changes.Browser is doing unnecessary cycling of complete DOM whereas only a single elements' state has changed. For that, React Virtual DOM helps in minimizing the actual changes on browser DOM. Initally, virtual DOM will be an exact copy of real DOM.
In React, whenever a components' state changes, the changes are reflected in Virtual DOM.
Thus, Virtual DOM has the updated state of the component.
</p>
            
     <h3>Question-02: What are the Difference between Props vs State?</h3>

<h2> Answer:</h2>
<p><strong> Difference Between Props and State</strong></p>
<table>
  <thead>
  <tr>
  <th>Props</th>
    <th>State</th>
  </tr>
  </thead>

  <thead>
   <tr>
    <td>1. Props are shorthand for properties. They are very similiar to an argument is passed to a JavaScript function.</td>
    <td>State are used to create dynamic and interactive components. State is heart of react component that makes it alive and determines how a component renders and behaves.  </td>
   </tr>
  </thead>

  <thead>
   <tr>
   <td>2. The Data is passed from one component to another.</td>
    <td>The Data is passed within the component only.</td>
   </tr>
  </thead>

  <thead>
  <tr>
  <td>3. It is Immutable (cannot be modified).</td>
    <td>It is Mutable ( can be modified).</td>
  </tr>
  </thead>

  <thead>
    <tr>
    <td>4. Props can be used with state and functional components.</td>
    <td>State can be used only with the state components/class component.</td>
    </tr>
  </thead>

  <thead>
  <tr>
   <td>5. Props are read-only.</td>
    <td>State is both read and write.</td>
  </tr>
  </thead>

</table>

        </div>
    );
};

export default Answer;