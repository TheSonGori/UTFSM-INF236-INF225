// HomePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 
const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (index) => {
    const carouselInner = document.querySelector('.carousel-inner');
    const slides = document.querySelectorAll('.item');

    if (index >= slides.length) {
      setCurrentSlide(0);
    } else if (index < 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(index);
    }

    const translateValue = -currentSlide * 100 + '%';
    carouselInner.style.transform = 'translateX(' + translateValue + ')';
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src={process.env.PUBLIC_URL + '/Hospital.png'} alt="Hospital Logo" />
        </div>
        <Link to="/login" className="login-button">Iniciar Sesión</Link>
      </header>
      <div id="myCarousel" className="carousel">
        <div className="carousel-inner">
          <div className={`item ${currentSlide === 0 ? 'active' : ''}`}>
            <img src={process.env.PUBLIC_URL + '/imagen1.png'} alt="Imagen 1" />
          </div>
          <div className={`item ${currentSlide === 1 ? 'active' : ''}`}>
            <img src={process.env.PUBLIC_URL + '/imagen2.png'} alt="Imagen 2" />
          </div>
          <div className={`item ${currentSlide === 2 ? 'active' : ''}`}>
            <img src={process.env.PUBLIC_URL + '/imagen3.png'} alt="Imagen 3" />
          </div>
        </div>
        {/* Left and right controls */}
        <button className="carousel-control carousel-left" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-control carousel-right" onClick={nextSlide}>&#10095;</button>
      </div>
      <div className="redirect-links">
        <Link to="/hu1" className="redirect-button">HU 1</Link>
        <Link to="/hu2" className="redirect-button">HU 2</Link>
        <Link to="/hu3" className="redirect-button">HU 3</Link>
      </div>
      <footer>
        <p>¿Quiénes somos? | Términos y condiciones | Política de privacidad</p>
      </footer>
    </div>
  );
}

export default HomePage;
