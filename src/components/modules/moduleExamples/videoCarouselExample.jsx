import React, { Component } from "react";

import JSONStringfyObj from "../jsonStringfyObj";
import VideoCarousel from "../videoCarousel";

import {
  getDataUrlBasePath,
  getModulesVideoCarousel
} from "../../../services/httpModuleService";

class CarouselExample extends Component {
  state = {
    carousel: {}
  };

  async componentWillMount() {
    const { data } = await getDataUrlBasePath();
    const urlPath = data.basePath.dataUrlBasePath;
    this.getCarouselData(urlPath);
  }

  getCarouselData = async basePath => {
    const { data } = await getModulesVideoCarousel(basePath);
    this.setState({ carousel: data });
  };

  getCallBack = callback => {
    const { updated_src } = callback;
    if (updated_src && updated_src.carousel) {
      this.setState({ carousel: callback.updated_src });
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
    const { carousel } = this.state;
    return (
      <div>
        <h1 className="mt-4 ml-3">Video Carousel Module example</h1>
        <VideoCarousel carousel={carousel.carousel} />
        <JSONStringfyObj
          obj={carousel}
          onAdd={this.onAdd}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
          collapsed={true}
        />
      </div>
    );
  }
}

export default CarouselExample;
