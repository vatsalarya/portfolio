import "./skills.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      skill:"C++",
      level: "****",
      desc:
        "Made various projects in C++ like password manager, password generator, file encrypter, decrypter. Done competitive coding in C++.",
    },
    {
      id: 2,
      skill:"Python",
      level: "***",
      desc:
        "Competitive programming in python, made projects such as hotel management and food ordering system with MySQL integration. ",
    },
    {
      id: 3,
      skill:"Web Dev",
      level: "*****",
      desc:
        "Full Stack Web Development with MERN Stack (Mongo dB, Express, React, Node Js.). Also, with Ejs, jQuery, sql, bootstrap, JavaScript (with ES6).",
      featured: true,
    },
    {
      id: 4,
      skill:"Java",
      level: "***",
      desc:
        "Made projects using java like Employee attendance and building attendance management.",
    },
    {
      id: 3,
      skill:"DevOPS",
      level: "***",
      desc:
        "Knowledge of Jenkins, Git and GitHub, Linux command line and best practices. ",
    }
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Skills</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured neu" : "card neu"}>
            <div className="top neu">
              <h2>{d.skill}</h2>
            </div>
            <div className="center neu">
              {d.desc}
            </div>
            <div className="bottom neu">
              <h3>Level:</h3>
              <h4>{d.level}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
