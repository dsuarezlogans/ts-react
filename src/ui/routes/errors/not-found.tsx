import * as React from 'react';

export const pathName = '/not-found';

class NotFoundRoute extends React.Component {

  render() {
    return (
      <div className='ui text container'>
        <h1 className='ui header'>Not Found</h1>
        <div className='content'>We could not found what your are looking for</div>
      </div>
    );
  }
}

export default NotFoundRoute;