import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { isUserLoggedInSelector } from '../reducers/auth';
import PublicLayout from './PublicLayout';
import isComponent from '../utils/isComponent';

const PublicRoute = ({isUserLoggedIn, notLoggedInOnly, component: Component, layout: Layout, ...rest}) =>
  isUserLoggedIn && notLoggedInOnly ?
    <Redirect to="/dashboard"/> :
    (
      <Route {...rest} render={props =>
        Layout === null ?
          <Component {...props}/> :
          (
            <Layout {...props}>
              <Component/>
            </Layout>
          )
      }/>
    );

PublicRoute.defaultProps = {
  layout: PublicLayout,
  notLoggedInOnly: false,
};

PublicRoute.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
  notLoggedInOnly: PropTypes.bool,
  component: isComponent.isRequired,
  layout: isComponent,
};

const mapStateToProps = state => ({
  isUserLoggedIn: isUserLoggedInSelector(state)
});

export default connect(mapStateToProps)(PublicRoute);
