import "./Intro.css";
import personleadingperson from "../../Assests/personleadingperson.jpg";
import personshowingperson from "../../Assests/personshowingperson.jpg";
import womensitting from "../../Assests/womensitting.jpg";
import woman from "../../Assests/woman.jpg";
import Carousel from "nuka-carousel";

const Intro = () => {
  return (
    <div className="intro">
      <p className="intro-title">Family Driven Caregiving Company</p>
      <p className="intro-caption">
        We deliver tailor-made caregiving services for communities worldwide.
      </p>
      <Carousel
        cellAlign="center"
        defaultControlsConfig={{
          prevButtonStyle: { display: "none" },
          nextButtonStyle: { display: "none" },
          pagingDotsStyle: { display: "none" },
        }}
        cellSpacing={1148}
        slidesToShow={3}
        style={{ width: "100vw", height: "97vh" }}
        className="intro-carousel"
        dragging={false}
        swiping={false}
        autoplay={true}
        wrapAround={true}
      >
        <img src={woman} alt="woman" className="intro-image" />
        <img src={womensitting} alt="womensitting" className="intro-image" />
        <img
          src={personleadingperson}
          alt="personleadingperson"
          className="intro-image"
        />
        <img
          src={personshowingperson}
          alt="personshowingperson"
          className="intro-image"
        />
      </Carousel>
    </div>
  );
};

export default Intro;
