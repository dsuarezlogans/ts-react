import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ReduxProvider } from '../redux-store';

import RootRoute from './routes/root';

import './styles/app.scss';

class Application extends React.Component {

  render() {
    return (
      <ReduxProvider>
        <BrowserRouter>
          <RootRoute />
        </BrowserRouter>
      </ReduxProvider>
    );
  }
}

export default Application;
