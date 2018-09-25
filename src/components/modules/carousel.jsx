import React from "react";
import "./css/carousel.css";
const Carousel = props => {
  const getThumbnailIndicators = (carouselId, carousel) => {
    const { children, baseUrl } = carousel;

    return (
      <ol className={`carousel-indicators`}>
        {children.map((ch, index) => {
          if (ch) {
            const { img, alt } = ch;
            const active = index === 0 ? "active" : "";
            const url = baseUrl + img;

            return (
              <li
                key={index}
                data-target={`#${carouselId}`}
                data-slide-to={index}
                className={active}
              >
                <img className="d-block w-100" src={url} alt={alt} />
              </li>
            );
          }
          return <h4>Child is undefined</h4>;
        })}
      </ol>
    );
  };
  const getIndicators = (carouselId, carousel) => {
    const { isIndicator, children, thumbnailIndicator } = carousel;

    if (children && children.length > 0) {
      if (thumbnailIndicator && thumbnailIndicator.isThumbnail === "true") {
        return (
          <React.Fragment>
            {getThumbnailIndicators(carouselId, carousel)}
          </React.Fragment>
        );
      } else if (isIndicator !== "false") {
        return (
          <ol className="carousel-indicators">
            {children.map((ch, index) => {
              const active = index === 0 ? "active" : "";

              return (
                <li
                  key={index}
                  data-target={`#${carouselId}`}
                  data-slide-to={index}
                  className={active}
                />
              );
            })}
          </ol>
        );
      }
    }
  };
  const getControls = (carouselId, carousel) => {
    const { isControl } = carousel;
    if (isControl !== "false") {
      return (
        <React.Fragment>
          <a
            className="carousel-control-prev"
            href={`#${carouselId}`}
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href={`#${carouselId}`}
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </React.Fragment>
      );
    }
  };
  const getCaptions = caption => {
    if (caption) {
      const { heading, description } = caption;
      return (
        <div className="carousel-caption d-none d-md-block">
          <h3
            className={
              heading && heading.cssStyles && heading.cssStyles.classes
            }
            style={heading && heading.cssStyles && heading.cssStyles.style}
          >
            {heading && heading.name}
          </h3>
          <p
            className={
              description &&
              description.cssStyles &&
              description.cssStyles.classes
            }
            style={
              description &&
              description.cssStyles &&
              description.cssStyles.style
            }
          >
            {description && description.name}
          </p>
        </div>
      );
    }
  };
  const getSlide = carousel => {
    const { children, baseUrl, thumbnailIndicator } = carousel;
    const role =
      thumbnailIndicator && thumbnailIndicator.isThumbnail ? "listbox" : "";

    if (children && children.length > 0) {
      return (
        <div className="carousel-inner" role={role}>
          {children.map((child, index) => {
            if (child) {
              const { img, alt, caption, cssStyles } = child;
              const active = index === 0 ? "active" : "";
              const url = baseUrl + img;

              return (
                <div key={index} className={`carousel-item ${active}`}>
                  <img
                    className={`d-block w-100 ${cssStyles &&
                      cssStyles.classes}`}
                    style={cssStyles && cssStyles.style}
                    src={url}
                    alt={alt}
                  />
                  {getCaptions(caption)}
                </div>
              );
            }
            return (
              <div>
                <h4>Child is undefined</h4>
              </div>
            );
          })}
        </div>
      );
    }
  };
  const getCarousel = () => {
    const { carousel } = props;
    if (carousel) {
      const { cssStyles, thumbnailIndicator } = carousel;
      const cssClass =
        thumbnailIndicator && thumbnailIndicator.isThumbnail === "true"
          ? "carousel-thumbnail"
          : "";
      const carouselId = "carousel_" + Math.floor(Math.random() * 100000);

      return (
        <div
          id={carouselId}
          className={`${cssStyles &&
            cssStyles.classes} carousel slide ${cssClass}`}
          style={cssStyles && cssStyles.style}
          data-ride="carousel"
        >
          {getIndicators(carouselId, carousel)}
          {getSlide(carousel)}
          {getControls(carouselId, carousel)}
        </div>
      );
    }
  };

  return <React.Fragment>{getCarousel()}</React.Fragment>;
};

export default Carousel;
