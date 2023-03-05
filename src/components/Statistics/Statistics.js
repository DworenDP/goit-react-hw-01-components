import data from './Data.json';

export const Statistics = () => {
  return data.map(stats => {
    console.log('stats', stats);
    return (
      <section className="statistics">
        <h2 className="title">Upload stats</h2>

        <ul className="stat-list">
          <li className="item" key={stats.id}>
            <span className="label">{stats.label} </span>
            <span className="percentage">{stats.percentage}</span>
          </li>
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
    );
  });
};
