import { createSlice } from "@reduxjs/toolkit";

export const getDataIrregularVerbsPageSlice = createSlice({
    name: 'getDataIrr',
    initialState: {
        loading: false,
        data: null,
        error: null,
    },
    reducers: {
        getDataPending: (state) => {
            state.loading = true;
            state.null = null;
        },
        getDataFullfilled: (state, action) => {
            state.loading = false;
            state.data = action.payload.payload;
        },
        getDataRejected: (state, action) => {
            state.loading = false
            state.error = action.error.message
        }
    },
})

export default getDataIrregularVerbsPageSlice.reducer;
export const {getDataPending, getDataFullfilled, getDataRejected} = getDataIrregularVerbsPageSlice.actions;