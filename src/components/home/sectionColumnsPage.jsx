import React from "react";
import "../../css/home/sectionColumns.css";

const SectionColumns = props => {
  const { sections } = props;

  const getSections = () => {
    if (sections && sections.length > 0) {
      return sections.map(section => {
        return (
          <div key={section.id} className="col-md-6 mb-5">
            <h3 className="font-weight-bold text-uppercase">{section.title}</h3>
            <p className="deep-purple-text">{section.firstPara}</p>
            <p className="grey-text">{section.secondPara}</p>
          </div>
        );
      });
    }
    return;
  };

  return (
    <div className="container p-100">
      <div className="row">{getSections()}</div>
    </div>
  );
};

export default SectionColumns;
