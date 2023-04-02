import React, { useState } from 'react';
import './Component.css';
import DraggableSection from './DraggableSection.js'; // import the HomePage component

const HomePage = ({ onCourseSubmit }) => {
  const [courseTopic, setCourseTopic] = useState('');
  const [courseName, setCourseName] = useState('');
  const [learningObjectives, setLearningObjectives] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCourseSubmit({ courseTopic, courseName, learningObjectives });
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDragEnter = (e) => {
    e.target.classList.add('over');
  };

  const handleDragLeave = (e) => {
    e.target.classList.remove('over');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(id);
    e.target.appendChild(draggableElement);
    e.target.classList.remove('over');
  };

  return (
    <div className="homePage">
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
      </div>

    );
  }
    export default HomePage;