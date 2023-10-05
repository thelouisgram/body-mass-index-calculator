import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface appType {
    system: string;
    bmi: number;
    height: number
}

const initialState: appType = {
    system: 'metric',
    bmi: 0,
    height: 0,
}

const stateSlice = createSlice({
    name: "state",
    initialState,
    reducers: {
        setSystem: (state, action: PayloadAction<string>) => {
            state.system = action.payload;
        },
        updateBmi: (state, action: PayloadAction<number>) => {
            state.bmi = action.payload
        },
        updateHeight: (state, action: PayloadAction<number>) => {
            state.height = action.payload
        }
    },
});

export default stateSlice.reducer;
export const { setSystem, updateBmi, updateHeight } = stateSlice.actions;
