import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addIrr = createAsyncThunk ('addIrregularVerbs/addIrregularVerbsSlice', async (data) =>{
    const response = await axios ({
        method: 'post',
        url: 'http://localhost:8008/api/add_irregularverbs',
        data: {
            data: data,
        }
    })
    return response.data;
})

export const addIrregularVerbsSlice = createSlice({
    name: 'addIrregularVerbs',
    initialState: {
        loading: false,
        data: null,
        error: null,
    },
    extraReducers: {
        [addIrr.pending]: (state) => {
            state.loading = true;
        },
        [addIrr.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        [addIrr.error]: (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.error;
        }
    }
})

export default addIrregularVerbsSlice.reducer;