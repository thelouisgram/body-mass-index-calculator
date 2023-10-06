import { configureStore } from "@reduxjs/toolkit";
import stateReducer from './stateSlice'
import { appType } from "../utils";

type RootState = {
    app: appType
}

const store = configureStore({
    reducer: {
        app: stateReducer,
    }
})

export default store
export type AppDispatch = typeof store.dispatch;
export type { RootState };