import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk'
import rootreducers from './rootreducers'
import createSagaMiddleware from 'redux-saga'
import {  watchAddToCArtSaga } from '../sagas/cardSagas';

const sagamiddleware = createSagaMiddleware();
const middleware = [ReduxThunk];
const store = createStore(
    rootreducers,
    composeWithDevTools(applyMiddleware(...middleware, sagamiddleware))
);

sagamiddleware.run(watchAddToCArtSaga);
export default store;