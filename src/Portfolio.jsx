import { useState } from 'react';
import poert1 from './assets/image/poert1.png';
import poert2 from './assets/image/port2.png';
import poert3 from './assets/image/port3.png';

import './assets/css/portfolio.css';
import './assets/css/App.css';

export default function Portfolio() {
  const [imagePortfolio] = useState([
    { image: poert1 },
    { image: poert2 },
    { image: poert3 },
    { image: poert1 },
    { image: poert2 },
    { image: poert3 },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);

  function layerPort(e) {
    let image = e.currentTarget.parentElement.querySelector('img');
    let srcImage = image.getAttribute('src');
    setSelectedImage(srcImage); // نحدد الصورة
  }

  function close() {
    setSelectedImage(null); // نخليها فاضية يعني مقفولة
  }

  return (
    <div className="componanteProtfolio position-relative">
      <div className="container py-5">
        <div className="content d-flex flex-column justify-content-center align-items-center">
          <div className="text text-center">
            <h1 className="text-uppercase fw-bold">portfolio component</h1>
            <div className="my-3 position-relative star">
              <span>
                <i className="fa-solid fa-star fs-3"></i>
              </span>
            </div>
          </div>
          <div className="row">
            {imagePortfolio.map((im, index) => (
              <div className="col-md-4 p-4" key={index}>
                <div className="grid">
                  <img src={im.image} alt="portfolio" />
                  <div className="layer" onClick={layerPort}>
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="showImage position-absolute bg-primary bg-opacity-50 w-100 h-100 top-0 d-flex justify-content-center"
          onClick={close} // أي كليك على الخلفية يقفل
        >
          <div onClick={(e) => e.stopPropagation()} className='d-flex'>
            <img src={selectedImage} className="w-75 h-75 mx-auto" alt="image" />
          </div>
        </div>
      )}
    </div>
  );
}
