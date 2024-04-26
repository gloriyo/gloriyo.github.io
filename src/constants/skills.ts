import html from "../assets/logos/html5-icon.png";
import css from "../assets/logos/css-icon.png";
import js from "../assets/logos/js-icon.png";
import react from "../assets/logos/react-icon.png";
import bootstrap from "../assets/logos/Bootstrap-icon.png";
import jquery from "../assets/logos/jquery-icon.png";

import nodejs from "../assets/logos/nodejs-new-pantone-black.png";
import express from "../assets/logos/ExpressJS-logo.png";
import flask from "../assets/logos/flask-icon.png";

import python from "../assets/logos/python-icon.png";
import cPlus from "../assets/logos/C-Plus-icon.png";
import java from "../assets/logos/java-icon.png";

import mysql from "../assets/logos/mysql-icon.png";
import mongodb from "../assets/logos/mongodb-icon.png";
import postgresql from "../assets/logos/postgresql-icon.png";
import dynamboDB from "../assets/logos/DynamoDB-icon.png";


interface Skill {
    name: string;
    imgSrc: string;
}

interface SkillSet {
    group: string;
    skills: Skill[];
}

export const skills : SkillSet[] = [
  {
    group: "Frontend",
    skills: [
      { 
        name: "HTML5",
        imgSrc: html
      },
      { 
        name: "CSS",
        imgSrc: css
      },
      { 
        name: "React",
        imgSrc: react
      },
      { 
        name: "Bootstrap",
        imgSrc: bootstrap
      },
      { 
        name: "jQuery",
        imgSrc: jquery
      },
    ]
  },
  {
    group: "Backend",
    skills: [
      { 
        name: "Node.js",
        imgSrc: nodejs
      },
      { 
        name: "Express",
        imgSrc: express
      },
      { 
        name: "Flask",
        imgSrc: flask
      },
    ]
  },
  {
    group: "Languages",
    skills: [
      { 
        name: "JavaScript",
        imgSrc: js
      },
      { 
        name: "Python",
        imgSrc: python
      },
      { 
        name: "C/C++",
        imgSrc: cPlus
      },
      { 
        name: "Java",
        imgSrc: java
      }
    ]
  },
  {
    group: "Database",
    skills: [
      { 
        name: "mySQL",
        imgSrc: mysql
      },
      { 
        name: "mongoDB",
        imgSrc: mongodb
      },
      { 
        name: "PostgreSQL",
        imgSrc: postgresql
      },
      { 
        name: "DynamboDB",
        imgSrc: dynamboDB
      },
    ]
  }
]