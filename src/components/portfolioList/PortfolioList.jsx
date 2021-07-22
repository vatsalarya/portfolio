import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioList neu active" : "portfolioList neu"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
