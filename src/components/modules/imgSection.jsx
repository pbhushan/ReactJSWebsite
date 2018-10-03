import React from "react";

const ImgSection = props => {
  const getImg = (child, index) => {
    const { baseUrl } = props.imgSection.section || "";
    const { url, alt, cssStyles } = child;
    const imgUrl = baseUrl + url;
    return (
      <img
        key={index}
        src={imgUrl}
        alt={alt}
        className={cssStyles && cssStyles.classes}
        style={cssStyles && cssStyles.style}
      />
    );
  };

  const getText = (child, index) => {
    const { text, cssStyles } = child;

    return (
      <p
        key={index}
        className={cssStyles && cssStyles.classes}
        style={cssStyles && cssStyles.style}
      >
        {text}
      </p>
    );
  };

  const getSection = children => {
    if (children && children.length > 0) {
      return children.map((child, index) => {
        if (child) {
          const { type } = child;
          if (type === "img") {
            return getImg(child, index);
          } else if (type === "text") {
            return getText(child, index);
          }
          return (
            <div>
              <h4>Error. Type is not defined properly</h4>
            </div>
          );
        }
        return (
          <div>
            <h4>Child is undefined</h4>
          </div>
        );
      });
    }
  };

  const getImgSection = () => {
    const { imgSection } = props;

    if (imgSection && imgSection.section) {
      const { section } = imgSection;
      const { title, children, cssStyles } = section;
      return (
        <section
          id={title.name.replace(" ", "_")}
          className={cssStyles && cssStyles.classes}
          style={cssStyles && cssStyles.style}
        >
          <div className="container">
            <p
              className={title && title.cssStyles && title.cssStyles.classes}
              style={title && title.cssStyles && title.cssStyles.style}
            >
              {title && title.name}
            </p>
            <div className="row">{getSection(children)}</div>
          </div>
        </section>
      );
    }
  };

  return <div>{getImgSection()}</div>;
};

export default ImgSection;
