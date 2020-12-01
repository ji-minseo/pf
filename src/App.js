import React from 'react';
import Axios from "axios";
import Row from './Row';
import "./Style.css"
import "./Fonts.css"

function App () {
  return (<div className ="container">
      
      <section className ="mg-big">
      <h1 className="fs-h1 fw-bold">Style Guide &amp; Components</h1>

        <h2 className ="fs-h2 fw-bold"><span className="text-primary">CSS Files</span> for<select class ="selected fs-h2 fw-bold"><option selected>Remain</option><option>This Site</option></select>Style Guide &amp; Components</h2>
        
      
      </section>
      <section className="mg-small">
        <ul>

          <li className="ff-karla fs-p text-primary fw-light" >Fonts</li>
          <li className="ff-karla fs-p text-grey fw-light">Colors</li>
          <li className="ff-karla fs-p text-grey fw-light">Margins</li>

          <li className="ff-karla fs-p text-grey fw-light">Components</li>


        </ul>

      </section>
      <section className="mg-big">
        <h2 className="fs-h2 fw-bold mg-tiny">Fonts</h2>
        <h3 className="fs-h3 fw-bold mg-tiny">Font Size</h3>
        <Row title ="h1" contents ="Style Guidline" classname ="fs-h1 fw-light" />
        <Row title ="h2" contents ="Style Guidline" classname ="fs-h2 fw-light" />
        <Row title ="h3" contents ="Style Guidline" classname ="fs-h3 fw-light" />
        <Row title ="large" contents ="Style Guidline" classname ="fs-large fw-light" />
        <Row title ="medium" contents ="Style Guidline" classname ="fs-medium fw-light" />
        <Row title ="base" contents ="Style Guidline" classname ="fs-base fw-light" />
        <Row title ="p" contents ="Style Guidline" classname ="fs-p fw-light" />
        <Row title ="tiny" contents ="Style Guidline" classname ="fs-tiny fw-light" />
        <div className="mg-big"></div>
        <h3 className="fs-h3 fw-bold mg-tiny">Font Weight</h3>
        <Row title ="light" contents ="Style Guidline" classname ="fs-h3 fw-light" />
        <Row title ="reguler" contents ="Style Guidline" classname ="fs-h3 fw-reguler" />
        <Row title ="medium" contents ="Style Guidline" classname ="fs-h3 fw-medium" />
        <Row title ="bold" contents ="Style Guidline" classname ="fs-h3 fw-bold" />








      </section>

      <button className="bt-blue">CSS Download</button>
      
      
      </div>);
}

export default App;
