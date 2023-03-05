import data from './data.json';

export const Statistics = () => {
  return data.map(stats => {
    // console.log('stats', stats)
    return (
      <section class="statistics">
        <h2 class="title">Upload stats</h2>

        <ul class="stat-list">
          <li class="item" key={stats.id}>
            <span class="label">{stats.label} </span>
            <span class="percentage">{stats.percentage}</span>
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
