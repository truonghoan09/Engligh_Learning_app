import { createSlice } from "@reduxjs/toolkit";

export const addIrregularVerbsSlice = createSlice({
    name: 'addIrregularVerbs',
    initialState: {
        loading: false,
        data: null,
        error: null,
    },
    reducers: {
        addIrrPending: (state) => {
            state.loading = true;
        },
        addIrrFullilled: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        addIrrRejected: (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.error;
        }
    },
})

export const {addIrrPending, addIrrFullilled, addIrrRejected} = addIrregularVerbsSlice.actions;
export default addIrregularVerbsSlice.reducer;