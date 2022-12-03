import PropTypes from 'prop-types';

export const Statistics = ({ title, statistics }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {statistics.map((statistic, index) => (
          <li class="item" key={index}>
            <span class="label">{statistic.label}</span>
            <span class="percentage">{statistic.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage:PropTypes.number.isRequired,
}
