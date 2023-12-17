import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './sliceTodo';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './sliceFilter';

const persistConfig = {
  key: 'todos',
  storage,
};

const persistedRootReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
  reducer: { todos: persistedRootReducer, filter: filterReducer },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
