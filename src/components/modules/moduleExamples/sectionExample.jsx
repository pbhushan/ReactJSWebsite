import React, { Component } from "react";

import {
  getDataUrlBasePath,
  getModulesSection
} from "../../../services/httpModuleService";

import JSONStringfyObj from "../jsonStringfyObj";
import Section from "../section";

class ImgSectionExample extends Component {
  state = {
    section: {}
  };

  async componentWillMount() {
    const { data } = await getDataUrlBasePath();
    const urlPath = data.basePath.dataUrlBasePath;
    this.getAsyncSectionData(urlPath);
  }

  getAsyncSectionData = async basePath => {
    const { data } = await getModulesSection(basePath);
    this.setState({ section: data });
  };

  getCallBack = callback => {
    const { updated_src } = callback;
    if (updated_src && updated_src.section) {
      this.setState({ section: callback.updated_src });
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
    const { section } = this.state;

    return (
      <div>
        <h1 className="mt-4 ml-3"> Section Module</h1>
        <Section section={section.section} />
        <JSONStringfyObj
          obj={section}
          onAdd={this.onAdd}
          onEdit={this.onEdit}
          collapsed={true}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default ImgSectionExample;
