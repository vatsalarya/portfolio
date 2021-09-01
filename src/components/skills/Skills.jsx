// import "./skills.scss";
// import allTheme from "../../theme";

// export default function Skills({theme}) {
//   const data = [
//     {
//       id: 1,
//       skill:"C++",
//       level: "****",
//       desc:
//         "Made various projects in C++ like password manager, password generator, file encrypter, decrypter. Done competitive coding in C++.",
//     },
//     {
//       id: 2,
//       skill:"Python",
//       level: "***",
//       desc:
//         "Made projects such as hotel management and food ordering system with MySQL integration Competitive programming in python. ",
//     },
//     {
//       id: 3,
//       skill:"Web Dev",
//       level: "*****",
//       desc:
//         "Full Stack Web Development with MERN Stack (Mongo dB, Express, React, Node Js.). Also, with Ejs, jQuery, sql, bootstrap, JavaScript (with ES6).",
//       featured: true,
//     },
//     {
//       id: 4,
//       skill:"Java",
//       level: "***",
//       desc:
//         "Made projects using java like Employee attendance and building attendance management.",
//     },
//     {
//       id: 3,
//       skill:"DevOPS",
//       level: "***",
//       desc:
//         "Knowledge of Jenkins, Git and GitHub, Linux command line and best practices. ",
//     }
//   ];
//   return (
//     <div className="skills" id="skills">
//       <h1>Skills</h1>
//       <div className="container">
//         {data.map((d) => (
//           <div className={d.featured ? "card featured" : "card"} style={theme===true ? allTheme.light.neuLight : allTheme.dark.neuDark}>
//             <div className="top neu" >
//               <h2>{d.skill}</h2>
//             </div>
//             <div className="center neu">
//               {d.desc}
//             </div>
//             <div className="bottom neu">
//               <h3>Level:</h3>
//               <h4>{d.level}</h4>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





import "./skills.scss";
import allTheme from "../../theme";

export default function Skills({theme}) {
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
        "Made projects such as hotel management and food ordering system with MySQL integration Competitive programming in python. ",
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
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} style={theme===true ? allTheme.light.neuLight : allTheme.dark.neuDark}>
            <div className="top neu" style={theme===true ? allTheme.light.neuLight : allTheme.dark.neuDark}>
              <h2>{d.skill}</h2>
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
