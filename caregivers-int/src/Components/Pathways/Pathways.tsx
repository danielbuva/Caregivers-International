import { Routes, Route } from "react-router-dom";
import GetStarted from "../GetStarted/GetSarted";
import Services from "../../Pages/Services";
import About from "../../Pages/About";
import ContactUs from "../../Pages/ContactUs";

const Pathways = () => {
  return (
    <>
      <Routes>
        <Route path="GetStarted" element={<GetStarted />}></Route>
        <Route path="Services" element={<Services />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="ContactUs" element={<ContactUs />}></Route>
      </Routes>
    </>
  );
};

export default Pathways;
