import { Button } from "antd";
import "./styles.scss";
import { GoArrowRight } from "react-icons/go";
import { Fade } from "react-awesome-reveal";

function BookNow(props: any) {
  return (
    <div className="column-padding">
        <div className="flex center flex-column">
          <Fade duration={2000} triggerOnce>
            <h2 className="bold-700 heading text-align-center">
              Make it an incredible journey
            </h2>
          </Fade>
        </div>
        <div className="flex center">
          <Button
            type="primary"
            shape="round"
            size="large"
            className="card-button btn-small basic-texts"
            onClick={() =>
              window.open(
                "https://book.princesscruises-me.com/swift/cruise?destinations=&durations=&departureports=",
                "_self"
              )
            }
            rel="noopener noreferrer"
            aria-label="Book Now Button"
          >
            Book Now
            <GoArrowRight
              className="ml-3 basic-texts"
              style={{ marginBottom: "2px" }}
            />
          </Button>
        </div>
    </div>
  );
}

export default BookNow;
