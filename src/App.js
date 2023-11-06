import './App.css';
import React, { useState } from 'react';
// import Home from './components/Home';
var prevSelect = new Set();

function App() {
  const [selected, setSelected] = useState(true);
  const [items, setItems] = useState([
    { id: 1, image: "https://i.ibb.co/NnZh9YK/image-1.png" },
    { id: 2, image: "https://i.ibb.co/M9ZvrFV/image-2.png" },
    { id: 3, image: "https://i.ibb.co/D9cNf6J/image-3.png" },
    { id: 4, image: "https://i.ibb.co/7vrM8Nj/image-4.png" },
    { id: 5, image: "https://i.ibb.co/7J1L6CQ/image-5.png" },
    { id: 6, image: "https://i.ibb.co/thzcSVK/image-6.png" },
    { id: 7, image: "https://i.ibb.co/qxQnhkY/image-7.png" },
    { id: 8, image: "https://i.ibb.co/m9GXBWK/image-8.png" },
    { id: 9, image: "https://i.ibb.co/2k5tyfM/image-9.png" },
    { id: 10, image: "https://i.ibb.co/Jk3grhV/image-10.jpg" },
    { id: 11, image: "https://i.ibb.co/XbykFpL/image-11.jpg" },
  ]);
  const handleItemClick = (selected, i) => {
    setSelected(!selected)
    if (prevSelect.has(i)) {
      prevSelect.delete(i)
    }
    else {
      prevSelect.add(i)
    }

    // console.log(prevSelect.has(i), selected, i, count)
    // console.log(prevSelect.size)

  };

  const handleDeleteAll = () => {
    var updatedItems
    var check = false
    prevSelect.forEach((value) => {
      if (!check) {
        updatedItems = items.filter(item => item.id !== value);
        check = true
      }
      else {
        updatedItems = updatedItems.filter(item => item.id !== value);
      }

      setItems(updatedItems);
    });
    // const updatedItems = items.filter(item => item.id !== itemId);
    // setItems(updatedItems);
  };
  const dragStarted = (e, id) => {
    e.dataTransfer.setData("todoid", id);
  }
  return (
    <div className="App">
      <div style={{ display: 'flex', gap: '40em', paddingLeft: '5em', marginBottom: '0' }}>
        <h3>{`${prevSelect.size == 0 ? 'Gallery' : `${prevSelect.size == 1 ? `${prevSelect.size} File Selected` : `${prevSelect.size} Files Selected`}`}`}</h3>
        {
          prevSelect.size > 0 ? <p onClick={handleDeleteAll} className='delete-button' style={{ color: 'red' }}>Delete file</p> : ''
        }
      </div>

      <div className='gallery'>
        {
          items.map(item =>
            <div key={item.id} className='image-container '>
              <img className='gallery__img'
                src={item.image}
                alt=""

              />
              <input
                onClick={() => handleItemClick(selected, item.id)}
                type="checkbox"
                style={{
                  position: 'absolute',
                  top: '10px', // Adjust the top and left values to position the checkbox as desired
                  left: '10px',
                  zIndex: 1, // Ensures the checkbox is rendered on top of the image
                }}

              />

            </div>

          )}
      </div>



    </div >
  );
}

export default App;
