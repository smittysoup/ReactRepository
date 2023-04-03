import React from 'react'; // import the React library
import './Component.css'; // import a CSS file

function LeftNavPane(props) { // define a functional component named LeftNavPane that receives props
  function handleClick(page) { // define a function named handleClick that receives a page argument
    props.onPageChange(page); // call the onPageChange function passed in the props with the page argument
  }

  return ( // return a JSX element
    <div className="leftNavPane"> {/* a div element with a class name of "leftNavPane" */}
      <button className="navButton" onClick={() => handleClick('Course Designer')}>
        {/* a button element with a class name of "navButton" and a click event listener that calls handleClick with the argument "home" */}
        Course Designer
      </button>
      <button className="navButton" onClick={() => handleClick('Course Library')}>
        {/* a button element with a class name of "navButton" and a click event listener that calls handleClick with the argument "second" */}
        Second Page
      </button>
      <button className="navButton" onClick={() => handleClick('Create New Course')}>
        {/* a button element with a class name of "navButton" and a click event listener that calls handleClick with the argument "third" */}
        Third Page
      </button>
    </div>
  );
}

export default LeftNavPane; // export the LeftNavPane component as the default export
