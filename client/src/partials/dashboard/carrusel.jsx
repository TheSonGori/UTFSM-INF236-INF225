import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Imgen1 from "../../images/imagen1.png";
import Imgen2 from "../../images/imagen2.png";
import Imgen3 from "../../images/imagen3.png";
import "../../css/Carousel.css"; 

class Carousel extends React.Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 2000, // Velocidad en milisegundos
      autoplay: true,
      autoplaySpeed: 4000, // Cambiar cada 2 segundos
      slidesToShow: 1,
      slidesToScroll: 1
    };

    // Estilos para las imágenes
    const imgStyle = {
      width: "100%",
      height: "auto",
      borderRadius: "10px"
    };

    return (
      <div style={{ position: "relative" }}>
        {/* Agregar un div con clase "carousel-container" */}
        <div className="carousel-container">
          <Slider {...settings}>
            <div>
              <img src={Imgen1} alt="Imagen 1" style={imgStyle} />
            </div>
            <div>
              <img src={Imgen2} alt="Imagen 2" style={imgStyle} />
            </div>
            <div>
              <img src={Imgen3} alt="Imagen 3" style={imgStyle} />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Carousel;
