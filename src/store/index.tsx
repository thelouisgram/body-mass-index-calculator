import { configureStore } from "@reduxjs/toolkit";
import stateReducer from './stateSlice'

type RootState = {
    app: AppState
}

type AppState = {
    system: string,
    bmi: number,
    height: number
}

const store = configureStore({
    reducer: {
        app: stateReducer,
    }
})

export default store
export type AppDispatch = typeof store.dispatch;
export type { RootState };