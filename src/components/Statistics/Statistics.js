// // import data from './Data.json';
import PropTypes from 'prop-types';
import css from './Statistic.module.css';

function getRandomHexColor() {
  let r = function () {
    return Math.floor(Math.random() * 256);
  };
  return `rgb(${r()},${r()},${r()})`;
}

export const Statistics = ({ title, stats }) => (
  // return data.map(stats => {
  //   console.log('stats', stats);
  //   return
  <div className={css.statisticsConteiner}>
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>
      {stats.map(stat => (
        <li
          className={css.item}
          style={{
            backgroundColor: getRandomHexColor(),
          }}
          key={stat.id}
        >
          <span className={css.label}>{stat.label} </span>
          <span className={css.percentage}>{stat.percentage}</span>
        </li>
      ))}

      {/* <li class="item" key={stats.id}>
            <span class="label">{stats.label} </span>
            <span class="percentage">{stats.percentage}</span>
          </li>
          <li class="item" key={stats.id}>
            <span class="label">{stats.label} </span>
            <span class="percentage">{stats.percentage}</span>
          </li>
          <li class="item" key={stats.id}>
            <span class="label">{stats.label} </span>
            <span class="percentage">{stats.percentage}</span>
          </li>
          <li class="item" key={stats.id}>
            <span class="label">{stats.label} </span>
            <span class="percentage">{stats.percentage}</span>
          </li> */}
    </ul>
  </section>
  </div>
);

//   );
// };

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
