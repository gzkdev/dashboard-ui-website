import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainPageSection from './components/MainPageSection';

function App() {
  const [menu, setMenu] = useState('app-sidebar');

  function toggleMenu() {
    if (menu === "app-sidebar") {
      setMenu(() => "app-sidebar active");
    }
    setMenu(() => "app-sidebar");
  }
  return (
    <section className="app-container">
      <Sidebar toggleState={menu} ></Sidebar>
      <MainPageSection></MainPageSection>
    </section>
  );
}

export default App;
