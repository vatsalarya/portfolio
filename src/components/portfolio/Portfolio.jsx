import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  webPortfolio,
  otherWebsites,
  otherPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "webapps",
      title: "Web Apps",
    },
    {
      id: "web",
      title: "Websites",
    },
    {
      id: "other",
      title: "Other Apps",
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "webapps":
        setData(webPortfolio);
        break;
      case "web":
        setData(otherWebsites);
        break;
      case "other":
        setData(otherPortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
