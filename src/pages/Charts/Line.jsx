import React from 'react';

import { ChartsHeader, Header, LineChart } from '../../components';

const Line = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Line" title="Inflation Rate" />
    <div className="w-full">
      <LineChart />
    </div>
  </div>
);

export default Line;
