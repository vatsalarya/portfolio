import "./skills.scss";
import allTheme from "../../theme";

export default function Skills({theme}) {
  const data = [
    {
      id: 1,
      skill:"C++",
      src: "https://i.ibb.co/Kr0N31v/1200px-ISO-C-Logo-svg.png",
      level: "****",
      desc:
        "Made various projects in C++ like password manager, password generator, file encrypter, decrypter. Done competitive coding in C++.",
    },
    {
      id: 2,
      skill:"Python",
      src: "https://i.ibb.co/qNb4XsD/Python-logo-and-wordmark-svg.png",
      level: "***",
      desc:
        "Made projects such as hotel management and food ordering system with MySQL integration Competitive programming in python. ",
    },
    {
      id: 3,
      skill:"Web Dev",
      src: "https://i.ibb.co/LYZNdbR/Screenshot-28-removebg-preview.png",
      level: "*****",
      desc:
        "Full Stack Web Development with MERN Stack (Mongo dB, Express, React, Node Js.). Also, with Ejs, jQuery, sql, bootstrap, JavaScript (with ES6).",
      featured: true,
    },
    {
      id: 4,
      skill:"Java",
      src: "https://i.ibb.co/z4LYhQv/what-is-core-java-removebg-preview.png",
      level: "***",
      desc:
        "Made projects using java like Employee attendance and building attendance management.",
    },
    {
      id: 5,
      skill:"DevOPS",
      src: "https://i.ibb.co/fnVQvFr/logo-title-opengraph-removebg-preview-1.png",
      level: "***",
      desc:
        "Knowledge of Jenkins, Git and GitHub, Linux command line and best practices. ",
    }
  ];
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} style={theme===true ? allTheme.light.neuLight : allTheme.dark.neuDark}>
            <div className="top neu" style={theme===true ? allTheme.light.neuLight : allTheme.dark.neuDark}>
              {/* <h2>{d.skill}</h2> */}
              <img src={d.src}></img>
            </div>
            <div className="center neu" style={theme===true ? allTheme.light.neu2Light : allTheme.dark.neu2Dark }>
              {d.desc}
            </div>
            <div className="bottom neu" style={theme===true ? allTheme.light.neuLight : allTheme.dark.neuDark}>
              <h3>Level:</h3>
              <h4>{d.level}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
