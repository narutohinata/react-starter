import {
  createBrowserHistory
} from "history";
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import {
  connectRouter,
  routerMiddleware
} from "connected-react-router";

import reducers from '../reducers';


const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(reducers),
  compose(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
);

export default store;