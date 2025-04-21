import { createSlice, current } from "@reduxjs/toolkit";
import { fetchNannies } from "./operation";



const initialState = {
    items: [],
    isLoading: false,
    error: null,
    currentNanny: null,
};

const handlePending = (state) => {
    state.isLoading = true;
    state.error = null;
};

const handleRejected = (state, { payload}) => {
    state.isLoading = false;
    state.error = payload;
    
}




const nanniesSlice = createSlice({
    name: "nannies",
    initialState,
    reducers: {

        setCurrentNanny(state, action) {
            state.currentNanny = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchNannies.pending, handlePending)
            
          .addCase(fetchNannies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items = action.payload;
          })
          .addCase(fetchNannies.rejected, handleRejected);
    },


  
});
export const { setCurrentNanny } = nanniesSlice.actions;
export const nanniesReducer = nanniesSlice.reducer;