import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { ShipList } from "../../DataStore/ships";
import { FaLongArrowAltRight } from "react-icons/fa";
import "react-awesome-slider/dist/styles.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { HiArrowLongRight } from "react-icons/hi2";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import Slider, { Settings } from "react-slick";
import { TfiLayoutLineSolid } from "react-icons/tfi";

function AllShips() {
  const navigate = useNavigate();

  const AllShipsScript = `
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "All Ships",
    "description": "Explore our fleet of ships with a variety of cruise experiences.",
    "itemListElement": [
      ${ShipList.map((ship, index) => {
        return `
          {
            "@type": "ListItem",
            "position": ${index + 1},
            "item": {
              "@type": "Ship",
              "name": "${ship.name}",
              "url": "https://www.princesscruises-me.com/ship-details/${
                ship.urlName
              }"
            }
          }
        `;
      }).join(",\n")}
    ]
  }
`;

  // Custom Previous Button component
  const CustomPrevButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <Button
      type="primary"
      shape="circle"
      icon={<IoIosArrowBack className="font-black mh-32" />}
      className="custom-prev-button"
      onClick={onClick}
    />
  );

  // Custom Next Button component
  const CustomNextButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <Button
      type="primary"
      shape="circle"
      icon={<IoIosArrowForward className="font-black mh-32" />}
      className="custom-next-button"
      onClick={onClick}
    />
  );

  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevButton onClick={() => {}} />,
    nextArrow: <CustomNextButton onClick={() => {}} />,
    centerMode: true,
    centerPadding: "5%",
    autoplay: true,
  };

  return (
    <div className="all-ships">
      <Helmet>
        <title>Princess Cruises - Learn About Our Cruise Ships</title>
        <meta
          name="description"
          content="Explore the impressive fleet of Princess Cruises. Learn about the Grand Princess and our other 17 ships with detailed ship facts, deck plans, and more."
        />
        <link
          rel="canonical"
          href="https://www.princesscruises-me.com/all-ships"
        />
        <script type="application/ld+json">{AllShipsScript}</script>
        <meta property="og:title" content="Princess Cruises Ships" />
        <meta
          property="og:image"
          content="https://www.princesscruises-me.com/ships.jpg"
        />
        <meta
          property="og:description"
          content="Explore the impressive fleet of Princess Cruises. Learn about the Grand Princess and our other 17 ships with detailed ship facts, deck plans, and more."
        />
        <meta
          property="og:url"
          content="https://www.princesscruises-me.com/all-ships"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="breadcrumb-div">
        <div className="full-height flex center">
          <h1 className="font-faded-black basic-texts bold-500">
            <Link to="/" className="black-link">
              Home
            </Link>{" "}
            &nbsp;<TfiLayoutLineSolid/>&nbsp; Our Ships
          </h1>
        </div>
      </div>
      <div className="custom-carousel-container mt-32">
        <Slider {...settings}>
          {ShipList?.map((item: any, index: number) => (
            <div key={index}>
              <div
                className="overlay-container-ships pointer"
                style={{ height: "60vh" }}
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                  }, 100);
                  navigate(`/ship-details/${item?.urlName}`);
                }}
              >
                <img
                  src={item?.imagepath}
                  alt={item?.name + " destination slide"}
                  className="image-slide"
                />
                <div className="overlay-content-ships flex start-center p-24 flex-column">
                  <h3 className="font-white large-heading font-bold ">
                    {item?.name}
                    <div className="ships-custom-divider" />
                  </h3>
                  <h5 className="font-white description-text font-regular mt-16">
                    More About {item?.name}{" "}
                    <HiArrowLongRight style={{ fontSize: "32px" }} />
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="bg-white column-padding">
        <Container fluid>
          <div className="flex center flex-column mb-32">
            <Fade duration={2000} triggerOnce>
              {" "}
              <h2 className="bold-700 heading mb-8 text-align-center">
                Our Ships
              </h2>
            </Fade>
            <p
              className="mt-32 justified description-text"
              style={window.innerWidth <= 554 ? { marginBottom: "32px" } : {}}
            >
              Every Princess ship is a destination in itself with wide-ranging
              amenities, elevated culinary experiences and delightful
              activities. Below you'll find the deck plans, stateroom details,
              ship dining information and more for every vessel in our fleet.
              Visit the links, and get to know what we offer and what makes the
              Princess experience unique.
            </p>
          </div>
          <Row>
            {ShipList?.map((item: any) => {
              return (
                <Col sm={12} md={6} lg={4} className="mb-32">
                  <div className="ship-card">
                    <div
                      style={{
                        backgroundImage: `linear-gradient( to bottom , rgba(0, 0, 0,0) , rgba(0, 0, 0, 0.7)),url(${item?.imagepath})`,
                        backgroundSize: "cover",
                        height: "100%",
                      }}
                      onClick={() => {
                        setTimeout(() => {
                          window.scrollTo(0, 0);
                        }, 100);
                        navigate(`/ship-details/${item?.urlName}`);
                      }}
                    >
                      <div className="flex column-bottom-start full-height p-24 flex-column">
                        <h3 className="ship-name bold-600 font-white description-text">
                          {item?.name}
                          <div
                            className="ships-custom-divider mb-16"
                            style={{ marginTop: "8px" }}
                          />
                        </h3>

                        <h3 className="font-white basic-texts bold-500">
                          Learn More <FaLongArrowAltRight className="mh-8" />
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
    </div>
  );
}

export default AllShips;
