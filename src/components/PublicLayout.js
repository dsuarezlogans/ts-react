import React from 'react';
import PropTypes from 'prop-types';

const PublicLayout = ({children}) => (
  <div>
    PublicLayout
    {children}
  </div>
);

PublicLayout.propTypes = {
  children: PropTypes.node
};

export default PublicLayout;