import React from "react";
import data2main from "./components/data2";
import datamain from "./components/data";
import Navbar from './components/Navbar';
import Home from'./components/Home';
import About from'./components/About';
import Gallery from "./components/Gallery";
import Service from "./components/Service";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="gallery" element={<Gallery heading={datamain.heading} title={datamain.title} data={datamain.data} />} />
      <Route path="services" element={<Service heading={data2main.heading} title={data2main.title} data={data2main.data} desc={data2main.data} />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="footer" element={<Footer />} />
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

