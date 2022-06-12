import React from "react";
import "./OurServices.css";
import expert from "../../Assests/expert.png";
import expertlight from "../../Assests/expertlight.png";
import friend from "../../Assests/friend.png";
import friendlight from "../../Assests/friendlight.png";
import home from "../../Assests/home.png";
import homelight from "../../Assests/homelight.png";
import hospital from "../../Assests/hospital.png";
import hospitallight from "../../Assests/hospitallight.png";
import respite from "../../Assests/respite.png";
import respitelight from "../../Assests/respitelight.png";
import memory from "../../Assests/memory.png";
import memorylight from "../../Assests/memorylight.png";
import palliative from "../../Assests/palliative.png";
import palliativelight from "../../Assests/palliativelight.png";
import inclusive from "../../Assests/inclusive.png";
import inclusivelight from "../../Assests/inclusivelight.png";
import Carousel from "nuka-carousel";

const Card1 = () => {
  return (
    <div className="card">
      <img src={inclusive} alt="inclusive" className="card-pic"></img>
      <img
        src={inclusivelight}
        alt="inclusivelight"
        className="card-pic-light"
      ></img>
      <p className="card-title">All Inclusive</p>
      <p className="card-text">Personal Comprehensive Service</p>
    </div>
  );
};
const Card2 = () => {
  return (
    <div className="card">
      <img src={memory} alt="memory" className="card-pic"></img>
      <img src={memorylight} alt="memorylight" className="card-pic-light"></img>
      <p className="card-title">Memory Care</p>
      <p className="card-text">Specialized Staff and Support</p>
    </div>
  );
};
const Card3 = () => {
  return (
    <div className="card">
      <img src={friend} alt="friend" className="card-pic"></img>
      <img src={friendlight} alt="friendlight" className="card-pic-light"></img>
      <p className="card-title">Companion Care</p>
      <p className="card-text">Social Support</p>
    </div>
  );
};
const Card4 = () => {
  return (
    <div className="card">
      <img src={respite} alt="respite" className="card-pic"></img>
      <img
        src={respitelight}
        alt="respitelight"
        className="card-pic-light"
      ></img>
      <p className="card-title">Respite Care</p>
      <p className="card-text">Short Term Support</p>
    </div>
  );
};
const Card5 = () => {
  return (
    <div className="card">
      <img src={hospital} alt="hospital" className="card-pic"></img>
      <img
        src={hospitallight}
        alt="hospitallight"
        className="card-pic-light"
      ></img>
      <p className="card-title">Post Hospital Care</p>
      <p className="card-text">Safe Service and Support</p>
    </div>
  );
};
const Card6 = () => {
  return (
    <div className="card">
      <img src={home} alt="home" className="card-pic"></img>
      <img src={homelight} alt="homelight" className="card-pic-light"></img>
      <p className="card-title">In Home Care</p>
      <p className="card-text">Fulltime, Professional, Caregiving</p>
    </div>
  );
};
const Card7 = () => {
  return (
    <div className="card">
      <img src={palliative} alt="palliative" className="card-pic"></img>
      <img
        src={palliativelight}
        alt="palliativelight"
        className="card-pic-light"
      ></img>
      <p className="card-title">Palliative Care</p>
      <p className="card-text">Calm, Comfort, Compassion</p>
    </div>
  );
};
const Card8 = () => {
  return (
    <div className="card">
      <img src={expert} alt="expert" className="card-pic"></img>
      <img src={expertlight} alt="expertlight" className="card-pic-light"></img>
      <p className="card-title">Not Sure</p>
      <p className="card-text">Free Expert Consulting</p>
    </div>
  );
};
const Carousele = () => {
  const cards = [
    {
      image: inclusive,
      title: "All Inclusive",
      text: "Personal Comprehensive Service",
    },
    {
      image: memory,
      title: "Memory Care",
      text: "Specialized Staff and Support",
    },
    { image: friend, title: "Companion Care", text: "Social Support" },
    { image: respite, title: "Respite Care", text: "Short Term Support" },
    {
      image: hospital,
      title: "Post Hospital Care",
      text: "Safe Service and Support",
    },
    {
      image: memory,
      title: "In Home Care",
      text: "Fulltime, Professional, Caregiving",
    },
    {
      image: palliative,
      title: "Palliative Care",
      text: "Calm, Comfort, Compassion",
    },
    { image: expert, title: "Not Sure", text: "Free Expert Consulting" },
  ];
  return (
    <>
      {(window.innerWidth < 1356) && <Carousel
        cellAlign="center"
        defaultControlsConfig={{
          prevButtonStyle: { display: "none" },
          nextButtonStyle: { display: "none" },
          pagingDotsStyle: { transform: "translate(0px,36px)" },
        }}
        cellSpacing={25}
        slidesToShow={3}
        style={{ width: "1000px"}}
        className="carousel"
        zoomScale={1}
        easing={'slow-in, slow-out'}
        edgeEasing={'slow-in, slow-out'}
        dragThreshold={0}
      >
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
        <Card7 />
        <Card8 />
      </Carousel>}
    </>
  );
};
const Row_one = () => {
  return (
    <div className="row">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
};
const Row_two = () => {
  return (
    <div className="row">
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
    </div>
  );
};
const OurServices = () => {
  return (
    <>
      <div className="service-container">
        <p className="our-services-text">Our Services</p>
        <Row_one />
        <Row_two />
        <Carousele />
      </div>
    </>
  );
};
export default OurServices;
