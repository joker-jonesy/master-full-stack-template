import { Outlet } from "react-router-dom";
import {useSelector} from "react-redux";
import Footer from "./components/footer/Footer";
import React from "react";

function App() {

    const theme = useSelector(state=>state.colorMode)
  return (
    <div id="App" className={theme}>
        <Outlet/>
        <Footer/>
    </div>
  );
}

export default App;
