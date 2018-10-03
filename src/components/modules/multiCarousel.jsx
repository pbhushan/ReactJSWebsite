import React from "react";
import { NavLink } from "react-router-dom";
import { Carousel, CarouselInner, CarouselItem } from "mdbreact";
import $ from "jquery";
import "./css/multiCarousel.css";

const MultiCarousel = props => {
  const setCSSBackgroundColor = () => {
    const {
      isControl,
      isIndicator,
      controlCssColor,
      indicatorCSSColor
    } = props.multicarousel;

    if (isControl !== "false" && controlCssColor && controlCssColor.length) {
      $(".carousel-multi-item .controls-top .btn-floating").css(
        "background",
        controlCssColor
      );
      console.log(
        $(".carousel-multi-item .controls-top .btn-floating").css("background")
      );
    }
    if (
      isIndicator !== "false" &&
      indicatorCSSColor &&
      controlCssColor.length
    ) {
      $(".carousel-multi-item .carousel-indicators li").css(
        "backgroundColor",
        indicatorCSSColor
      );
    }
  };

  const getCardBody = (item, multiItems) => {
    const { isLogo } = props.multicarousel;
    const { cssTitleStyles, cssBodyStyles, cssButtonStyles } = multiItems;
    const { title, body, button } = item;

    if (isLogo !== "true") {
      return (
        <div className="card-body">
          <p
            className={`${cssTitleStyles && cssTitleStyles.classes} card-title`}
            style={cssTitleStyles && cssTitleStyles.style}
          >
            {title}
          </p>
          <p
            className={`${cssBodyStyles && cssBodyStyles.classes} card-text`}
            style={cssBodyStyles && cssBodyStyles.style}
          >
            {body}
          </p>
          <NavLink
            to={button && button.to}
            className={cssButtonStyles && cssButtonStyles.classes}
            style={cssButtonStyles && cssButtonStyles.style}
            role="button"
          >
            {button && button.text}
          </NavLink>
        </div>
      );
    }
  };

  const getItems = items => {
    const { baseUrl, isLogo } = props.multicarousel;
    const { child, cssImgStyles } = items;

    if (child && child.length) {
      return child.map((item, index) => {
        if (item) {
          const { img, alt } = item;
          const url = baseUrl + img;
          const tag = 12 / child.length;
          const classes =
            index === 0 ? "col-md-" : "clearfix d-none d-md-block col-md-";
          const cardClass = isLogo === "false" ? " mb-2" : "card mb-2";

          return (
            <div key={index} className={`${classes}${tag}`}>
              <div className={cardClass}>
                <img
                  className={cssImgStyles && cssImgStyles.classes}
                  style={cssImgStyles && cssImgStyles.style}
                  src={url}
                  alt={alt}
                />
                {getCardBody(item, items)}
              </div>
            </div>
          );
        }
        return <div />;
      });
    }
  };

  const getMultiCarouselItems = multiItems => {
    return multiItems.map((item, index) => {
      if (item) {
        return (
          <CarouselItem key={index} itemId={index + 1}>
            {getItems(item)}
          </CarouselItem>
        );
      }
      return <div />;
    });
  };

  const getMultiCarousel = () => {
    const { multicarousel } = props;
    if (multicarousel) {
      const {
        isControl,
        isSlide,
        isIndicator,
        cssStyles,
        children
      } = multicarousel;
      if (children && children.length > 0) {
        //setBackground color
        setCSSBackgroundColor();
        const multiCarouselLength = children.length;
        const boolControl = isControl === "false" ? false : true;
        const boolIndicator = isIndicator === "false" ? false : true;
        const slide = isSlide === "false" ? false : true;
        return (
          <div
            className={cssStyles && cssStyles.classes}
            style={cssStyles && cssStyles.style}
          >
            <Carousel
              activeItem={1}
              length={multiCarouselLength}
              slide={slide}
              showControls={boolControl}
              showIndicators={boolIndicator}
              multiItem
            >
              <CarouselInner className="m-2">
                <div className="row">{getMultiCarouselItems(children)}</div>
              </CarouselInner>
            </Carousel>
          </div>
        );
      }
    }
  };
  return <React.Fragment>{getMultiCarousel()}</React.Fragment>;
};

export default MultiCarousel;
