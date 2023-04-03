import React, { useState } from 'react';
import './Component.css';
import DraggableSection from './DraggableSection.js'; // import the CourseDesigner component

const CourseDesigner = ({ onPageChange }) => {
  const [courseTopic, setCourseTopic] = useState('');
  const [courseName, setCourseName] = useState('');
  const [learningObjectives, setLearningObjectives] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCourseSubmit({ courseTopic, courseName, learningObjectives });
  };

  function onCourseSubmit(course) {
    setCourseTopic = course.courseTopic;
    setCourseName = course.courseName;
    setLearningObjectives = course.learningObjectives;
  }

  function handleClick(page) { // define a function named handleClick that receives a page argument
    onPageChange(page); // call the onPageChange function passed in the props with the page argument
  }

  return (
    <div className="courseDesigner">
      <div style={{ borderLeft: '1px solid black', paddingLeft: '10px' }}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="courseTopic" style={{ display: 'block', marginTop: '10px' }}>
            Course Topic:
          </label>
          <input className="formEntries"
            type="text"
            id="courseTopic"
            value={courseTopic}
            onChange={(e) => setCourseTopic(e.target.value)}
            //style={{ backgroundColor: '#EEEEEE', marginTop: '5px', marginBottom: '10px' }}
          />
          <label htmlFor="courseName" style={{ display: 'block', marginTop: '10px' }}>
            Course Name:
          </label>
          <input className="formEntries"
           type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            //style={{ backgroundColor: '#EEEEEE', marginTop: '5px', marginBottom: '10px' }}
          />
          <label htmlFor="learningObjectives" style={{ display: 'block', marginTop: '10px' }}>
            Learning Objectives:
          </label>
          <textarea className = "learningObjectives"
            id="learningObjectives"
            value={learningObjectives}
            onChange={(e) => setLearningObjectives(e.target.value)}
           
          />
          <br />
          <button type="submit" style={{ display: 'block', margin: '0 auto', marginTop: '10px' }}>
            Generate course Topics            
          </button>
          <p/>
        </form>
      </div>
      {<DraggableSection/>}
      <div>
        Drag and drop items from left to right to include them in your course plan. Topics are sorted color coded based on difficulty level. Don’t like what you see?  Regenerate the list to try again.
      <p/>
      <button className="navButton" onClick={() => handleClick('Course Library')}></button>
      
      </div>
      </div>


    );
  }
    export default CourseDesigner;