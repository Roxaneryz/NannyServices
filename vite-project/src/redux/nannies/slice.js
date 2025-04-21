import { createSlice } from "@reduxjs/toolkit";
import { fetchNannies } from "./operation";



const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const nanniesSlice = createSlice({
    name: "nannies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNannies.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchNannies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchNannies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },


  
});

export const nanniesReducer = nanniesSlice.reducer;