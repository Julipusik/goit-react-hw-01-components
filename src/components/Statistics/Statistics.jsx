import { Section } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
    return <Section>
        {title && <h2 className="title">{title}</h2>}
  <ul className="stat-list">
            {stats.map(({ id, label, percentage }) => {
                return <li key={id} className="item">
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}</span>
                    </li>
            })}
  </ul>
</Section>
}