
import Application from '@ui/application';

import * as React from 'react';
import * as ReactDOM from 'react-dom';


it('renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(<Application />, div);
  ReactDOM.unmountComponentAtNode(div);

});
