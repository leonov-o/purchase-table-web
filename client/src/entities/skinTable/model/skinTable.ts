import {ISkinItemData} from "@/entities/skinItem/ui/SkinItem.tsx";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getItems, IFiltersState} from "@/entities";

interface IGetItemsOpts {
    page: number,
    filters: IFiltersState
}

export const getItemsAction = createAsyncThunk(
    'skinTable/getItems',
    async (opts: IGetItemsOpts, thunkAPI) => {
        try {

            const response = await getItems(opts.filters, opts.page);
            return response.items;
        } catch (e: any) {
            throw thunkAPI.rejectWithValue(e.message);
        }
    },
);
interface ISkinTable {
    items : ISkinItemData[],
    isLoading: boolean,
    error: string
}

const initialState: ISkinTable = {
    items: [],
    isLoading: false,
    error: ""
}

export const skinTableSlice = createSlice({
    name: 'skinTable',
    initialState,
    reducers: {
        clearItems: (state)=>{
            state.items = [];
        }
    },
    extraReducers: {
        [getItemsAction.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getItemsAction.fulfilled.type]: (state, action: PayloadAction<ISkinItemData[]>) => {
            state.isLoading = false;
            state.items = [...state.items, ...action.payload];
            state.error = '';
        },
        [getItemsAction.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
    });



export default skinTableSlice.reducer;