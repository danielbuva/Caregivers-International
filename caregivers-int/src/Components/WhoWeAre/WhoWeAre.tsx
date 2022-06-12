import "./WhoWeAre.css";
import { Button } from "@chakra-ui/react";
import heartshake from "../../Assests/heartshake.png";
import expert from "../../Assests/expert.png";
import car from "../../Assests/car.png";
import training from "../../Assests/training.png";
import calendar from "../../Assests/calendar.png";
import screening from "../../Assests/screening.png";

const Row1 = () => {
  return (
    <>
      <div className="c-row">
        <div className="cell">
          <img src={screening} alt="screening" className="cell-pic"></img>
          <div className="cell-description">
            <p className="cell-title">Screening</p>
            <p className="cell-caption">Rigorous hiring process</p>
          </div>
        </div>
        <div className="cell">
          <img src={training} alt="training" className="cell-pic"></img>
          <div className="cell-description">
            <p className="cell-title">Training</p>
            <p className="cell-caption">
              Continued training, learning, and managment systems
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const Row2 = () => {
  return (
    <>
      <div className="c-row">
        <div className="cell">
          <img src={expert} alt="expert" className="cell-pic"></img>
          <div className="cell-description">
            <p className="cell-title">Experts</p>
            <p className="cell-caption">Skilled and knowledgable caregivers</p>
          </div>
        </div>
        <div className="cell">
          <img src={car} alt="car" className="cell-pic"></img>
          <div className="cell-description">
            <p className="cell-title">Travel</p>
            <p className="cell-caption">
              We will come work to you without worry
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const Row3 = () => {
  return (
    <>
      <div className="c-row">
        <div className="cell">
          <img src={calendar} alt="calendar" className="cell-pic"></img>
          <div className="cell-description">
            <p className="cell-title">Consistency</p>
            <p className="cell-caption">
              Routine care for you and your loved ones
            </p>
          </div>
        </div>
        <div className="cell">
          <img src={heartshake} alt="heartshake" className="cell-pic"></img>
          <div className="cell-description">
            <p className="cell-title">24/7</p>
            <p className="cell-caption">Always there for you</p>
          </div>
        </div>
      </div>
    </>
  );
};
const Conclusion = () => {
  return (
    <div className="conclusion">
      <p className="our-company">Our Company</p>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};
const Premise = () => {
  return (
    <div className="who-premise">
      <p className="who-we-are">Who We Are</p>
      <p className="description">
        We believe in the power of community. We thrive on building
        relationships and helping good people and organizations succeed through
        a collaborative process.
      </p>
      <Button className="know-us-button">Get To Know Us More</Button>
    </div>
  );
};
const WhoWeAre = () => {
  return (
    <>
      <div className="about-container">
        <Premise />
        <Conclusion />
      </div>
    </>
  );
};
export default WhoWeAre;
