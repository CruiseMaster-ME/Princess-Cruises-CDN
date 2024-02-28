import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import { Button } from "antd";
import { Link, useParams } from "react-router-dom";
import { ShipList } from "../../DataStore/ships";
import ShipInfo from "./DetailsComponents/ShipInfo";
import { IoIosArrowDown } from "react-icons/io";
import ReactPlayer from "react-player";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";
import pcl from "../../assets/logos/pcl.gif";
import { TfiLayoutLineSolid } from "react-icons/tfi";

function ShipDetails() {
  const { urlName } = useParams();
  const [isVideoLoading, setVideoLoading] = useState(true);

  const shipData = ShipList?.filter((item: any) => {
    return item.urlName === urlName;
  });

  const scrollToNext = (n: number) => {
    window.scroll({
      top: n * window.innerHeight - 0.05 * window.innerHeight,
    });
  };

  return (
    <>
      <div
        className="ship-details flex flex-column"
        style={{
          backgroundImage: `linear-gradient( to top , rgba(0, 0, 0, 0.6) 0%,
          rgba(0, 0, 0, 0.5) 30%, 
          rgba(0, 0, 0, 0) 45%,
          rgba(0, 0, 0, 0.5) 55%,
          rgba(0, 0, 0, 0.5) 70%, 
          rgba(0, 0, 0, 0.5) 100%),url(${
            window.innerWidth <= 554
              ? shipData[0]?.imagepathSmall
              : shipData[0]?.imagepath
          })`,
          height: "100%",
          backgroundSize: window.innerWidth <= 554 ? "contain" : "cover",
        }}
      >
        <Helmet>
          <title>{`${shipData[0]?.name} - Princess Ship Information`}</title>
          <meta
            name="description"
            content={`Explore detailed information about ${shipData[0]?.name} cruise ship with Princess Cruises. Find deck plans, ship facts, and book your cruise adventure.`}
          />
          <link
            rel="canonical"
            href={`https://www.princesscruises-me.com/ship-details/${shipData[0]?.urlName}`}
          />
          <meta
            property="og:title"
            content={`${shipData[0]?.name} - Princess Ship Information`}
          />
          <meta
            property="og:image"
            content="https://www.princesscruises-me.com/ships.jpg"
          />
          <meta
            property="og:description"
            content={`Explore detailed information about ${shipData[0]?.name} cruise ship with Princess Cruises. Find deck plans, ship facts, and book your cruise adventure.`}
          />
          <meta
            property="og:url"
            content={`https://www.princesscruises-me.com/ship-details/${shipData[0]?.urlName}`}
          />
          <meta property="og:type" content="website" />
        </Helmet>
        <div
          className={
            window.innerWidth <= 554
              ? "flex flex-column intro-common-small"
              : "flex flex-column intro-common"
          }
        >
          <div className="breadcrumb-div">
            <div className="full-height flex center">
              <h2 className="font-white basic-texts bold-500">
                <Link to="/" className="white-link">
                  Home
                </Link>{" "}
                &nbsp;<TfiLayoutLineSolid/>&nbsp;
                <Link to="/all-ships" className="white-link">
                  Our Ships
                </Link>{" "}
                &nbsp;<TfiLayoutLineSolid/>&nbsp; {shipData[0]?.name}
              </h2>
            </div>
          </div>
          <div
            className="flex-grow-1 flex center-end flex-column full-height"
            style={window.innerWidth <= 554 ? { display: "none" } : {}}
          >
            <h2 className="font-white bold-500 description-text">
              Discover More
            </h2>
            <Button
              type="primary"
              shape="circle"
              icon={<IoIosArrowDown className="font-black mh-32" />}
              className="bg-white mb-32 mt-16"
              onClick={() => {
                scrollToNext(1);
              }}
            />
          </div>
        </div>
        <div className="bg-white">
          <ShipInfo shipData={shipData} />

          {shipData[0]?.videopath ? (
            <div className="column-padding">
              <Container fluid>
                <Row>
                  <div className="flex center flex-column">
                    <Fade duration={2000} triggerOnce>
                      <h1 className="bold-700 heading mb-42 text-align-center">
                        About {shipData[0]?.name}
                      </h1>
                    </Fade>
                  </div>
                  <Col md={12} lg={6} className="mb-32 flex center">
                    {isVideoLoading ? (
                      <img
                        src={pcl}
                        alt={`${shipData[0]?.name} Video Loading`}
                        height={70}
                        width={"auto"}
                      />
                    ) : null}
                    <ReactPlayer
                      muted
                      url={shipData[0]?.videopath}
                      controls={true}
                      width={"100%"}
                      height={"400px"}
                      config={{
                        youtube: {
                          playerVars: { modestbranding: 1, rel: 0 },
                        },
                      }}
                      playsinline
                      onReady={() => setVideoLoading(false)}
                      style={isVideoLoading ? { display: "none" } : {}}
                    />
                  </Col>
                  <Col md={12} lg={6} className="flex center mb-32 ph-24">
                    <p className="bold-400 description-text font-faded-black">
                      {shipData[0]?.details}
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          ) : null}

          <div className="booking column-padding bg-grey">
            <div className="booking-card">
              <div className="flex center flex-column">
                <Fade duration={2000} triggerOnce>
                  <h2 className="bold-700 heading mb-8 text-align-center">
                    Make it an incredible journey
                  </h2>
                </Fade>
              </div>
              <div className="flex center">
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  className="card-button basic-texts btn-wide"
                  onClick={() =>
                    window.open(`${shipData[0]?.moreInfo}`, "_self")
                  }
                  rel="noopener noreferrer"
                  aria-label="Book Now Button"
                >
                  More About {shipData[0]?.name}
                  <GoArrowRight
                    className="ml-3 basic-texts"
                    style={{ marginBottom: "2px" }}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShipDetails;
