import { combineReducers } from 'redux';
import userReducer from './userReducer';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['auth']
  }

  const authPersistConfig = {
    key: 'auth',
    storage: storage,
    blacklist: ['somethingTemporary']
  }
  
  const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, userReducer),
  })
  
  export default persistReducer(rootPersistConfig, rootReducer)