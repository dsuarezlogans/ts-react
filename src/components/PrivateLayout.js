import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const PrivateLayout = ({children}) => (
  <div>
    <Header/>
    {children}
  </div>
);

PrivateLayout.propTypes = {
  children: PropTypes.node
};

export default PrivateLayout;