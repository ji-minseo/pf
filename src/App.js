import React from 'react';
import Axios from "axios";
import { HashRouter, Route } from "react-router-dom";
import "./Style.css"
import "./Fonts.css"
import NavItem from './components/NavItem';

function App () {
  return (<div className ="container flex">
    <div className ="pannel-left">

       <section className ="mg-nav">
      <h1 className="fs-base fw-bold">seo jimin</h1>
      {/* <h1 className="fs-medium fw-bold">republic of korea</h1> */}

        
      
      </section>
      <section className="mg-nav">


      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail} />
      </HashRouter>
        <ul>
         <NavItem title ="lany businesscard" link="" classname ="fs-h1 fw-light" />
         <NavItem title ="axis of horizon" link="" classname ="fs-h1 fw-light" />



        </ul>

      </section>
      <section className="mg-big">
        <h2 className="fs-base fw-bold">behance</h2>
        <h3 className="fs-base fw-bold">github</h3>

      </section>
    </div>
    <div className="verticalLine"></div>
      
      

      <div className ="pannel-right">
      <h1 className="ff-castoro fs-h2">title</h1>

      </div>
      <div className="oval ff-castoro flex-center">go to the site</div>
      
      </div>
      );
}

export default App;
