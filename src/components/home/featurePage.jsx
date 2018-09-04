import React from "react";
import { Container, Row, Col, Fa } from "mdbreact";
import "../../css/home/featurePage.css";

const FeaturesPage = props => {
  const { features } = props;

  const getFeatureItems = () => {
    if (features && features.featureItems && features.featureItems.length > 0) {
      return features.featureItems.map(featureItem => {
        return (
          <Col key={featureItem.id} md="4" className="md-0 mb-5">
            <Row>
              <Col lg="2" md="3" size="2">
                <Fa
                  icon={featureItem.icon}
                  size="2x"
                  className={featureItem.className}
                />
              </Col>
              <Col lg="10" md="9" size="10">
                <h4 className="font-weight-bold text-left">
                  {featureItem.heading}
                </h4>
                <p className="grey-text text-left">{featureItem.description}</p>
              </Col>
            </Row>
          </Col>
        );
      });
    }
  };

  return (
    <Container>
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          {features.heading}
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          {features.description}
        </p>
        <Row>{getFeatureItems()}</Row>
      </section>
    </Container>
  );
};

export default FeaturesPage;
