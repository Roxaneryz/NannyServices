import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref } from "firebase/database";
import { db } from "../../utils/firebase";


export const fetchNannies = createAsyncThunk("nannies/fetchNannies", async(_, ThunkAPI) =>{
 try {
    const getNannies = await get(ref(db, "nannies"));
    if (getNannies.exists()) {
        const data = getNannies.val();
        return Object.entries(data).map(([id, value]) => ({ id, ...value }));
    } else {
        throw new Error("No nannies found");
         
    }
     
} catch (e) {
    return ThunkAPI.rejectWithValue(e.message);
}
     
});

