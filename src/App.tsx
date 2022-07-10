import { Nav } from 'react-bootstrap'

// import logo from './logo.svg';
// import logo from './img/gloria.png';
// import profpi from './profpi.jpg';
// import test from './img/nodejs-icon.svg';

import {logo, html, css, react, bootstrap, jquery, nodejs, express, flask, js, python, cLang, cPlus, java, mysql, mongodb, postgresql, dynamboDB,
        proj_Demo, proj_VolunteerMe, proj_Airbnb} from './img'

import './css/App.css';
import './css/main.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import Game from './components/Game';
import TopNav from './components/TopNav';

const skills = [
  {
    group: "Frontend",
    skills: [
      { 
        name: "HTML5",
        img: html
      },
      { 
        name: "CSS",
        img: css
      },
      { 
        name: "React",
        img: react
      },
      { 
        name: "Bootstrap",
        img: bootstrap
      },
      { 
        name: "jQuery",
        img: jquery
      },
    ]
  },
  {
    group: "Backend",
    skills: [
      { 
        name: "Node.js",
        img: nodejs
      },
      { 
        name: "Express",
        img: express
      },
      { 
        name: "Flask",
        img: flask
      },
    ]
  },
  {
    group: "Languages",
    skills: [
      { 
        name: "JavaScript",
        img: js
      },
      { 
        name: "Python",
        img: python
      },
      { 
        name: "C/C++",
        img: cPlus
      },
      { 
        name: "Java",
        img: java
      }
    ]
  },
  {
    group: "Database",
    skills: [
      { 
        name: "mySQL",
        img: mysql
      },
      { 
        name: "mongoDB",
        img: mongodb
      },
      { 
        name: "PostgreSQL",
        img: postgresql
      },
      { 
        name: "DynamboDB",
        img: dynamboDB
      },
    ]
  }
]

function App() {
  return (
    <div className="App">
      
      {/* <TopNav /> */}
			<BrowserRouter>
				<Routes>
        <Route path="/" element={<Portfolio />} />
					<Route path="/game" element={<Game game="tic-tac-toe" />} />
					<Route path="tic-tac-toe" element={<Game game="tic-tac-toe" />} />
					<Route path="bricks" element={<Game game="bricks"/>} />
				</Routes>
			</BrowserRouter>
      
    </div>
  );
}

function Portfolio() {
  return (
    <Fragment>
      <MainNav />
      <div className=" justify-content-center">
        <AboutMe />
        <Projects />
      </div>
    </Fragment>
 
  );
}

function MainNav() {
  return(
    <Nav activeKey="/home">
      <Nav.Item>
        <Nav.Link href="#">Home</Nav.Link>
      </Nav.Item>
      <div className="vr"></div>
      <Nav.Item>
        <Nav.Link href="#cv">Skills</Nav.Link>
      </Nav.Item>
      <div className="vr"></div>
      <Nav.Item>
        <Nav.Link href="#section-projects">Projects</Nav.Link>
      </Nav.Item>
      <div className="vr"></div>
      <Nav.Item>
        <Nav.Link href="game">Play</Nav.Link>
      </Nav.Item>
      <div className="vr"></div>
      <Nav.Item>
        <Nav.Link className="nav-disabled" disabled>TBA</Nav.Link>
      </Nav.Item>
      {/* <div className="vr"></div>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item> */}
    </Nav>
  );

}

function AboutMe() {
  return(
    <div className="aboutme container-sm">
      <header className="App-header p-md-3 mx-lg-5">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <img src={profpi} className="App-img" alt="logo" /> */}
        
        {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> */}
        <h1 className="display-3" id="cv"> Gloria Yoon</h1>

        <p className="lead px-4">
          Computer Science student at SFU with interest in software and web development.
        </p>
        <div className="card-columns row row-cols-1 row-cols-sm-2 row-cols-xl-4 p-lg-5 container-xl">
          {skills.map((group) => (
            <div key={group.group} className="col">
             <div className="card my-4">
               <div className="card-header">{group.group}</div>
               <div className="card-body">

                <div>
                  {group.skills.map(skill => (
                        <div className="skill-div" key={skill.name}>
                          <img id={skill.name} src={skill.img} className="skill-icon" alt="..." />
                          <h5 className="card-title">{skill.name}</h5>
                        </div>

        
                    ))}
                    
                </div>

                 
              </div>
             </div>
           </div>
          ))}
        </div>
      </header>
    </div>    
  )
}


function Projects() {
  return(
    <div id="section-projects" className="aboutme container-sm">
      <header className="App-header  p-4 p-md-5 mx-lg-5">

        <h1 className="display-3">Projects</h1>

        <p className="lead px-4">
          Currently ongoing projects and recently completed projects.
        </p>
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 p-lg-5">
          <div className="col">
            <div className="card h-100">
              <img src={proj_Demo} className="card-img-top" alt="..."/>
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text">MAPF ICBS Demo</p>
              </div>

              <div className="card-footer text-muted">
                <a>Links: </a>
                <a href="https://github.com/gloriyo/MAPF-demo" className="card-link">Demo Github</a>
                <a href="https://github.com/gloriyo/MAPF-ICBS" className="card-link">ICBS Project Github</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={proj_VolunteerMe} className="card-img-top" alt="..."/>
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text">VolunteerMe Web App</p>
              </div>
              <div className="card-footer text-muted">
                <a>Links: </a>
                <a href="https://github.com/volunteerMeProject/volunteerme" className="card-link">Github</a>
              </div>

            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={proj_Airbnb} className="card-img-top" alt="..."/>
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text">GVA Airbnb Finder</p>
              </div>
              <div className="card-footer text-muted">
                <a>Links: </a>
                <a href="https://github.com/gloriyo/gva-airbnb-finder" className="card-link">Github</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>    
  )
}


export default App;
