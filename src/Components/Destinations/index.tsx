import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import {
  DestinationList,
  destinationNarrow,
} from "../../DataStore/destinations";
import { GoArrowRight } from "react-icons/go";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { FaDollarSign } from "react-icons/fa";
import { BiCreditCard } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { BsArrowUpRightCircle } from "react-icons/bs";
function Destinations() {
  const navigate = useNavigate();

  return (
    <>
    <div className="destinations-component column-padding">
      <Container fluid>
        <div className="mb-32 flex center">
          <Fade duration={2000} triggerOnce>
            <h2 className="bold-700 heading">
              Popular Destinations
            </h2>
          </Fade>
        </div>
        <Row className="gx-0">
          {DestinationList?.slice(0, 3)?.map((item: any, key: number) => {
            return (
              <Col sm={12} md={6} lg={4} className="mb-32" key={key}>
                <div
                  className="sliding-card pointer"
                  onClick={() => {
                    window.open(`${item?.moreInfo}`, "_self");
                  }}
                >
                  <div
                    style={{
                      backgroundImage: `linear-gradient( to top , rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(${item?.imagepath})`,
                      backgroundSize: "cover",
                      height: "100%",
                      marginRight: 12,
                    }}
                  >
                    <div
                      style={{ height: "50%" }}
                      className="flex p-24 flex-column"
                    >
                      <h3 className="ship-name bold-600 font-white description-text">
                        {item?.to}
                      </h3>
                    </div>
                    <div
                      className="flex column-bottom-start flex-column p-24"
                      style={{
                        height: "50%",
                        marginRight: 12,
                      }}
                    >
                      <h3 className="font-white capitalize basic-texts bold-500">
                        <FcCalendar
                          style={{
                            marginBottom: "3px",
                            marginLeft: "-1px",
                            marginRight: "10px",
                          }}
                        />
                        {item?.daycount}
                      </h3>
                      <h3 className="font-white capitalize basic-texts bold-500">
                        <BiCreditCard
                          className="mr-8"
                          style={{ marginBottom: "2px" }}
                        />{" "}
                        FROM <FaDollarSign style={{ marginBottom: "2px" }} />
                        {item?.price}
                      </h3>
                      <h3 className="font-white basic-texts bold-500 mt-16">
                        Book Now <FaLongArrowAltRight className="mh-8" />
                      </h3>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      </div>
      <div className="destinations-component">
        <Container fluid>
          <Row>
            <Col lg={5} className="column-padding bg-grey">
              <div className="flex start-center flex-column full-height">
                <h3 className="description-text font-regular bold-600 font-faded-black mb-16">
                  DESTINATIONS
                </h3>
                <h2 className="heading font-medium bold-700 mb-16">
                  Explore the world
                </h2>
                <p className="description-text font-regular font-faded-black">
                  Princess® brings the world closer with voyages to over 330
                  cruise destinations across more than 100 countries, on all 7
                  continents. Explore tranquil beaches, visit historic temples,
                  glimpse incredible wildlife and more with award-winning ships
                  and shore excursions. We work with locals in each destination
                  to bring you experiences that are authentic, exciting and
                  enriching. Learn more about where we sail below and allow
                  yourself to be transformed by travel.
                </p>
                <p
                  className="basic-texts font-regular font-primary bold-600 pointer"
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo(0, 0);
                    }, 100);
                    navigate("/all-destinations");
                  }}
                >
                  More Destinations
                  <GoArrowRight className="ml-3 basic-texts font-regular" />
                </p>
              </div>
            </Col>
            <Col lg={7} className="no-padding bg-grey">
              <div className="destination-image-parent">
                {destinationNarrow?.slice(0, 4)?.map((item: any) => {
                  return (
                    <div
                      className="flex center pointer"
                      style={{
                        backgroundImage: `linear-gradient( to bottom , rgba(0, 0, 0,0) , rgba(0, 0, 0, 0.7)),url(${item?.imagepath})`,
                        objectPosition: "center center",
                        backgroundSize: "cover",
                        flexDirection: "column",
                      }}
                      onClick={() => {
                        window.open(`${item?.moreInfo}`, "_self");
                      }}
                    >
                      <BsArrowUpRightCircle className="ArrowIcon" />
                      <h2 className="destinationName heading font-medium" style={{wordBreak:"keep-all"}}>
                        {item?.name}
                      </h2>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Destinations;
