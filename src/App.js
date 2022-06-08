import { Nav } from 'react-bootstrap'

// import logo from './logo.svg';
import logo from './img/gloria.png';
import profpi from './profpi.jpg';
import test from './img/nodejs-icon.svg';

import {html, css, react, bootstrap, jquery, node, express, flask, js, python, cLang, cPlus, java, mysql, mongodb, postgresql, dynamboDB,
        proj_Demo, proj_VolunteerMe, proj_Airbnb} from './img'

import './css/App.css';
import './css/main.css';

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
        img: test
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
      <MainNav />
      <div className=" justify-content-center">
        <AboutMe />
        <Projects />
      </div>
      
    </div>
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

                  {group.skills.map((skill) => (
                    <div className="skill-div" key={skill.name}>
                      {console.log(skill.name)}
                      {/* <img src={test} className="App-img" alt="logo" /> */}
                      <img id={skill.name} src={skill.img} className="skill-icon" alt="..." />
                      <h5 className="card-title">{skill.name}</h5>
                    </div>
                  ))}
                 
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
        <div class="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 p-lg-5">
          <div class="col">
            <div class="card h-100">
              <img src={proj_Demo} class="card-img-top" alt="..."/>
              <div class="card-body">
                {/* <h5 class="card-title">Card title</h5> */}
                <p class="card-text">MAPF ICBS Demo</p>
              </div>

              <div class="card-footer text-muted">
                <a>Links: </a>
                <a href="https://github.com/gloriyo/MAPF-demo" class="card-link">Demo Github</a>
                <a href="https://github.com/gloriyo/MAPF-ICBS" class="card-link">ICBS Project Github</a>
              </div>


            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={proj_VolunteerMe} class="card-img-top" alt="..."/>
              <div class="card-body">
                {/* <h5 class="card-title">Card title</h5> */}
                <p class="card-text">VolunteerMe Web App</p>
              </div>
              <div class="card-footer text-muted">
                <a>Links: </a>
                <a href="https://github.com/volunteerMeProject/volunteerme" class="card-link">Github</a>
              </div>

            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={proj_Airbnb} class="card-img-top" alt="..."/>
              <div class="card-body">
                {/* <h5 class="card-title">Card title</h5> */}
                <p class="card-text">GVA Airbnb Finder</p>
              </div>
              <div class="card-footer text-muted">
                <a>Links: </a>
                <a href="https://github.com/gloriyo/gva-airbnb-finder" class="card-link">Github</a>
              </div>

            </div>
          </div>
          {/* <div class="col">
            <div class="card h-100">
              <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div class="card-group">
          <div class="card">
            <img class="card-img-top" src={proj_Demo} alt="Card image cap"/>
            <div class="card-body">
              // <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="..." alt="Card image cap"/>
            <div class="card-body">
              // <h5 class="card-title">Card title</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="..." alt="Card image cap"/>
            <div class="card-body">
              // <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div> */}
      </header>
    </div>    
  )
}




export default App;
