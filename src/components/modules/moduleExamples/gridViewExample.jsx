import React, { Component } from "react";

import {
  getDataUrlBasePath,
  getModulesGridView
} from "../../../services/httpModuleService";

import JSONStringfyObj from "../jsonStringfyObj";
import GridView from "../gridView";

class GridViewExample extends Component {
  state = {
    gridView: {}
  };

  async componentWillMount() {
    const { data } = await getDataUrlBasePath();
    const urlPath = data.basePath.dataUrlBasePath;
    this.getAsyncGridViewData(urlPath);
  }

  getAsyncGridViewData = async basePath => {
    const { data } = await getModulesGridView(basePath);
    this.setState({ gridView: data });
  };

  getCallBack = callback => {
    const { updated_src } = callback;
    if (updated_src && updated_src.gridView) {
      this.setState({ gridView: callback.updated_src });
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
    const { gridView } = this.state;

    return (
      <div>
        <h1 className="mt-4 ml-3"> GridView Module</h1>
        <GridView gridView={gridView.gridView} />
        <JSONStringfyObj
          obj={gridView}
          onAdd={this.onAdd}
          onEdit={this.onEdit}
          collapsed={true}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default GridViewExample;
