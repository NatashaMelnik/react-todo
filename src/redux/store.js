import { createStore, compose, applyMiddleware } from 'redux';
import { todoReducer } from './reducer';
import thunk from 'redux-thunk';

export const store = createStore(todoReducer,
    compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
