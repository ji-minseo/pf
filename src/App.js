import React from 'react';
import Draggable from 'react-draggable';
import { HashRouter, Route } from "react-router-dom";
import "./Style.css"
import "./Fonts.css"
import NavItem from './components/NavItem';
import Lany from "./routes/Lany";
import Axis from "./routes/Axis";
import Navigation from "./components/Navigation";
// import {apple} from "/public/apple.png";


class App extends React.Component {
  componentDidMount() {
    this.randomObject();
  }
  randomObject() {
    let posx = Math.random() * (700 - 50) + 50;
    let posy = Math.random() * (700 - 50) + 50;
    console.log(posx);
    let temp = document.getElementsByClassName("drag-wrapper");
    // for(let i = 0; i < temp.length; i++) {
    //   temp[i].style.left = posx +"px";
    //   temp[i].style.top = posy +"px";
    //   posx = Math.random() * (700 - 50) + 50;
    //   posy = Math.random() * (700 - 50) + 50;
    // }
    temp[0].style.left = Math.random() * (400 - 300) + 300 +"px";
    temp[0].style.top = Math.random() * (100 - 10) + 10 +"px";

    temp[1].style.right = Math.random() * (200 - 50) + 50 +"px";
    temp[1].style.bottom = Math.random() * (200 - 50) + 50 +"px";


    temp[2].style.right = Math.random() * (200 - 10) + 10 +"px";
    temp[2].style.bottom = Math.random() * (200 - 50) + 50 +"px";

    temp[3].style.left = Math.random() * (300 - 200) + 200 +"px";
    temp[3].style.top = Math.random() * (100 - 50) + 50 +"px";

    temp[4].style.right = Math.random() * (200 - 50) + 50 +"px";
    temp[4].style.bottom = Math.random() * (200 - 50) + 50 +"px";



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
        <h3 className="fs-base fw-bold"><a href="https://www.behance.net/jijiminseo" target="_blank">behance</a></h3>
        <h3 className="fs-base fw-bold"><a href="https://github.com/ji-minseo" target="_blank">github</a></h3>
        <h3 className="fs-base fw-bold"><a href="https://ji-minseo.github.io/style-guide-components" target="_blank">guidelines</a></h3>


      </section>
    </div>
    <div className="verticalLine"></div>
    <Draggable>
        <div className="drag-wrapper">
          <div className ="object"><img src={process.env.PUBLIC_URL + '/apple.png'}/></div>
          </div></Draggable>
    <Draggable>
        <div className="drag-wrapper">
          <div className ="object"><img src={process.env.PUBLIC_URL + '/lace.png'}/></div>
          </div></Draggable>
    <Draggable>
        <div className="drag-wrapper"><div className ="object"><img src={process.env.PUBLIC_URL + '/egg.png'}/></div>
        </div></Draggable>
    <Draggable>
        <div className="drag-wrapper"><div className ="object"><img src={process.env.PUBLIC_URL + '/rabbit.png'}/></div>
        </div></Draggable>
    <Draggable>
        <div className="drag-wrapper"> <div className ="object"><img src={process.env.PUBLIC_URL + '/grass.png'}/></div>
        </div></Draggable>
    
      
      

      <div className ="pannel-right float-center">
      <HashRouter>
      <Route path="/" exact={true} component={Lany} />
        <Route path="/lany" exact={true} component={Lany} />
        <Route path="/axis" exact={true} component={Axis} />

        {/* <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail} /> */}
      </HashRouter>

      </div>
      {/* <div className="oval ff-castoro flex-center">go to the site →</div> */}
      
      
      </div>)
  };
}

export default App;
