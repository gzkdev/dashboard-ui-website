import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainPageSection from './components/MainPageSection';

function App() {
  const [menu, setMenu] = useState('app-sidebar');
  return (
    <section className="app-container">
      <Sidebar toggleState={menu} toggleMenu={setMenu} ></Sidebar>
      <MainPageSection toggleState={menu} toggleMenu={setMenu} ></MainPageSection>
    </section>
  );
}

export default App;
