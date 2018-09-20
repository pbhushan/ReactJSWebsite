import React, { Component } from "react";
import ImgSection from "./modules/imgSection";
import {
  getDataUrlBasePath,
  getModulesImgSection
} from "../services/httpModuleService";

class Modules extends Component {
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
    this.setState({ imgSection: data.imgSection });
  };

  render() {
    const { imgSection } = this.state;
    return (
      <React.Fragment>
        <div>
          <h1 className="mt-4 ml-3"> ImgSection</h1>
          <ImgSection imgSection={imgSection} />
        </div>
      </React.Fragment>
    );
  }
}

export default Modules;
