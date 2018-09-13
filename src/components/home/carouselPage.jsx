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

  const getCarouselItems = carousel => {
    if (carousel) {
      const path =
        !carousel.isRawPath || carousel.isRawPath === "false" ? "" : rawPath;
      return (
        <CarouselItem key={carousel.id} itemId={carousel.id}>
          <View>
            <img
              className="d-block w-100 h-500"
              src={`${path}${carousel.imgUrl}`}
              alt="Slide"
            />
            <Mask overlay={carousel.mask} />
          </View>
          <CarouselCaption>
            <h3 className="h1-responsive">{carousel.heading}</h3>
            <p className="h4-responsive">{carousel.description}</p>
          </CarouselCaption>
        </CarouselItem>
      );
    }
    return;
  };

  const getcarousels = () => {
    if (carousels && carousels.length > 0) {
      return (
        <Carousel
          activeItem={1}
          length={carousels.length}
          showControls={true}
          showIndicators={false}
          className="z-depth-1"
        >
          <CarouselInner>
            {carousels.map(carousel => {
              return getCarouselItems(carousel);
            })}
          </CarouselInner>
        </Carousel>
      );
    }
    return;
  };

  return <div id="carousel-page">{getcarousels()}</div>;
};

export default CarouselPage;
