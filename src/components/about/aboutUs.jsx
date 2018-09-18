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
    if (
      about &&
      about.certificates &&
      about.certificates.img &&
      about.certificates.img.length > 0
    ) {
      return about.certificates.img.map(certificate => {
        id += 1;
        const imageUrl = imageBaseUrl + certificate.imgUrl;
        const key = id;
        return (
          <img
            key={key}
            src={imageUrl}
            className="certificate-img p-3 col-md-4 ml-5"
            alt="certificate"
            onClick={() => {
              this.setState({ photoIndex: key, isOpen: true });
            }}
          />
        );
      });
    }
  }

  getAboutIntro = () => {
    const { about, imageBaseUrl } = this.props;

    if (about && about.info) {
      return (
        <section className="mt-5 p-5 grey lighten-4">
          <div className="row">
            <h1 className="col-md  text-center">{about.info.title}</h1>
          </div>
          <div className="row p-4">
            <p className="col-md-2" />
            <img
              src={`${imageBaseUrl}${about.info.imgUrl}`}
              alt="about"
              className="about-img col-md-4"
            />
            <p className="ml-2 col-md-4 grey-text">{about.info.description}</p>
            <p className="col-md-2" />
          </div>
        </section>
      );
    }
  };

  render() {
    const { photoIndex, isOpen } = this.state;
    const { about, imageBaseUrl } = this.props;

    return (
      <div>
        {this.getAboutIntro()}
        <section className="container p-5 mt-3">
          <h1 className="text-center">
            {about.certificates && about.certificates.title}
          </h1>
          <div className="row p-2">{this.getCertificateImg()}</div>
          {isOpen && (
            <Lightbox
              mainSrc={imageBaseUrl + about.certificates.img[photoIndex].imgUrl}
              nextSrc={
                imageBaseUrl +
                about.certificates.img[
                  (photoIndex + 1) % about.certificates.img.length
                ].imgUrl
              }
              prevSrc={
                imageBaseUrl +
                about.certificates.img[
                  (photoIndex + about.certificates.img.length - 1) %
                    about.certificates.img.length
                ].imgUrl
              }
              imageTitle={about.certificates.img[photoIndex].name}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex:
                    (photoIndex + about.certificates.img.length - 1) %
                    about.certificates.img.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % about.certificates.img.length
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
