import * as React from 'react';

import Layout from '@ui/components/Layout';
import FiltersBar from './FiltersBar';

export const pathName = '/schedule';

interface ScheduleProps {
}

export default class ScheduleRoute extends React.Component<ScheduleProps, any> {
  public render() {
    return (
      <div>
        <Layout>
          <FiltersBar />
        </Layout>
      </div>
    );
  }
}
