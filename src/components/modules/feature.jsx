import React from "react";

const Feature = props => {
  const getIconOrImg = item => {
    const { feature } = props;
    const { baseUrl } = feature;
    const { isIcon, img, imgOrIconCssStyles } = item;
    if (isIcon !== "false") {
      return (
        <i
          className={`${imgOrIconCssStyles &&
            imgOrIconCssStyles.classes} col-md-2`}
          style={imgOrIconCssStyles && imgOrIconCssStyles.style}
        />
      );
    } else {
      const url = baseUrl + img;
      return (
        <img
          src={url}
          alt=""
          className={`${imgOrIconCssStyles &&
            imgOrIconCssStyles.classes} col-md-2`}
          style={imgOrIconCssStyles && imgOrIconCssStyles.style}
        />
      );
    }
  };

  const getFeatureItem = items => {
    if (items && items.length > 0) {
      return items.map((item, index) => {
        if (item) {
          const {
            title,
            text,
            cssStyles,
            titleCssStyles,
            textCssStyles
          } = item;

          return (
            <div
              key={index}
              className={cssStyles && cssStyles.classes}
              style={cssStyles && cssStyles.style}
            >
              <div className="row">
                {getIconOrImg(item)}
                <div className="col-md-10">
                  <h3
                    className={titleCssStyles && titleCssStyles.classes}
                    style={titleCssStyles && titleCssStyles.style}
                  >
                    {title}
                  </h3>
                  <p
                    className={textCssStyles && textCssStyles.classes}
                    style={textCssStyles && textCssStyles.style}
                  >
                    {text}
                  </p>
                </div>
              </div>
            </div>
          );
        }
        return <div />;
      });
    }
  };

  const getFeature = () => {
    const { feature } = props;

    if (feature) {
      const { cssStyles, children } = feature;
      return (
        <div
          className={cssStyles && cssStyles.classes}
          style={cssStyles && cssStyles.style}
        >
          <div className="row">{getFeatureItem(children)}</div>
        </div>
      );
    }
  };
  return <div>{getFeature()}</div>;
};

export default Feature;
