import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="app">


{/*############################ MAIN SECTION STARTS HERE #################################*/}
<div className="container-app">


{/*NAVBAR STARTS HERE */}
    <div className="nav-section">
    <div className="nav-bar-wrapper">
      <ul>
          <li>
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" className="ironhack-logo"/>
            </li> 
            <li> 
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" className="menu-top"/>
            </li>  
        </ul>
  </div>      
    </div>
{/*HELLO REACT STARTS FROM HERE */}
        <div className="hello-react">
            <h1  className="hello-react-title">Say hello to</h1> 
            <h1  className="hello-react-title">ReactJS</h1>
            <p className="hello-react-description-text">You will learn how to use <br />the most popular frontend library, <br />and become a super Ninja developer</p>
        </div>

{/*BUTTON */}
        <div className="button-wrapper">
            <button className="btn btn-light fw-bold pe-4 ps-4 pt-3 pb-3">Awesome!</button>
        </div>

</div>


{/*################################# TOOLBOX SECTION STARTS HERE #################################*/}
  <div className="tool-box-wrapper">
      <ul>
          <li>
              <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" className="toolbox-images"/>
              <h3>Declarative</h3>
               <p className="tools-element-description">React makes it<br />painless to create<br />interactive UIs.</p>
          </li>

          <li>   
              <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
              className="toolbox-images"/>
             <h3>Components</h3>
              <p className="tools-element-description">Build encapsulated<br />components that<br />manage their state.</p>
          </li> 

          <li>
              <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
              className="toolbox-images"/>
             <h3>Single-Way</h3>
             <p className="tools-element-description">A set of immutable<br />values are passed to<br />the component's.</p>
          </li>  

          <li>
            <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
            className="toolbox-images"/>
            <h3>JSX</h3>
            <p className="tools-element-description">Statically-typed,<br />designed to run on<br />modern browsers.</p>
          </li> 

      </ul>
  </div>

</div>
  );}


export default App
