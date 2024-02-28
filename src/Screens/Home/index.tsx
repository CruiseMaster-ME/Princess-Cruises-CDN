import "./styles.scss";
import { Button } from "antd";
import Destinations from "../../Components/Destinations";
import Ships from "../../Components/Ships";
import Brochures from "../../Components/Brochures";
import Registraion from "../../Components/Registration";
import BookNow from "../../Components/BookNow";
import { Helmet } from "react-helmet";
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

function Home() {
  const scrollToNext = (n: number) => {
    window.scroll({
      top: n * window.innerHeight - 0.05 * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="home">
        <Helmet>
          <title>Princess Cruises Middle East</title>
          <meta
            name="description"
            content="
            Explore the best cruise destinations with Princess Cruises, Supported by our Middle East agent/agency based in Dubai,UAE"
          />
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Princess Cruises",
              "description": "Discover amazing cruise experiences with Princess Cruises."
            }
          `}
          </script>
          <link rel="canonical" href="https://www.princesscruises-me.com/" />
          <meta property="og:title" content="Princess Cruises Middle East" />
          <meta
            property="og:image"
            content="https://www.princesscruises-me.com/favicon.png"
          />
          <meta
            property="og:description"
            content="Explore the best cruise destinations with Princess Cruises, Supported by our Middle East agent/agency based in Dubai,UAE"
          />
          <meta
            property="og:url"
            content="https://www.princesscruises-me.com/"
          />
          <meta property="og:type" content="website" />
        </Helmet>
        <div className={"main"}>
          <video
            src="https://firebasestorage.googleapis.com/v0/b/cruisemaster-1872a.appspot.com/o/intro_video.mp4?alt=media&token=8283782d-a3d0-4cec-bc21-4b9c03192833"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className={"content"}>
            <div
              className="full-height flex flex-column center-end full-width"
            >
              <Button
                type="default"
                shape="round"
                className="card-button btn-large basic-texts card-button-default mh-8"
                onClick={() => {
                  window.open(
                    "https://book.princesscruises-me.com/swift/cruise",
                    "_self"
                  );
                }}
              >
                Plan Your Cruise
                <GoArrowRight className="search-icon" />
              </Button>
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
        </div>
      </div>
      <div className="bg-white">
        <Destinations />
        <Ships />
        <Brochures />
        <BookNow />
        <Registraion />
      </div>
    </>
  );
}

export default Home;
