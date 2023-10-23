import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getIrr = createAsyncThunk('getDataIrr/getDataIrregularVerbsPageSlice', async() => {
    const response = await axios({
        method: 'get',
        url: 'http://localhost:8008/api/get_irregularverbs_page',
        responseType: 'json',
    })
    return response;
})


export const getDataIrregularVerbsPageSlice = createSlice({
    name: 'getDataIrr',
    initialState: {
        loading: false,
        data: null,
        subData: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getIrr.pending, (state) => {
            state.loading = true;
            state.null = null;
        })
        builder.addCase(getIrr.fulfilled, (state, action) => {
            state.loading = false;
            state.subData = action.payload.subData;
            state.data = action.payload.data;
        })

        builder.addCase(getIrr.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default getDataIrregularVerbsPageSlice.reducer;