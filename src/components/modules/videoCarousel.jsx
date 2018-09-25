import React from "react";

const VideoCarousel = props => {
  const getIndicators = (carouselId, carousel) => {
    const { isIndicator, children } = carousel;

    if (children && children.length > 0) {
      if (isIndicator !== "false") {
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
      const { cssStyles, children } = caption;
      if (children && children.length > 0) {
        return (
          <div className="carousel-caption d-none d-md-block">
            <ul
              className={`${cssStyles &&
                cssStyles.classes} animated  list-unstyled`}
              style={cssStyles && cssStyles.style}
            >
              {children.map((ch, index) => {
                if (ch) {
                  const { text, cssStyles } = ch;
                  return (
                    <li key={index}>
                      <h4
                        className={cssStyles && cssStyles.classes}
                        style={cssStyles && cssStyles.style}
                      >
                        {text}
                      </h4>
                    </li>
                  );
                }
                return <div />;
              })}
            </ul>
          </div>
        );
      }
    }
  };
  const getSlide = carousel => {
    const { children, baseUrl } = carousel;

    if (children && children.length > 0) {
      return (
        <div className="carousel-inner" role="listbox">
          {children.map((child, index) => {
            if (child) {
              const { video, type, caption, cssStyles } = child;
              const active = index === 0 ? "active" : "";
              const url = baseUrl + video;

              return (
                <div key={index} className={`carousel-item ${active}`}>
                  <video
                    className={`video-fluid  ${cssStyles && cssStyles.classes}`}
                    style={cssStyles && cssStyles.style}
                    autoPlay
                    loop
                    muted
                  >
                    <source src={url} type={type} />
                  </video>
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
      const { cssStyles } = carousel;
      const carouselId = "carousel_" + Math.floor(Math.random() * 100000);

      return (
        <div
          id={carouselId}
          className={`${cssStyles && cssStyles.classes} carousel slide`}
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

export default VideoCarousel;
