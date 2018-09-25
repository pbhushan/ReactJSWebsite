import React from "react";
import ReactJson from "react-json-view";

const JSONStringfyObj = props => {
  return (
    <div className="ml-3 mt-3 mr-3">
      <ReactJson
        src={props.obj}
        onAdd={props.onAdd}
        onEdit={props.onEdit}
        onDelete={props.onDelete}
        collapsed={props.collapsed}
        theme="monokai"
      />
    </div>
  );
};

export default JSONStringfyObj;
