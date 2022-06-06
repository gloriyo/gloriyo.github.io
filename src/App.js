import { Nav } from 'react-bootstrap'

// import logo from './logo.svg';
import logo from './img/gloria.png';
import profpi from './profpi.jpg';
import test from './img/nodejs-icon.svg';

import {html, css, react, bootstrap, jquery, node, express, flask, js, python, cLang, cPlus, java, mysql, mongodb, postgresql, dynamboDB} from './img'

import './App.css';

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
      <div className="d-flex justify-content-center">
        <AboutMe />
      </div>
      
    </div>
  );
}

function MainNav() {
  return(
    <Nav activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <div className="vr"></div>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Projects</Nav.Link>
      </Nav.Item>
      <div className="vr"></div>
      <Nav.Item>
        <Nav.Link eventKey="link-2">More</Nav.Link>
      </Nav.Item>
      <div className="vr"></div>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );

}

function AboutMe() {
  return(
    <div className="aboutme container-sm">
      <header className="App-header p-md-3">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <img src={profpi} className="App-img" alt="logo" /> */}
        
        {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> */}
        <h1 className="display-3"> Gloria Yoon</h1>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        <p className="lead">
          Computer Science student at SFU and aspiring web developer.
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

{/*           
          <div className="col">
            <div className="card">
              <div className="card-header">Front-End</div>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">Back-End</div>
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div> */}
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>    
  )
}

export default App;
