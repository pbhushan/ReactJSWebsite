import React, { Component } from "react";
import Lightbox from "react-image-lightbox";

import "../../css/about/about.css";

import imageUrl from "../../assets/images/about.jpg";
class AboutUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  getCertificateImg() {
    const { certificates, imageBaseUrl } = this.props;

    let id = -1;
    if (certificates && certificates.length > 0) {
      return certificates.map(certificate => {
        id += 1;
        const imageUrl = imageBaseUrl + certificate.imgUrl;
        const key = id;
        return (
          <img
            key={key}
            src={imageUrl}
            className="certificate-img p-3 col-md-4"
            alt="certificate"
            onClick={() => {
              this.setState({ photoIndex: key, isOpen: true });
            }}
          />
        );
      });
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const { certificates, imageBaseUrl } = this.props;
    return (
      <div>
        <section className="row mt-5 p-5 grey lighten-4">
          <h1 className="col-md  text-center">About Us</h1>
          <div className="row p-4">
            <p className="col-md-2" />
            <img src={imageUrl} alt="about" className="about-img col-md-4" />
            <p className="ml-2 col-md-4 grey-text">
              SUSCOM ELECTROMECHNICAL PVT.LTD is top leading manufacturer,
              distributor and importers for all type of connectors , cable
              assembly and data-signal converters and many more." ance and
              fastest delivery across the world. It’s known for reliable source
              of industrial automation, power electronics solutions, Data
              solutions, cable assembly i.e., power cable, encoder cable,
              Interface cable, CNC cables and tailor made solutions related to
              connectivity with best price assurance and fastest delivery across
              the world.
            </p>
            <p className="col-md-2" />
          </div>
        </section>
        <section className="container p-5 mt-3">
          <h1 className="text-center">Certificates</h1>
          <div className="row p-2">{this.getCertificateImg()}</div>
          {isOpen && (
            <Lightbox
              mainSrc={imageBaseUrl + certificates[photoIndex].imgUrl}
              nextSrc={
                imageBaseUrl +
                certificates[(photoIndex + 1) % certificates.length].imgUrl
              }
              prevSrc={
                imageBaseUrl +
                certificates[
                  (photoIndex + certificates.length - 1) % certificates.length
                ].imgUrl
              }
              imageTitle={certificates[photoIndex].name}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex:
                    (photoIndex + certificates.length - 1) % certificates.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % certificates.length
                })
              }
            />
          )}
        </section>
      </div>
    );
  }
}

export default AboutUs;
