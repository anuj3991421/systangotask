import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import Reducer from './reducer/index';

import { persistStore } from "redux-persist";

const store = createStore(
    Reducer, applyMiddleware(ReduxThunk)
);

export const persistor = persistStore(store);

export default store;