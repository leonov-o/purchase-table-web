import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getPlatforms} from "@/entities/platforms/api/platforms";

export const getPlatformsAction = createAsyncThunk(
    'platforms/getPlatforms',
    async (_, thunkAPI) => {
        try {
            const response = await getPlatforms();
            return response.platforms;
        } catch (e: any) {
            throw thunkAPI.rejectWithValue(e.message);
        }
    },
);
export interface IPlatform {
    image: string,
    name: string,
    paramName: string
}

interface IPlatformsState {
    platforms: IPlatform[],
    isLoading: boolean,
    error: string
}

const initialState: IPlatformsState = {
    platforms: [],
    isLoading: false,
    error: ""
}

const platformsSlice = createSlice({
    name: "platforms",
    initialState,
    reducers: {},
    extraReducers: {
        [getPlatformsAction.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getPlatformsAction.fulfilled.type]: (state, action: PayloadAction<IPlatform[]>) => {
            state.isLoading = false;
            state.platforms = action.payload;
            state.error = '';
        },
        [getPlatformsAction.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default  platformsSlice.reducer;