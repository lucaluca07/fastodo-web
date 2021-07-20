import { configureStore, getDefaultMiddleware, Action } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { ThunkAction } from "redux-thunk";
import createRootReducer from "../reducers";

const rootReducer = createRootReducer();

const middleware = [...getDefaultMiddleware()];

const excludeLoggerEnvs = ["test", "production"];
const shouldIncludeLogger = !excludeLoggerEnvs.includes(
  process.env.NODE_ENV || ""
);

if (shouldIncludeLogger) {
  const logger = createLogger({
    level: "info",
    collapsed: true,
  });
  middleware.push(logger);
}

const configuredStore = (initialState?: RootState) => {
  // Create Store
  const store = configureStore({
    reducer: rootReducer,
    middleware,
    preloadedState: initialState,
  });

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type Store = ReturnType<typeof configuredStore>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default configuredStore;
