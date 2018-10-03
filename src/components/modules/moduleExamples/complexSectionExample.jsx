import React, { Component } from "react";

import {
  getDataUrlBasePath,
  getModulesComplexSection
} from "../../../services/httpModuleService";

import JSONStringfyObj from "../jsonStringfyObj";
import ComplexSection from "../complexSection";

class ComplexSectionExample extends Component {
  state = {
    complexSection: {}
  };

  async componentWillMount() {
    const { data } = await getDataUrlBasePath();
    const urlPath = data.basePath.dataUrlBasePath;
    this.getAsyncComplexSectionData(urlPath);
  }

  getAsyncComplexSectionData = async basePath => {
    const { data } = await getModulesComplexSection(basePath);
    this.setState({ complexSection: data });
  };

  getCallBack = callback => {
    const { updated_src } = callback;
    if (updated_src && updated_src.complexSection) {
      this.setState({ complexSection: callback.updated_src });
    }
  };

  onEdit = callback => {
    this.getCallBack(callback);
  };

  onAdd = callback => {
    this.getCallBack(callback);
  };

  onDelete = callback => {
    this.getCallBack(callback);
  };

  render() {
    const { complexSection } = this.state;

    return (
      <div>
        <h1 className="mt-4 ml-3"> ComplexSection Module</h1>
        <ComplexSection complexSection={complexSection.complexSection} />
        <JSONStringfyObj
          obj={complexSection}
          onAdd={this.onAdd}
          onEdit={this.onEdit}
          collapsed={true}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default ComplexSectionExample;
