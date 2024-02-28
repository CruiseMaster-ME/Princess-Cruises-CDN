import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "antd";
import {
  DestinationList,
  destinationSlides,
} from "../../DataStore/destinations";
import { FaDollarSign, FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FcCalendar } from "react-icons/fc";
import { BiCreditCard } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { HiArrowLongRight } from "react-icons/hi2";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { Link } from "react-router-dom";

function AllDestinations() {

  const AllDestinationsScript = `
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "All Destinations",
    "description": "Explore our cruise destinations with a variety of travel experiences.",
    "itemListElement": [
      ${DestinationList.map((destination, index) => {
        return `
          {
            "@type": "ListItem",
            "position": ${index + 1},
            "item": {
              "@type": "TouristDestination",
              "name": "${destination.to}",
              "url": "${destination.moreInfo}",
              "touristType": "leisure",
              "offers": {
                "@type": "Offer",
                "price": "${destination.price}",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
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
    <div className="destinations">
      <Helmet>
        <title>Princess Cruises - Cruise Destinations</title>
        <meta
          name="description"
          content="Explore your favourite destinations with Princess cruises"
        />
        <link
          rel="canonical"
          href="https://www.princesscruises-me.com/all-destinations"
        />
        <script type="application/ld+json">{AllDestinationsScript}</script>
        <meta property="og:title" content="Princess Cruises Destinations" />
        <meta
          property="og:image"
          content="https://www.princesscruises-me.com/destination.jpg"
        />
        <meta
          property="og:description"
          content="Explore your favourite destinations with Princess Cruises. Book your cruise with our experienced sales and booking agents in Dubai, UAE."
        />
        <meta
          property="og:url"
          content="https://www.princesscruises-me.com/all-destinations"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="breadcrumb-div">
        <div className="full-height flex center">
          <h1 className="font-faded-black basic-texts bold-500">
            <Link to="/" className="black-link">
              Home
            </Link>{" "}
            &nbsp;<TfiLayoutLineSolid/>&nbsp; Destinations
          </h1>
        </div>
      </div>
      <div className="custom-carousel-container mt-32">
        <Slider {...settings}>
          {destinationSlides?.map((item: any, index: number) => (
            <div key={index}>
              <div
                className="overlay-container-destinations pointer"
                style={{ height: "60vh" }}
                onClick={() => {
                  window.open(`${item?.moreInfo}`, "_self");
                }}
              >
                <img
                  src={item?.imagepath}
                  alt={item?.name + " destination slide"}
                  className="image-slide"
                />
                <div className="overlay-content-destinations flex start-center p-24 flex-column">
                  <h3 className="font-white large-heading font-bold ">
                    {item?.name}
                    <div className="destinations-custom-divider" />
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
                Discover Your Perfect Getaway
              </h2>
            </Fade>
            <p className="mt-32 justified description-text">
              Explore the world with Princess Cruises and discover the allure of
              the globe's marquee ports and hidden gems. With meticulously
              designed itineraries to some of the most sought-after
              destinations, there's no better way to check off your travel
              bucket list than with Princess Cruises – the cruise line acclaimed
              as "Best Cruise Itineraries" 12 times by Recommend Magazine.
              Princess Cruises sets sail to over 380 destinations across more
              than 100 countries on 7 continents, offering a selection of over
              170 unique itineraries, ranging from short one-day escapes to
              extended 111-day adventures. Whether you dream of a Mediterranean
              Cruise, North Europe Cruise, Greek Isles Cruise, Alaska Cruise,
              Asia Cruise, Caribbean Cruise, South America Cruise, Australia
              Cruise, New Zealand Cruise, or Japan Cruise, Princess Cruises has
              the perfect voyage to make your dreams come true.
            </p>
          </div>
          <Row>
            {DestinationList?.map((item: any, key: number) => {
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
                        <h3 className="ship-name  bold-600 font-white description-text">
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
    </div>
  );
}

export default AllDestinations;
