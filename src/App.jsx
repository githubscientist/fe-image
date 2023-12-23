import React, { useState } from 'react';
import ViewImage from './ViewImage';

function App() {

  const [image, setImage] = useState(null);

  const handleUpload = async () => {
    const data = new FormData();
    data.append('image', image);
    
    try {
      const res = await fetch('http://localhost:3001/api/upload', {
        method: 'POST',
        body: data
      });
      const file = await res.json();

      console.log('Image uploaded successfully: ', file);
    } catch (error) {
      console.log('Error uploading image: ', error);
    }
  }

  return (
    <div>
      <input 
        type="file"
        accept="image/*"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />

      <button onClick={handleUpload}>Upload Image</button>

      <ViewImage />
    </div>
  )
}

export default App;