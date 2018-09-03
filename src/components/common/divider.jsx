import React from "react";
import "../../css/common/divider.css";
const Divider = props => {
  return (
    <div className="row">
      <div className="col-md mdb-color lighten-3">
        <h4 className="p-4 white-text font-italic text-center">{props.path}</h4>
      </div>
    </div>
  );
};

export default Divider;
