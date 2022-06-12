import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";

function App() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <div className="App">
      <Header menu={menu} setMenu={setMenu} />
      {!menu && <><Body menu={menu}/>
      <Footer menu={menu} /></>}
    </div>
  );
}

export default App;
