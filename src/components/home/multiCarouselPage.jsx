import React, { Component } from "react";
import {
  Carousel,
  CarouselInner,
  CarouselItem,
  Container,
  Row,
  Col,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  Button
} from "mdbreact";
import { NavLink } from "react-router-dom";

import "../../css/home/multiCarouselPage.css";

class MultiCarouselPage extends Component {
  getItemsCard = cardItems => {
    const { imgBaseUrlPath } = this.props;
    let count = 0;

    return cardItems.map(card => {
      count += 1;
      const classNames = count === 1 ? "" : "clearfix d-none d-md-block";
      const url = imgBaseUrlPath + card.path.replace("../", "");
      return (
        <Col key={count} md="4" className={classNames}>
          <Card className="mb-2 product-img">
            <CardImage
              src={url}
              alt="Card image cap"
              top
              hover
              overlay="white-slight"
            />
            <CardBody>
              <CardTitle tag="h6">{card.name.split(".")[0]}</CardTitle>

              <NavLink to="/product" class="btn btn-primary" role="button">
                Learn More
              </NavLink>

              {/* <Button color="primary">
                <NavLink to="/product"> Learn More </NavLink>
              </Button> */}
            </CardBody>
          </Card>
        </Col>
      );
    });
  };

  getMultiCarouselItems = items => {
    let count = 0;
    return items.map(item => {
      count += 1;

      return (
        <CarouselItem key={count} itemId={count}>
          {this.getItemsCard(item)}
        </CarouselItem>
      );
    });
  };

  getMultiCarouselPageItems = () => {
    const itemList = [...this.props.multiCarouselList];
    const multiCarouselLength = itemList.length / 3;

    let list = [];
    if (itemList && itemList.length > 0) {
      while (itemList.length) list.push(itemList.splice(0, 3));

      return (
        <Carousel
          activeItem={1}
          length={multiCarouselLength}
          slide={true}
          showControls={true}
          showIndicators={true}
          multiItem
        >
          <CarouselInner>
            <Row>{this.getMultiCarouselItems(list)}</Row>
          </CarouselInner>
        </Carousel>
      );
    }
  };

  render() {
    return <Container> {this.getMultiCarouselPageItems()}</Container>;
  }
}

export default MultiCarouselPage;

/* 

  return (
    <Container>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our Products
      </h2>
      <Carousel
        activeItem={1}
        length={carouselLength}
        slide={true}
        showControls={true}
        showIndicators={true}
        multiItem
      >
        <CarouselInner>
          <Row>
            {convertTo2DArray()}
            <CarouselItem itemId="1">
              <Col md="4">
                <Card className="mb-2">
                  <CardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                  <CardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                  <CardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Learn More</Button>
                  </CardBody>
                </Card>
              </Col>
            </CarouselItem>
            <CarouselItem itemId="2">
              <Col md="4">
                <Card className="mb-2">
                  <CardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Learn More</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                  <CardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Learn More</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                  <CardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
              </Col>
            </CarouselItem>
            <CarouselItem itemId="3">
              <Col md="4">
                <Card className="mb-2">
                  <CardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                  <CardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                  <CardImage
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg"
                  />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="primary">Button</Button>
                  </CardBody>
                </Card>
              </Col>
            </CarouselItem>
          </Row>
        </CarouselInner>
      </Carousel>
    </Container>
  );
};

export default MultiCarouselPage;
 */
