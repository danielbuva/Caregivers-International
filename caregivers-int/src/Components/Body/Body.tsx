import "./Body.css";
import Pathways from "../Pathways/Pathways";
import GetStarted from "../GetStarted/GetSarted";
import OurServices from "../OurServices/OurServices";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import Intro from "../Intro/Intro";

const Body = ({ menu }: { menu: Boolean }) => {
  return (
    <>
      {!menu && <div className="body">
        <Intro/>
        <Pathways />
        <OurServices />
        <WhoWeAre/>
        <GetStarted />
      </div>}
    </>
  );
};

export default Body;
