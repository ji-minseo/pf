import React from 'react';
import Axios from "axios";
import { HashRouter, Route } from "react-router-dom";
import "./Style.css"
import "./Fonts.css"
import NavItem from './components/NavItem';
import Lany from "./routes/Lany";
import Navigation from "./components/Navigation";
// import {apple} from "/public/apple.png";


class App extends React.Component {
  componentDidMount() {
    this.randomObject();
  }
  randomObject() {
    var posx = (Math.random()).toFixed();
    var posy = (Math.random()).toFixed();
    document.getElementsByClassName("object")[0].positionX = posx;
    document.getElementsByClassName("object")[0].positionY = posy;


  }


  render () {
  
    return(<div className ="container flex">
    <div className ="pannel-left">

       <section className ="mg-nav">
      <h1 className="fs-base fw-bold">seo jimin</h1>
      {/* <h1 className="fs-medium fw-bold">republic of korea</h1> */}

        
      
      </section>
      <section className="mg-nav">
        <HashRouter><Navigation/></HashRouter>

      </section>
      <section className="mg-big">
        <h2 className="fs-base fw-bold">behance</h2>
        <h3 className="fs-base fw-bold">github</h3>

      </section>
    </div>
    {/* <div className="verticalLine"></div> */}
    <div className ="object"><img src={process.env.PUBLIC_URL + '/apple.png'}/></div>
    <div className ="object"><img src={process.env.PUBLIC_URL + '/lace.png'}/></div>
    <div className ="object"><img src={process.env.PUBLIC_URL + '/egg.png'}/></div>
    <div className ="object"><img src={process.env.PUBLIC_URL + '/rabbit.png'}/></div>
    <div className ="object"><img src={process.env.PUBLIC_URL + '/grass.png'}/></div>

      
      

      <div className ="pannel-right float-center">
      <HashRouter>
      <Route path="/" exact={true} component={Lany} />
        <Route path="/lany" exact={true} component={Lany} />
        <Route path="/axis" exact={true} component={Lany} />

        {/* <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail} /> */}
      </HashRouter>

      </div>
      {/* <div className="oval ff-castoro flex-center">go to the site →</div> */}
      
      
      </div>)
  };
}

export default App;
