import React, { useState } from "react";
import "./Header.css";
import { NavLink as Nav } from "react-router-dom";
import logo from "../../Assests/logo.png";
import biglogo from "../../Assests/biglogo.png";

const Company = () => {

  return (
    <Nav to="/" className="company">
      <div className="title">
        <p className="caregivers">CAREGIVERS</p>
        <p className="international">INTERNATIONAL, Inc.</p>
      </div>
      <img src={biglogo} alt="Big-Logo" className="title-logo"></img>
    </Nav>
  );
};
const Navigation = () => {
  return (
    <div className="navigation">
      <Nav to="GetStarted" className="nav-styles">
        GET STARTED
      </Nav>
      <Nav to="Services" className="nav-styles">
        SERVICES
      </Nav>
      <Nav to="About" className="nav-styles">
        ABOUT
      </Nav>
      <Nav to="ContactUs" className="nav-styles">
        CONTACT US
      </Nav>
    </div>
  );
};
const SideNav = ({
  menu,
  setMenu,
}: {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menu: boolean;
}) => {
//   const ScrollDemo = () => {
//     const myRef = useRef(null)
 
//     const executeScroll = () => myRef.current.scrollIntoView()    
//     // run this function from an event handler or an effect to execute scroll 
//     ref={myRef}
//           <button onClick={executeScroll}> Click to scroll </button> 
//  }
 
  return (
    <>
      <div className="hamburger" onClick={() => setMenu(!menu)}>
        {menu ? "" : "☰"}
      </div>
      {menu && (
        <div className="side-nav">
          <p onClick={() => setMenu(false)} className="x-button">
            ╳
          </p>
          <p

            className="side-nav-styles"
            onClick={() => setMenu(false)}
          >
            GET STARTED
          </p>
          <p
            // to="Services"
            className="side-nav-styles"
            onClick={() => setMenu(false)}
          >
            SERVICES
          </p>
          <p
            // to="About"
            className="side-nav-styles"
            onClick={() => setMenu(false)}
          >
            ABOUT
          </p>
          <p
            className="side-nav-styles"
            onClick={() => setMenu(false)}
          >
            CONTACT US
          </p>
            <img src={logo} alt="Logo" className="side-nav-logo"></img>
        <p className="side-nav-styles">hi</p>
        </div>
      )}
    </>
  );
};
const Header = ({
  menu,
  setMenu,
}: {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menu: boolean;
}) => {
  const [name, setName] = useState<string>('');

  const addShadow = () => {
    if (window.scrollY >= 1180) {
      setName('header-shadowed');
    } else {
      setName('header');
    }
  };
  window.addEventListener("scroll", addShadow);


  return (
    <>
      <div className="global-header">
        <header className={name}>
          <Company />
          <Navigation />
          <SideNav menu={menu} setMenu={setMenu} />
        </header>
      </div>
    </>
  );
};
export default Header;
