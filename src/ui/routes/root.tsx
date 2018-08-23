import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import IndexRoute, { pathName as rootPath } from '@ui/routes/Index';
import NotFoundRoute, { pathName as NotFoundPath } from '@ui/routes/Errors/not-found';

export default class RootPage extends React.Component {

  render() {
    return (
      <div className='app-container flex-column align-items-stretch'>

        <section className='flex flex-grow'>
          <Switch>
            <Route exact path={rootPath} component={IndexRoute} />
            <Route path={NotFoundPath} component={NotFoundRoute} />
          </Switch>
        </section>
      </div>
    );
  }

}