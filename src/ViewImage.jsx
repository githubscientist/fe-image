import React, { useEffect, useState } from 'react';

function ViewImage() {

    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        const getImage = async () => {
            try {
                const res = await fetch('http://localhost:3001/api/images/6586d3505d105a64dfaa9c59');
                const blob = await res.blob();
                const objectURL = URL.createObjectURL(blob);
                setImageData(objectURL);
            } catch (error) {
                console.log('Error getting image: ', error);
            }
        }
        getImage();
    }, []);

  return (
      <div>
          {
              imageData && (
                  <img 
                    src={imageData}
                    alt="Uploaded"
                    style={{ width: '100%', height: 'auto' }}
                  />
              )
          }
    </div>
  )
}

export default ViewImage;