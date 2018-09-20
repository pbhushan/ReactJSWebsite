import React from "react";

const ImgSection = props => {
  const getImgSection = () => {
    const { imgSection } = props;

    if (imgSection && imgSection.section) {
      const { section } = imgSection;
      const { title, img, description } = section;
      return (
        <section
          id={title.name.replace(" ", "_")}
          className={section.cssStyles.classes}
          style={section.cssStyles.style}
        >
          <div className="container">
            <h1
              className={title.cssStyles.classes}
              style={title.cssStyles.style}
            >
              {title.name}
            </h1>
            <div className="row">
              <img
                src={img.url}
                alt={img.alt}
                className={img.cssStyles.classes}
                style={img.cssStyles.style}
              />
              <p
                className={description.cssStyles.classes}
                style={description.cssStyles.style}
              >
                {description.text}
              </p>
            </div>
          </div>
        </section>
      );
    }
  };

  return <div>{getImgSection()}</div>;
};

export default ImgSection;
