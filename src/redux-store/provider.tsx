import * as React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from './reducers';
import { middleware } from './middleware';

export interface IProps {
  initialState?: any;
}

export default class ReduxProvider extends React.Component<IProps> {

  store: Store;

  constructor(props: any) {

    super(props);

    const { initialState } = props;

    this.store = this.initRedux(initialState);
  }

  initRedux(initialState: any): Store {

    const fromLS = localStorage.getItem('reduxState');
    const persistedState = fromLS ? JSON.parse(fromLS) : {};

    const state = {
      ...(initialState || {}),
      ...persistedState
    };

    const store = createStore(
      reducers,
      state,
      composeWithDevTools(
        applyMiddleware(...middleware)
      )
    );

    store.subscribe(() => {
      const currentState = store.getState();
      const toPersist = {
        data: currentState.data,
      };

      try {
        localStorage.setItem('reduxState', JSON.stringify(toPersist));
      } catch (e) {
        console.error(toPersist, e);
        throw e;
      }
    });

    return store;
  }

  render() {
    return <Provider store={this.store}>{this.props.children}</Provider>;
  }
}
