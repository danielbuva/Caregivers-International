import expert from "../Assests/expert.png";
import expertlight from "../Assests/expertlight.png";
import friend from "../Assests/friend.png";
import friendlight from "../Assests/friendlight.png";
import home from "../Assests/home.png";
import homelight from "../Assests/homelight.png";
import hospital from "../Assests/hospital.png";
import hospitallight from "../Assests/hospitallight.png";
import respite from "../Assests/respite.png";
import respitelight from "../Assests/respitelight.png";
import memory from "../Assests/memory.png";
import memorylight from "../Assests/memorylight.png";
import palliative from "../Assests/palliative.png";
import palliativelight from "../Assests/palliativelight.png";
import inclusive from "../Assests/inclusive.png";
import inclusivelight from "../Assests/inclusivelight.png";
const Cell1 = () => {return(<div className="cell">
<img src={inclusive} alt="inclusive" className="cell-pic"></img>
<img
  src={inclusivelight}
  alt="inclusivelight"
  className="cell-pic-light"
></img>
<p className="cell-title">All Inclusive</p>
<p className="cell-text">Personal Comprehensive Service</p>
</div>)};
const Cell2 = () => {return(<div className="cell">
<img src={memory} alt="memory" className="cell-pic"></img>
<img
  src={memorylight}
  alt="memorylight"
  className="cell-pic-light"
></img>
<p className="cell-title">Memory Care</p>
<p className="cell-text">Specialized Staff and Support</p>
</div>)};
const Cell3 = () => {return(<div className="cell">
<img src={friend} alt="friend" className="cell-pic"></img>
<img
  src={friendlight}
  alt="friendlight"
  className="cell-pic-light"
></img>
<p className="cell-title">Companion Care</p>
<p className="cell-text">Social Support</p>
</div>)};
const Cell4 = () => {return(<div className="cell">
<img src={respite} alt="respite" className="cell-pic"></img>
<img
  src={respitelight}
  alt="respitelight"
  className="cell-pic-light"
></img>
<p className="cell-title">Respite Care</p>
<p className="cell-text">Short Term Support</p>
</div>)};
const Cell5 = () => {return(<div className="cell">
<img src={hospital} alt="hospital" className="cell-pic"></img>
<img
  src={hospitallight}
  alt="hospitallight"
  className="cell-pic-light"
></img>
<p className="cell-title">Post Hospital Care</p>
<p className="cell-text">Safe Service and Support</p>
</div>)};
const Cell6 = () => {return(<div className="cell">
<img src={home} alt="home" className="cell-pic"></img>
<img src={homelight} alt="homelight" className="cell-pic-light"></img>
<p className="cell-title">In Home Care</p>
<p className="cell-text">Fulltime, Professional, Caregiving</p>
</div>)};
const Cell7 = () => {return(<div className="cell">
<img src={palliative} alt="palliative" className="cell-pic"></img>
<img
  src={palliativelight}
  alt="palliativelight"
  className="cell-pic-light"
></img>
<p className="cell-title">Palliative Care</p>
<p className="cell-text">Calm, Comfort, Compassion</p>
</div>)};
const Cell8 = () => {return(<div className="cell">
        <img src={expert} alt="expert" className="cell-pic"></img>
        <img
          src={expertlight}
          alt="expertlight"
          className="cell-pic-light"
        ></img>
        <p className="cell-title">Not Sure</p>
        <p className="cell-text">Free Expert Consulting</p>
      </div>)};
const ServiceCards = () => {};
export default ServiceCards;
