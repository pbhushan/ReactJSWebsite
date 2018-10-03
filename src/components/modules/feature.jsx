import React from "react";

const Feature = props => {
  const getIconOrImg = item => {
    const { feature } = props;
    const { baseUrl } = feature;
    const { isIcon, img, imgOrIconCssStyle } = item;
    if (isIcon !== "false") {
      return (
        <i
          className={imgOrIconCssStyle && imgOrIconCssStyle.classes}
          style={imgOrIconCssStyle && imgOrIconCssStyle.style}
        />
      );
    } else {
      const url = baseUrl + img;
      return (
        <img
          src={url}
          alt=""
          className={imgOrIconCssStyle && imgOrIconCssStyle.classes}
          style={imgOrIconCssStyle && imgOrIconCssStyle.style}
        />
      );
    }
  };

  const getFeatureItem = items => {
    if (items && items.length > 0) {
      return items.map((item, index) => {
        if (item) {
          const { title, text, cssStyle, bodyCssStyle } = item;
          const { titleCssStyle, textCssStyle } = bodyCssStyle;

          return (
            <div
              key={index}
              className={cssStyle && cssStyle.classes}
              style={cssStyle && cssStyle.style}
            >
              <div className="row">
                {getIconOrImg(item)}
                <div
                  className={bodyCssStyle && bodyCssStyle.classes}
                  style={bodyCssStyle && bodyCssStyle.style}
                >
                  <p
                    className={titleCssStyle && titleCssStyle.classes}
                    style={titleCssStyle && titleCssStyle.style}
                  >
                    {title}
                  </p>
                  <p
                    className={textCssStyle && textCssStyle.classes}
                    style={textCssStyle && textCssStyle.style}
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
      const { cssStyle, children } = feature;

      return (
        <div
          className={cssStyle && cssStyle.classes}
          style={cssStyle && cssStyle.style}
        >
          <div className="row">{getFeatureItem(children)}</div>
        </div>
      );
    }
  };
  return <div>{getFeature()}</div>;
};

export default Feature;
