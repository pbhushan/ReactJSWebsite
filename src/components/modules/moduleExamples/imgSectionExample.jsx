import React, { Component } from "react";

import {
  getDataUrlBasePath,
  getModulesImgSection
} from "../../../services/httpModuleService";

import ImgSection from "../imgSection";
import JSONStringfyObj from "../jsonStringfyObj";

class ImgSectionExample extends Component {
  state = {
    imgSection: {}
  };

  async componentWillMount() {
    const { data } = await getDataUrlBasePath();
    const urlPath = data.basePath.dataUrlBasePath;
    this.getAsyncImgSectionData(urlPath);
  }

  getAsyncImgSectionData = async basePath => {
    const { data } = await getModulesImgSection(basePath);
    this.setState({ imgSection: data });
  };

  getCallBack = callback => {
    const { updated_src } = callback;
    if (updated_src && updated_src.imgSection) {
      this.setState({ imgSection: callback.updated_src });
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
    const { imgSection } = this.state;

    return (
      <div>
        <h1 className="mt-4 ml-3"> ImgSection Module</h1>
        <ImgSection imgSection={imgSection.imgSection} />
        <JSONStringfyObj
          obj={imgSection}
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
