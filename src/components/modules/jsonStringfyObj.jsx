import React from "react";
import ReactJson from "react-json-view";

const JSONStringfyObj = props => {
  return (
    <div className="ml-5  mr-5">
      <ReactJson
        src={props.obj}
        onAdd={props.onAdd}
        displayDataTypes={false}
        displayObjectSize={false}
        onEdit={props.onEdit}
        onDelete={props.onDelete}
        theme="monokai"
      />
    </div>
  );
};

export default JSONStringfyObj;
