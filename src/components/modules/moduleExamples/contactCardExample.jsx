import React, { Component } from "react";

import JSONStringfyObj from "../jsonStringfyObj";
import ContactCard from "../contactCard";
import {
  getDataUrlBasePath,
  getModulesContactCard
} from "../../../services/httpModuleService";

class ContactCardExample extends Component {
  state = {
    contactCard: {}
  };

  async componentWillMount() {
    const { data } = await getDataUrlBasePath();
    const urlPath = data.basePath.dataUrlBasePath;
    this.getAsyncContactCardData(urlPath);
  }

  getAsyncContactCardData = async basePath => {
    const { data } = await getModulesContactCard(basePath);
    this.setState({ contactCard: data });
  };

  getCallBack = callback => {
    const { updated_src } = callback;
    if (updated_src && updated_src.contactCard) {
      this.setState({ contactCard: callback.updated_src });
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
    const { contactCard } = this.state;
    return (
      <div>
        <h1 className="mt-4 ml-3"> ContactCard Module</h1>
        <ContactCard contactCard={contactCard.contactCard} />
        <JSONStringfyObj
          obj={contactCard}
          onAdd={this.onAdd}
          onEdit={this.onEdit}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default ContactCardExample;
