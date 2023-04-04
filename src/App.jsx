import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
import JsonData from "./data/data.json";
import "./App.css";
import { Route, Routes  } from 'react-router-dom';
import {Features} from "./components/Features";


const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Routes>
      <Route exact path="" element={<Header data={landingPageData.Header}/>}/>
      <Route exact path="/" element={<Header data={landingPageData.Header}/>}/>
      <Route exact path="/Header" element={<Header data={landingPageData.Header}/>}/>
      <Route exact path="/header" element={<Header data={landingPageData.Header}/>}/>
      <Route exact path="/Features" element={<Features/>}/>
      </Routes>
    </div>
  );
};

export default App;
