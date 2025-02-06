import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
// import authReducer from './auth/auth.slice';

const rootReducer = combineReducers({
  // auth: authReducer,
  // Добавь другие редьюсеры, если нужно
});

const persistConfig = {
  key: 'MTUB',
  storage,
  whitelist: ['auth'], // Список редьюсеров, которые будут сохраняться
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>; // Изменено на `rootReducer`, а не `store.getState()`
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
