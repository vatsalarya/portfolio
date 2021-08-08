import "./portfolioList.scss";
import allTheme from "../../theme"

export default function PortfolioList({ id, title, active, setSelected, theme }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
      style={active ? (theme===true ? allTheme.light.neu2Light : allTheme.dark.neu2Dark) : theme===true ? allTheme.light.neuLight : allTheme.dark.neuDark}
    >
      {title}
    </li>
  );
}
