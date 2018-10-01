import React, { Component } from "react";

import {
  getDataUrlBasePath,
  getModulesFeatures
} from "../../../services/httpModuleService";

import JSONStringfyObj from "../jsonStringfyObj";
import Feature from "../feature";

class FeatureExample extends Component {
  state = {
    feature: {}
  };

  async componentWillMount() {
    const { data } = await getDataUrlBasePath();
    const urlPath = data.basePath.dataUrlBasePath;
    this.getAsyncFeatureData(urlPath);
  }

  getAsyncFeatureData = async basePath => {
    const { data } = await getModulesFeatures(basePath);
    this.setState({ feature: data });
  };

  getCallBack = callback => {
    const { updated_src } = callback;
    if (updated_src && updated_src.feature) {
      this.setState({ feature: callback.updated_src });
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
    const { feature } = this.state;

    return (
      <div>
        <h1 className="mt-4 ml-3"> Feature Module</h1>
        <Feature feature={feature.feature} />
        <JSONStringfyObj
          obj={feature}
          onAdd={this.onAdd}
          onEdit={this.onEdit}
          collapsed={true}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default FeatureExample;
