import * as React from 'react';
import Layout from '../../components/Layout';

export const pathName = '/';

class IndexRoute extends React.Component {

  render() {
    return (
      <Layout>
        <div>
          <h2>Hello Guru</h2>
        </div>
      </Layout>
    );
  }
}

export default IndexRoute;