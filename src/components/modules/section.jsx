import React from "react";

const Section = props => {
  const getEachSection = section => {
    const { title, titleCssStyles, children } = section;

    if (children && children.length > 0) {
      return (
        <React.Fragment>
          <p
            className={titleCssStyles && titleCssStyles.classes}
            style={titleCssStyles && titleCssStyles.style}
          >
            {title}
          </p>
          {children.map((child, index) => {
            if (child) {
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
            }
            return <div />;
          })}
        </React.Fragment>
      );
    }
  };
  const getSection = () => {
    const { section } = props;

    if (section) {
      const { cssStyles, children } = section;

      if (children && children.length > 0) {
        return (
          <section
            className={cssStyles && cssStyles.classes}
            style={cssStyles && cssStyles.style}
          >
            <div className="row">
              {children.map((child, index) => {
                if (child) {
                  const { cssStyles } = child;
                  return (
                    <div
                      key={index}
                      className={cssStyles && cssStyles.classes}
                      style={cssStyles && cssStyles.style}
                    >
                      {getEachSection(child)}
                    </div>
                  );
                }
                return <div />;
              })}
            </div>
          </section>
        );
      }
    }
  };

  return <div>{getSection()}</div>;
};

export default Section;
