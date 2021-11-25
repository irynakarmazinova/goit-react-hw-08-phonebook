import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import { items, loading } from './contacts/contacts-reducer';
// import { filter } from './filter/filter-reducer';
import authSliceReducer from './auth/auth-slice';

import { contacts } from './contacts/contacts-reducer';

const contactsPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const middleware = [
//   ...getDefaultMiddleware(),
//   {
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   },
// ];

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const rootReducer = combineReducers({
  auth: persistReducer(contactsPersistConfig, authSliceReducer),
  contacts,
  // items,
  // filter,
  // loading,
});

export const store = configureStore({
  // reducer: {
  //   contacts: rootReducer,
  //   // contacts: persistReducer(contactsPersistConfig, rootReducer),
  // },

  // reducer: combineReducers({
  //   auth: persistReducer(contactsPersistConfig, authSliceReducer),
  //   contacts,
  //   // items,
  //   // filter,
  //   // loading,
  // }),

  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store); //обертка над сторам котор будет реализ обновл и запись локалстораджа
// ------------------------------------------
// thunk - для раб с асинк запросами, доп прослойка, дефолтный способ раб с http запросами в редаксе
