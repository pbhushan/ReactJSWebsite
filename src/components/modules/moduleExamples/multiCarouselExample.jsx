import React, { Component } from "react";

import JSONStringfyObj from "../jsonStringfyObj";
import MultiCarousel from "../multiCarousel";

import {
  getDataUrlBasePath,
  getModulesMultiCarousel
} from "../../../services/httpModuleService";

class MultiCarouselExample extends Component {
  state = {
    multicarousel: {}
  };

  async componentWillMount() {
    const { data } = await getDataUrlBasePath();
    const urlPath = data.basePath.dataUrlBasePath;
    this.getCarouselData(urlPath);
  }

  getCarouselData = async basePath => {
    const { data } = await getModulesMultiCarousel(basePath);
    this.setState({ multicarousel: data });
  };

  getCallBack = callback => {
    const { updated_src } = callback;
    if (updated_src && updated_src.multicarousel) {
      this.setState({ multicarousel: callback.updated_src });
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
    const { multicarousel } = this.state;
    return (
      <div>
        <h1 className="mt-4 ml-3">
          {" "}
          Multi Carousel/ multi logo Carousel Module example
        </h1>
        <MultiCarousel multicarousel={multicarousel.multicarousel} />
        <JSONStringfyObj
          obj={multicarousel}
          onAdd={this.onAdd}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
          collapsed={true}
        />
      </div>
    );
  }
}

export default MultiCarouselExample;
