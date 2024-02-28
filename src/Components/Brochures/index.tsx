import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
import { BrochureList } from "../../DataStore/brochures";
import { Fade } from "react-awesome-reveal";

function Brochures() {
  return (
    <div className="brochures bg-grey column-padding">
      <Container fluid>
        <div className="flex center flex-column mb-32 ">
          <Fade duration={2000} triggerOnce>
            <h2 className="bold-700 heading">
              Brochures
            </h2>
          </Fade>
        </div>
        <Row>
          {BrochureList?.map((item: any,key:number) => {
            return (
              <Col sm={12} md={6} lg={4} className="flex center" key={key}>
                <div
                  style={{
                    backgroundImage: `linear-gradient( to bottom , rgba(0, 0, 0,0) , rgba(0, 0, 0, 0.4)),url(${item?.imagepath})`,
                    backgroundSize: "cover",
                  }}
                  className="brochure-container pointer"
                  onClick={() => {
                    window.open(item?.url, "_blank");
                  }}
                />
              </Col>  
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Brochures;
