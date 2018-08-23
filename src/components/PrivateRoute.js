import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import PrivateLayout from './PrivateLayout';
import { isUserLoggedInSelector } from '../reducers/auth';
import isComponent from '../utils/isComponent';

const PrivateRoute = ({isUserLoggedIn, component: Component, layout: Layout, ...rest}) =>
  isUserLoggedIn ?
    (
      <Route {...rest} render={props => (
        Layout === null ?
          <Component {...props}/> :
          (
            <Layout {...props}>
              <Component/>
            </Layout>
          )
      )}/>
    ) :
    <Redirect to="/login"/>;

PrivateRoute.defaultProps = {
  layout: PrivateLayout,
};

PrivateRoute.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
  component: isComponent.isRequired,
  layout: isComponent,
};

const mapStateToProps = state => ({
  isUserLoggedIn: isUserLoggedInSelector(state)
});

export default connect(mapStateToProps)(PrivateRoute);