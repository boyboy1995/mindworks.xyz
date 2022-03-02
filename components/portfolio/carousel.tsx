import React from "react";

interface CarouselProps {
    title?: string;
    desc?: string;
    image?: string;
    imgAlt?: string;
  }
  
    const Carousel: React.FC<CarouselProps> = ({ title, desc, image, imgAlt }) => (

<div id="carouselExampleSlidesOnly" className="relative carousel slide" data-bs-ride="carousel">
  <div className="relative w-full overflow-hidden carousel-inner">
    <div className="relative float-left w-full carousel-item active">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
        className="block w-full"
        alt="Wild Landscape"
      />
    </div>
    <div className="relative float-left w-full carousel-item">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
        className="block w-full"
        alt="Camera"
      />
    </div>
    <div className="relative float-left w-full carousel-item">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        className="block w-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
</div>
      );
export default Carousel;
