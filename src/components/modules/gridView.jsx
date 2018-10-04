import React from "react";
import { NavLink } from "react-router-dom";

const GridView = props => {
  const getImgGrid = (grid, index) => {
    const { gridView } = props;
    const { baseUrl } = gridView;
    const { img, alt, cssStyle, imgCssStyle } = grid;
    const url = baseUrl + img;

    return (
      <div
        key={index}
        className={cssStyle && cssStyle.classes}
        style={cssStyle && cssStyle.style}
      >
        <img
          src={url}
          alt={alt}
          className={imgCssStyle && imgCssStyle.classes}
          style={imgCssStyle && imgCssStyle.style}
        />
      </div>
    );
  };
  const getTextGrid = (grid, index) => {
    const { text, cssStyle, textCssStyle, iconCssStyle } = grid;

    return (
      <div
        key={index}
        className={cssStyle && cssStyle.classes}
        style={cssStyle && cssStyle.style}
      >
        <p
          className={textCssStyle && textCssStyle.classes}
          style={textCssStyle && textCssStyle.style}
        >
          <i
            className={iconCssStyle && iconCssStyle.classes}
            style={iconCssStyle && iconCssStyle.style}
          />
          {text}
        </p>
      </div>
    );
  };
  const getAnchorGrid = (grid, index) => {
    const {
      href,
      text,
      cssStyle,
      textCssStyle,
      iconCssStyle,
      anchorCssStyle
    } = grid;
    return (
      <div
        key={index}
        className={cssStyle && cssStyle.classes}
        style={cssStyle && cssStyle.style}
      >
        <a
          href={href}
          className={anchorCssStyle && anchorCssStyle.classes}
          style={anchorCssStyle && anchorCssStyle.style}
        >
          <p
            className={textCssStyle && textCssStyle.classes}
            style={textCssStyle && textCssStyle.style}
          >
            <i
              className={iconCssStyle && iconCssStyle.classes}
              style={iconCssStyle && iconCssStyle.style}
            />
            {text}
          </p>
        </a>
      </div>
    );
  };
  const getNavlinkGrid = (grid, index) => {
    const {
      href,
      text,
      cssStyle,
      textCssStyle,
      iconCssStyle,
      anchorCssStyle
    } = grid;

    return (
      <div
        key={index}
        className={cssStyle && cssStyle.classes}
        style={cssStyle && cssStyle.style}
      >
        <NavLink
          key={index}
          to={href}
          className={anchorCssStyle && anchorCssStyle.classes}
          style={anchorCssStyle && anchorCssStyle.style}
        >
          <p
            className={textCssStyle && textCssStyle.classes}
            style={textCssStyle && textCssStyle.style}
          >
            <i
              className={iconCssStyle && iconCssStyle.classes}
              style={iconCssStyle && iconCssStyle.style}
            />
            {text}
          </p>
        </NavLink>
      </div>
    );
  };
  const getVideoGrid = (grid, index) => {
    const { gridView } = props;
    const { baseUrl } = gridView;
    const {
      isIFrame,
      iframeTitle,
      allowFullScreen,
      video,
      videoType,
      cssStyle,
      videoCssStyle
    } = grid;

    const url = baseUrl + video;

    const iframe = (
      <iframe
        title={iframeTitle}
        src={url}
        className={videoCssStyle && videoCssStyle.classes}
        style={videoCssStyle && videoCssStyle.style}
        allowFullScreen={allowFullScreen}
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
  };

  const getGridItem = (item, index) => {
    const { cssStyle, children } = item;

    if (children && children.length > 0) {
      return (
        <div
          key={index}
          className={cssStyle && cssStyle.classes}
          style={cssStyle && cssStyle.style}
        >
          {children.map((grid, index) => {
            if (grid) {
              const { type } = grid;
              if (type === "img") {
                return getImgGrid(grid, index);
              } else if (type === "text") {
                return getTextGrid(grid, index);
              } else if (type === "anchor") {
                return getAnchorGrid(grid, index);
              } else if (type === "navlink") {
                return getNavlinkGrid(grid, index);
              } else if (type === "video") {
                return getVideoGrid(grid, index);
              }
            }
            return <div />;
          })}
        </div>
      );
    }
  };

  const getGridView = () => {
    const { gridView } = props;
    if (gridView) {
      const { cssStyle, grid } = gridView;
      if (grid && grid.length > 0) {
        return (
          <div
            className={cssStyle && cssStyle.classes}
            style={cssStyle && cssStyle.style}
          >
            {grid.map((gridItem, index) => {
              if (gridItem) {
                const { cssStyle, children } = gridItem;
                if (children && children.length > 0) {
                  return (
                    <div
                      key={index}
                      className={cssStyle && cssStyle.classes}
                      style={cssStyle && cssStyle.style}
                    >
                      {children.map((child, ind) => {
                        if (child) {
                          return getGridItem(child, ind);
                        }
                        return <div />;
                      })}
                    </div>
                  );
                }
              }
              return <div />;
            })}
          </div>
        );
      }
    }
  };

  return <div>{getGridView()}</div>;
};

export default GridView;
