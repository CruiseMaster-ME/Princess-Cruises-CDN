import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import { ShipList } from "../../DataStore/ships";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";
import Slider from "react-slick";

function Ships() {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="ship column-padding">
      <Container fluid>
        <div className="mb-32 flex center">
          <Fade duration={2000} triggerOnce>
            <h2 className="bold-700 heading">
              Our Ships
            </h2>
          </Fade>
        </div>
        <Row>
          <Col className="mb-32">
            <Slider {...settings}>
              {ShipList?.map((item: any, key: number) => {
                return (
                  <div className="sliding-card pointer" key={key}>
                    <div
                      style={{
                        backgroundImage: `linear-gradient( to bottom , rgba(0, 0, 0,0) , rgba(0, 0, 0, 0.7)),url(${item?.imagepath})`,
                        backgroundSize: "cover",
                        height: "100%",
                        marginRight: 12,
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
                );
              })}
            </Slider>
          </Col>
        </Row>
        <div className="flex center flex-column">
          <Slide direction="right" triggerOnce>
            <h5
              className="basic-texts font-primary bold-600 pointer"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 100);
                navigate("/all-ships");
              }}
            >
              More Ships
              <GoArrowRight className="ml-3 basic-texts" />
            </h5>
          </Slide>
        </div>
      </Container>
    </div>
  );
}

export default Ships;
