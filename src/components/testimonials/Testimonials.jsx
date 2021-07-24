import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      skill:"C++",
      level: "****",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      skill:"Web Dev",
      level: "*****",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      skill:"Python",
      level: "***",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Skills</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured neu" : "card neu"}>
            <div className="top neu">
              <h3>{d.skill}</h3>
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
