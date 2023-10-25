// import { createSlice } from "@reduxjs/toolkit";


// export const getURLSlice = createSlice ({
//     name: 'getURL',
//     initialState: {
//         loading: false,
//         payload: null,
//         error: null,
//     },
//     reducers: {
//         fetchURLPending: (state) => {
//             state.loading = true;
//         },
//         fetchURLFulfilled: (state, action) => {
//             state.loading = false;
//             state.payload = action.payload;
//         },
//         fetchURLRejected: (state, action) => {
//             state.loading = false;
//             state.payload = null;
//             state.error = action.payload.error;
//         },
//     }
// })

// export const { fetchURLPending, fetchURLFulfilled, fetchURLRejected } = getURLSlice.actions;
// export default getURLSlice.reducer;

import { getDownloadURL, ref, uploadBytes} from "firebase/storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { storage } from "../../App";

export const fetchURL = createAsyncThunk('getURL/uploadAndGetURL', async (data) => {
    try {
        const storageRef = ref(storage, `Sound_IrregularVerbs/${data.file.name}`);
        await uploadBytes(storageRef, data.file);
        const url = await getDownloadURL(storageRef);
        return({url: url, status:data.status}); 
    } catch (error) {
        throw new Error(error);
    }
})

export const getURLSlice = createSlice ({
    name: 'getURL',
    initialState: {
        loading: false,
        payload: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchURL.pending, (state) => {
            state.loading = true;
        }),
        builder.addCase(fetchURL.fulfilled, (state, action) => {
            state.loading = false;
            state.payload = action.payload;
        }),
        builder.addCase(fetchURL.rejected, (state, action) => {
            state.loading = false;
            state.payload = null;
            state.error = action.error.message;
        })
    }
})

export default getURLSlice.reducer;