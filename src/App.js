import React from 'react';
import './App.css';


function NavBar_2(props){
  return(
    <div class="navbar">
      <h2> Au Chi Lap's Professional Portfolio </h2>
      <div class="dropdown">
        <button class="dropbtn" onClick={() => {props.JobDoc(); window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}}>Job search document </button>
        <div class="dropdown-content">
          <a onClick={()=> props.pict(1)}>DSE Transcript</a>
          <a onClick={()=> props.pict(2)}>Graduate cert.</a>
          <a onClick={()=> props.pict(3)}>Ref. letter 1</a>
          <a onClick={()=> props.pict(4)}>Ref. letter 2</a>
        </div>
      </div> 
      {/* <a>Job experiences</a> */}
      <a onClick={() => {props.Personal(); window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}} id="enlarge">Personal / Professional Section</a>
      <a onClick={() => {props.Home(); window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}} id="enlarge">Home</a>
</div>
  );
}

function Home(){
  let video = require("./videoes/home_bg.mp4");
  let pict = require("./images/front_page.jpeg");
  return(
    <div id="home">
      <div id="self">
        <video src={video} autoPlay muted loop/>
        <div id="overlay"></div>
        <img src={pict} height={500} width={310}></img>
        <div id="intro_txt">
          <h3 id="intro_title">Hello! I am Au Chi Lap.</h3>
          <p id="intro_content">
            I am a graduate of the University of Hong Kong. Majoring in Computer Engineering. In my 4-year study, 
            I immerse myself in the diverse world of programming, exploring different languages, such as javascript, python
            and c++. <br/><br/>
            Apart from programming, I also want to explore myself in different ways. So I have also tried to learn more about
            the aviation industry, through taking an ICAO course from HKU Space. And searching different interested topics related
            to aviation industry.
          </p>
        </div>
      </div>
      <br/>
      <table id="ToC">
        <tr>
          <th colspan="2"> <h3>Table of Content</h3></th>
        </tr>
        <tr>
          <td>Personal / Professional Section</td>
          <td>Job search document</td>
        </tr>
        <tr>
          <td id="list_content">
            <li>Personal mission statements</li>
            <li>Professional mission statements</li>
            <li>Personal section</li>
          </td>
          <td id="list_content">
            <li>Resume</li>
            <li>Certificates</li>
            <li>Reference letters from past job experiences</li>
          </td>
        </tr>
      </table>
      <br/>
      <div id="Contact">
        <p>Email: tonyau1015@gmail.com</p>
        <p>Phone: 5541 0157</p>
      </div>
    </div>
  );
}

function Personal(){
  let video = require("./videoes/personal.mp4")
  return(
    <div id="Personal">
      <div id="heading">
        <video src={video} autoPlay loop muted/>
        <div id="overlay"></div>
        <h3>Personal / Professional Session</h3>
      </div>
      <br/>
      <table id="statements_pro">
        <tr>
          <td> 
            <p id="quote">Today is your opportunity to build the tomorrow you want</p>
            <p id="author">-Ken Poirot</p>
          </td>
        </tr>
        <tr>
          <td>Personal Statement</td>
        </tr>
        <tr>
          <td><p>
              My personal mission is to force myself stepping out of my comfort zone. I am commited to explore different options in my life, through 
              learning different skills from different industries. The learning experiences can let me easily adapt to different environment, and willing to
              learn new things.
          </p></td>
        </tr>
        <br/>
        <tr>
          <td>Professional Statement</td>
        </tr>
        <tr>
          <td><p>
              As a professional, I will be open-minded to the latest updates from the industry and eager to apply them to work. As co-worker, I will always listen
              listen and respect to their opinions and learn from their strength. I will commit to challenging myself and valuing a relationship with my company and coworkers.
          </p></td>
        </tr>
      </table>
      <div id="field">
        <h3 id="field_title">Career Field of Interest</h3>
        <table>
          <tr>
            <td>
              <p>Front-end developer</p>
              <p id="front-end">
                  Among different field in the IT industry, the reason why I want to be a front-end developer is the satisfaction of work. Other than backend developer,
                  front-end developers may easily view their own products. Their code may be visually shown as an interface. To be a better front-end developer, apart from 
                  react and node.js, I am currently self-studying SQL. 
              </p>
            </td>
            <td>
              <p>Pilot</p>
              <p id="pilot">
                  I would like to be a pilot because of the excitement from controlling the plane. Pilots will face different situations during the flight, 
                  these variations of the flight make the experience of each flight becomes unique. Which is a characteristic that I loved about this job, 
                  as it would not make me feel bored by doing things over and over again for years.
              </p>
            </td>
          </tr>
          </table>
      </div>
      <div id="Contact">
        <p>Email: tonyau1015@gmail.com</p>
        <p>Phone: 5541 0157</p>
      </div>
    </div>
  );
}

function JobDoc(props){
  let dse = require("./images/DSE.jpg"); 
  let cert = require("./images/U_cert.jpg"); 
  let ref_letter_1 = require("./images/ref_letter_1.jpg");
  let ref_letter_2 = require("./images/ref_letter_intern.jpg");
  const video = require("./videoes/jobdoc.mp4");
  switch (props.pict){
    case 1:
      return(
        <div id="JobDoc">
          <div id="heading">
            <video src={video} autoPlay loop muted/>
            <div id="overlay"></div>
            <h3>Job Search Document</h3>
          </div>
          <div id="horizontal">
            <img src={dse}></img>
            <a id="left_h" onClick={()=> {props.left(); }}>&#10094;</a>
            <a id="right_h" onClick={()=> {props.right()}}>&#10095;</a>
            <h3>Transcript of DSE</h3>
          </div>
          <div id="Contact">
            <p>Email: tonyau1015@gmail.com</p>
            <p>Phone: 5541 0157</p>
          </div>
        </div>
      );
    case 2:
      return(
        <div id="JobDoc">
          <div id="heading">
            <video src={video} autoPlay loop muted/>
            <h3>Job Search Document</h3>
          </div>
          <div id="straight">
            <img src={cert}></img>
            <a id="left" onClick={()=> {props.left()}}>&#10094;</a>
            <a id="right" onClick={()=> {props.right()}}>&#10095;</a>
            <h3>Graduate Certificate from the University of Hong Kong</h3>
          </div>
          <div id="Contact">
            <p>Email: tonyau1015@gmail.com</p>
            <p>Phone: 5541 0157</p>
          </div>
        </div>
      );
    case 3:
      return(
        <div id="JobDoc">
          <div id="heading">
            <video src={video} autoPlay loop muted/>
            <h3>Job Search Document</h3>
          </div>
          <div id="straight">
            <img src={ref_letter_1}></img>
            <a id="left" onClick={()=> {props.left()}}>&#10094;</a>
            <a id="right" onClick={()=> {props.right()}}>&#10095;</a>
            <h3>Reference letter from Caritas Medical Centre</h3>
          </div>
          <div id="Contact">
            <p>Email: tonyau1015@gmail.com</p>
            <p>Phone: 5541 0157</p>
          </div>
        </div>
      );
    case 4:
      return(
        <div id="JobDoc">
          <div id="heading">
            <video src={video} autoPlay loop muted/>
            <h3>Job Search Document</h3>
          </div>
          <div id="straight">
            <img src={ref_letter_2}></img>
            <a id="left" onClick={()=> {props.left()}}>&#10094;</a>
            <a  id="right" onClick={()=> {props.right()}}>&#10095;</a>
            <h3>Reference letter from InspireLab</h3>
          </div>
          <div id="Contact">
            <p>Email: tonyau1015@gmail.com</p>
            <p>Phone: 5541 0157</p>
          </div>
        </div>
      );
  }
}

function More(){
  return(
    <div>
      <div id="blank">
        <br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
      <div id="More">
        <h1>More</h1>
      </div>
    </div>
  );
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page : "Home",
      pict_no : 1
    }
    this.Home = this.Home.bind(this);
    this.Personal = this.Personal.bind(this);
    this.JobDoc = this.JobDoc.bind(this);
    this.More = this.More.bind(this);
    this.left = this.left.bind(this);
    this.right = this.right.bind(this);
    this.pict_nav = this.pict_nav.bind(this);
  }

  Home(){
    this.setState({page : "Home"});
  }

  Personal(){
    this.setState({page : "Personal"});
  }

  JobDoc(){
    this.setState({page : "JobDoc"});
    this.setState({pict_no : 1});
  }

  More(){
    this.setState({page : "More"});
  }

  left(){
    if (this.state.pict_no == 1){
      this.setState({pict_no : 4});
    }
    else{
      let n = this.state.pict_no;
      n -= 1;
      this.setState({pict_no : n});
    }
  }

  right(){
    if (this.state.pict_no == 4){
      this.setState({pict_no : 1});
    }
    else{
      let n = this.state.pict_no;
      n += 1;
      this.setState({pict_no : n});
    }
  }

  pict_nav(n){
    this.setState({page: "JobDoc", pict_no: n});
  }

  render(){
    switch (this.state.page){
      case "Home":
        return(
        <React.Fragment>
          <NavBar_2
              Home = {this.Home}
              Personal = {this.Personal}
              JobDoc = {this.JobDoc}
              More = {this.More}
              pict = {this.pict_nav}
          />
          <Home/>
        </React.Fragment>);
      case "Personal":
        return(
        <React.Fragment>
          <NavBar_2
              Home = {this.Home}
              Personal = {this.Personal}
              JobDoc = {this.JobDoc}
              More = {this.More}
              pict = {this.pict_nav}
          />
          <Personal/>
        </React.Fragment>
        );
      case "JobDoc":
        return(
        <React.Fragment>
          <NavBar_2
              Home = {this.Home}
              Personal = {this.Personal}
              JobDoc = {this.JobDoc}
              More = {this.More}
              pict = {this.pict_nav}
          />
          <JobDoc
            left = {this.left}
            right = {this.right}
            pict = {this.state.pict_no}
          />
        </React.Fragment>);
      case "More":
        return(
        <React.Fragment>
          <NavBar_2
              Home = {this.Home}
              Personal = {this.Personal}
              JobDoc = {this.JobDoc}
              More = {this.More}
              pict = {this.pict_nav}
          />
          <More/>
        </React.Fragment>);
    }
  }
}

export default App;