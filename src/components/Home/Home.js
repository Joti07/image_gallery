import React from 'react';

const home = () => {
    function handleDragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDrop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/plain');
        const droppedElement = document.getElementById(data);
        event.target.appendChild(droppedElement);
    }

    return (
        <div>
            <div
                id="draggable"
                draggable="true"
                onDragStart={(e) => handleDragStart(e)}
            >
                <img src="https://i.ibb.co/NnZh9YK/image-1.png" alt="Draggable Image" />
            </div>
            <div
                id="droptarget"
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e)}
            >
                Drop here
            </div>
        </div>
    );
};

export default home;