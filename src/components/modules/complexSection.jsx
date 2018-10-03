import React from "react";

const ComplexSection = props => {
  const getTextSection = children => {
    if (children && children.length > 0) {
      return children.map((item, index) => {
        if (item) {
          const { title, text, cssStyle, bodyCssStyle, iconCssStyle } = item;
          const { titleCssStyle, textCssStyle } = bodyCssStyle;

          return (
            <div
              key={index}
              className={cssStyle && cssStyle.classes}
              style={cssStyle && cssStyle.style}
            >
              <i
                className={iconCssStyle && iconCssStyle.classes}
                style={iconCssStyle && iconCssStyle.style}
              />
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
          );
        }
        return <div />;
      });
    }
  };

  const getImgSection = children => {
    if (children && children.length > 0) {
      return children.map((item, index) => {
        if (item) {
          const { complexSection } = props;

          const { baseUrl } = complexSection;
          const { img, cssStyle, imgCssStyle } = item;
          const url = baseUrl + img;

          return (
            <div
              key={index}
              className={cssStyle && cssStyle.classes}
              style={cssStyle && cssStyle.style}
            >
              <img
                src={url}
                alt=""
                className={imgCssStyle && imgCssStyle.classes}
                style={imgCssStyle && imgCssStyle.style}
              />
            </div>
          );
        }
        return <div />;
      });
    }
  };

  const getVideoSection = children => {
    if (children && children.length > 0) {
      return children.map((item, index) => {
        if (item) {
          const { complexSection } = props;

          const { baseUrl } = complexSection;
          const {
            isIFrame,
            iframeTitle,
            video,
            videoType,
            cssStyle,
            videoCssStyle,
            allowFullScreen
          } = item;
          const url = baseUrl + video;

          const iframe = (
            <iframe
              title={iframeTitle}
              src={url}
              className={videoCssStyle && videoCssStyle.classes}
              style={videoCssStyle && videoCssStyle.style}
              allowFullScreen={allowFullScreen || ""}
            />
          );
          const simpleVideo = (
            <video
              className={videoCssStyle && videoCssStyle.classes}
              style={videoCssStyle && videoCssStyle.style}
            >
              <source src={url} type={videoType} />
            </video>
          );

          const videoFrame = isIFrame === "true" ? iframe : simpleVideo;

          return (
            <div
              key={index}
              className={cssStyle && cssStyle.classes}
              style={cssStyle && cssStyle.style}
            >
              {videoFrame}
            </div>
          );
        }
        return <div />;
      });
    }
  };

  const getSectionChildren = (type, items) => {
    if (items && items.length) {
      if (type === "text") {
        return getTextSection(items);
      } else if (type === "img") {
        return getImgSection(items);
      } else if (type === "video") {
        return getVideoSection(items);
      }
    }
  };

  const getSectionFragments = fragments => {
    if (fragments && fragments.length > 0) {
      return fragments.map((fragment, index) => {
        if (fragment) {
          const {
            id,
            type,
            title,
            cssStyle,
            titleCssStyle,
            children
          } = fragment;

          return (
            <div
              key={index}
              id={id}
              className={cssStyle && cssStyle.classes}
              style={cssStyle && cssStyle.style}
            >
              <p
                className={titleCssStyle && titleCssStyle.classes}
                style={titleCssStyle && titleCssStyle.style}
              >
                {title}
              </p>
              <div>{getSectionChildren(type, children)}</div>
            </div>
          );
        }
        return <div />;
      });
    }
  };

  const getSection = section => {
    if (section) {
      const { cssStyle, titleCssStyle, title, children } = section;

      return (
        <React.Fragment>
          <p
            className={titleCssStyle && titleCssStyle.classes}
            style={titleCssStyle && titleCssStyle.style}
          >
            {title}
          </p>
          <div
            className={cssStyle && cssStyle.classes}
            style={cssStyle && cssStyle.style}
          >
            {getSectionFragments(children)}
          </div>
        </React.Fragment>
      );
    }
  };

  const getComplexSection = () => {
    const { complexSection } = props;
    if (complexSection) {
      const { id, cssStyle, section } = complexSection;

      return (
        <section
          id={id}
          className={cssStyle && cssStyle.classes}
          style={cssStyle && cssStyle.style}
        >
          {getSection(section)}
        </section>
      );
    }
  };

  return <div>{getComplexSection()}</div>;
};

export default ComplexSection;
