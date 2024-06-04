import mapf from "../assets/projects/proj-mapf.png";
import demo from "../assets/projects/proj-mapf-demo.png";
import volunteerMe from "../assets/projects/proj-volunteerme.png";
import airbnb from "../assets/projects/proj-airbnb.png";

interface ProjectLink {
  href: string;
  text: string;
}

interface Project {
  name: string;
  imgSrc: string;
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    name: "MAPF ICBS",
    imgSrc: mapf,
    links: [
      {
        href: "https://github.com/gloriyo/MAPF-ICBS",
        text: "Github",
      },
    ],
  },
  {
    name: "MAPF ICBS Demo",
    imgSrc: demo,
    links: [
      {
        href: "https://github.com/gloriyo/MAPF-demo",
        text: "Github",
      },
    ],
  },
  {
    name: "VolunteerMe Web App",
    imgSrc: volunteerMe,
    links: [
      {
        href: "https://github.com/volunteerMeProject/volunteerme",
        text: "Github",
      },
    ],
  },
  {
    name: "GVA Airbnb Finder",
    imgSrc: airbnb,
    links: [
      {
        href: "https://github.com/gloriyo/gva-airbnb-finder",
        text: "Github",
      },
    ],
  },
];
