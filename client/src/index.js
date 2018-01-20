import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Main from 'main';
import store from 'store';
import registerServiceWorker from 'registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
