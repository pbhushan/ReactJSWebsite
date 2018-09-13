import React, { Component } from "react";
import Lightbox from "react-image-lightbox";

import "../../css/about/about.css";

class AboutUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  getCertificateImg() {
    const { about, imageBaseUrl } = this.props;

    let id = -1;
    if (about && about.certificates && about.certificates.length > 0) {
      return about.certificates.map(certificate => {
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
    const { about, imageBaseUrl } = this.props;
    return (
      <div>
        <section className="row mt-5 p-5 grey lighten-4">
          <h1 className="col-md  text-center">{about.info.title}</h1>
          <div className="row p-4">
            <p className="col-md-2" />
            <img
              src={`${imageBaseUrl}${about.info.imageUrl}`}
              alt="about"
              className="about-img col-md-4"
            />
            <p className="ml-2 col-md-4 grey-text">{about.info.description}</p>
            <p className="col-md-2" />
          </div>
        </section>
        <section className="container p-5 mt-3">
          <h1 className="text-center">Certificates</h1>
          <div className="row p-2">{this.getCertificateImg()}</div>
          {isOpen && (
            <Lightbox
              mainSrc={imageBaseUrl + about.certificates[photoIndex].imgUrl}
              nextSrc={
                imageBaseUrl +
                about.certificates[(photoIndex + 1) % about.certificates.length]
                  .imgUrl
              }
              prevSrc={
                imageBaseUrl +
                about.certificates[
                  (photoIndex + about.certificates.length - 1) %
                    about.certificates.length
                ].imgUrl
              }
              imageTitle={about.certificates[photoIndex].name}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex:
                    (photoIndex + about.certificates.length - 1) %
                    about.certificates.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % about.certificates.length
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
