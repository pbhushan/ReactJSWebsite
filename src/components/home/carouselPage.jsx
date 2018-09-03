import React from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselInner,
  CarouselItem,
  View,
  Mask
} from "mdbreact";
import "../../css/home/carouselPage.css";

const CarouselPage = props => {
  const { carousels, rawPath } = props;
  console.log(props);
  return (
    <div id="carousel-page">
      <Carousel
        activeItem={1}
        length={carousels.length}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
      >
        <CarouselInner>
          {carousels.map(carousel => (
            <CarouselItem key={carousel.id} itemId={carousel.id}>
              <View>
                <img
                  className="d-block w-100 h-500"
                  src={`${rawPath}${carousel.imgUrl}`}
                  alt="Slide"
                />
                <Mask overlay={carousel.mask} />
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">{carousel.heading}</h3>
                <p>{carousel.description}</p>
              </CarouselCaption>
            </CarouselItem>
          ))}
        </CarouselInner>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
