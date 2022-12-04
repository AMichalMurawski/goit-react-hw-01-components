import PropTypes from 'prop-types';
import css from './css/Statistics.module.css';

export const Statistics = ({ title, statistics }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css['stat-list']}>
        {statistics.map((statistic, index) => (
          <li className={css['item' + (index % 3)]} key={index}>
            <span className={css.label}>{statistic.label}</span>
            <span className={css.percentage}>{statistic.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
