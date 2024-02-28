import { Button } from "antd";
import "./styles.scss";
import { Col, Container, Row } from "react-bootstrap";
import calendar from "../../../../assets/icons/cal-2.png";
import length from "../../../../assets/icons/length.png";
import height from "../../../../assets/icons/height.png";
import guest from "../../../../assets/icons/guest.png";
import deck from "../../../../assets/icons/deck.png";
import crew from "../../../../assets/icons/crew.png";
import { GoArrowRight } from "react-icons/go";
import { Fade } from "react-awesome-reveal";

function ShipInfo(props: any) {
  return (
    <div className="ship-info column-padding bg-grey">
      <Container fluid>
        <div className="flex center flex-column">
          <Fade duration={2000} triggerOnce>
            <h2 className="bold-700 heading mb-8 text-align-center">
              Technical Details
            </h2>
          </Fade>
        </div>

        <div className="mt-32">
          <Row>
            <Col className="flex center" xs={6} md={4}>
              <div className="flex flex-column center">
                <img
                  src={calendar}
                  style={{ height: "30px" }}
                  className="mb-16"
                  alt=""
                />
                <h6 className="bold-600 font-helper basic-texts">
                  Cruise Inaugural
                </h6>
                <h6 className="bold-600 mb-32 basic-texts">
                  {props?.shipData[0]?.shipInfo?.cruiseInaugural}{" "}
                </h6>
              </div>
            </Col>
            <Col className="flex center" xs={6} md={4}>
              <div className="flex flex-column center">
                <img
                  src={length}
                  style={{ height: "30px" }}
                  className="mb-16"
                  alt=""
                />
                <h6 className="bold-600 font-helper basic-texts">Length</h6>
                <h6 className="bold-600 mb-32 basic-texts">
                  {props?.shipData[0]?.shipInfo?.length}{" "}
                </h6>
              </div>
            </Col>
            <Col className="flex center" xs={6} md={4}>
              <div className="flex flex-column center">
                <img
                  src={height}
                  style={{ height: "30px" }}
                  className="mb-16"
                  alt=""
                />
                <h6 className="bold-600 font-helper basic-texts">Height</h6>
                <h6 className="bold-600 mb-32 basic-texts">
                  {props?.shipData[0]?.shipInfo?.height}
                </h6>
              </div>
            </Col>
            <Col className="flex center" xs={6} md={4}>
              <div className="flex flex-column center">
                <img
                  src={guest}
                  style={{ height: "30px" }}
                  className="mb-16"
                  alt=""
                />
                <h6 className="bold-600 font-helper basic-texts">
                  Guest Cabins
                </h6>
                <h6 className="bold-600 mb-32 basic-texts">
                  {props?.shipData[0]?.shipInfo?.guestCabins}
                </h6>
              </div>
            </Col>
            <Col className="flex center" xs={6} md={4}>
              <div className="flex flex-column center">
                <img
                  src={deck}
                  style={{ height: "30px" }}
                  className="mb-16"
                  alt=""
                />

                <h6 className="bold-600 font-helper basic-texts">
                  Number of Decks
                </h6>
                <h6 className="bold-600 mb-32 basic-texts">
                  {props?.shipData[0]?.shipInfo?.numberofDecks}
                </h6>
              </div>
            </Col>
            <Col className="flex center" xs={6} md={4}>
              <div className="flex flex-column center">
                <img
                  src={crew}
                  style={{ height: "30px" }}
                  className="mb-16"
                  alt=""
                />

                <h6 className="bold-600 font-helper basic-texts">Crew</h6>
                <h6 className="bold-600 mb-32 basic-texts">
                  {props?.shipData[0]?.shipInfo?.crew}
                </h6>
              </div>
            </Col>
          </Row>
          <div className="flex center">
            {props?.shipData[0]?.pdfurl ? (
              <Button
                type="primary"
                shape="round"
                size="large"
                htmlType="submit"
                className="card-button btn-small basic-texts"
                onClick={() => {
                  window.open(`${props?.shipData[0]?.pdfurl}`, "_blank");
                }}
              >
                Deck Plans
                <GoArrowRight
                  className="ml-3 basic-texts"
                  style={{ marginBottom: "2px" }}
                />
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ShipInfo;
