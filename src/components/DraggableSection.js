import React from 'react';

const DropZone = ({ id, onDragOver, onDrop, onDragEnter, onDragLeave, children }) => {
  return (
    <div
      className="dropzone"
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      id={id}
      style={{ height: '200px' }} // Set a fixed height of 200 pixels
    >
      {children}
    </div>
  );
};

const DraggableSection = ({ itemList = ["Item1", "Item2", "Item3"]}) => {
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
    <div className="box">
      <h2 className="box-title">
        Objective 1: Develop Proficiency in using programming languages and tools commonly used in AI
      </h2>

      <div className="box-content">
        <DropZone
          id="left-dropzone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
        >
          {itemList.map((item, index) => (
            <div
              key={`left-textbox-${index}`}
              id={`left-textbox-${index}`}
              className="draggable-textbox"
              draggable="true"
              onDragStart={handleDragStart}
            >
              {item}
            </div>
          ))}
        </DropZone>

        <DropZone
          id="right-dropzone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
        >
        </DropZone>
      </div>
    </div>
  );
};

export default DraggableSection;
