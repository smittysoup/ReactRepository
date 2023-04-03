import React, { useState } from 'react'; // import the React library and the useState hook
import './App.css'; // import a CSS file
import NavBar from './components/NavBar'; // import the NavBar component
import LeftNavPane from './components/LeftNavPane'; // import the LeftNavPane component
import CourseDesigner from './components/CourseDesigner'; // import the courseDesigner component
import SecondPage from './components/SecondPage'; // import the SecondPage component
import ThirdPage from './components/ThirdPage'; // import the ThirdPage component

function App() { // define a functional component named App
  const [currentPage, setCurrentPage] = useState('Course Designer'); // declare a state variable named currentPage initialized to "home" and a function to update it named setCurrentPage
   const [secondPageData, setSecondPageData] = useState({ pageName: '', name: '', instructor: "fred" });
  const [thirdPageData, setThirdPageData] = useState({ pageName: '', name: '', instructor: "fred" });

  const handlePageChange = (page) => { // define a function named handlePageChange that receives a page argument
    setCurrentPage(page); // call setCurrentPage with the page argument to update the currentPage state variable
    setSecondPageData({ pageName: page, name: currentPage, instructor: "fred"  });
    setThirdPageData({ pageName: page, name: currentPage, instructor: "fred" });
  };

  const handleCourseSubmit = (name) => { // define a function named handleCourseSubmit that receives a name argument
    setSecondPageData({ name: name, instructor: "fred" });
    setThirdPageData({ name: name, instructor: "fred" });
  };

  return (
    <div className="App"> 
       <NavBar header = {currentPage}/>
      <div className="content"> 
        <LeftNavPane onPageChange={handlePageChange} /> 
       
        <div className="pageContainer"> 
          {currentPage === 'Course Designer' && <CourseDesigner data = {currentPage} onPageChange={handlePageChange}/>}
          {currentPage === 'Course Library' && <SecondPage data={secondPageData} />} 
          {currentPage === 'Create New Course' && <ThirdPage data={thirdPageData} />} 
        </div>
      </div>
    </div>
  );
}

export default App; // export the App component as the default export
