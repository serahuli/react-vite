import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AllReducers from './reducer';

const storageConfig = {
  key: 'root', // key是storage的存储的key
  storage: storage,
  blacklist: ['userInfo'] // 只有 userInfo 不会被存在缓存
};

const myPersistReducer = persistReducer(storageConfig, AllReducers);
const store = createStore(myPersistReducer);
export const persistor = persistStore(store);

export default store;
