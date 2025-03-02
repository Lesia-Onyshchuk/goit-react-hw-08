import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "contacts",
  version: 1,
  storage,
  whitelist: ["token"],
};

const stage = import.meta.env.MODE;

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactReducer),
    filters: filtersReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: stage === "development",
});

export const persistor = persistStore(store);
