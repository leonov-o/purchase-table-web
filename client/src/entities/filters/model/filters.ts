import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IFiltersPlatform {
    name: string,
    minPrice: string,
    maxPrice: string,
    salesFilter: string,
    numberItemsFilter: string,
    timeFilter: string
}

export interface IFiltersTypes {
    weapon: boolean,
    container: boolean,
    sticker: boolean,
    graffiti: boolean,
    agent: boolean,
    musicKit: boolean,
    pin: boolean,
    gloves: boolean
}

export interface IFiltersCategories {
    stattrak: boolean,
    souvenir: boolean,
    normal: boolean,
}

export interface IFiltersQualities {
    fn: boolean,
    mw: boolean,
    ft: boolean,
    ww: boolean,
    bs: boolean
}

export interface IFiltersState {
    fromPlatform: IFiltersPlatform,
    toPlatform: IFiltersPlatform,
    types: IFiltersTypes,
    categories: IFiltersCategories,
    qualities: IFiltersQualities,
    sort: "fromPlatformPrice" | "toPlatformPrice" | "profit" | "profitPercent",
    sortDirection: "asc" | "desc"
}

const initialState: IFiltersState = {
    fromPlatform: {
        name: 'steam_buy_order',
        minPrice: '',
        maxPrice: '',
        salesFilter: '',
        numberItemsFilter: '',
        timeFilter: ''
    },
    toPlatform: {
        name: 'market_buy_order',
        minPrice: '',
        maxPrice: '',
        salesFilter: '',
        numberItemsFilter: '',
        timeFilter: ''
    },
    types: {
        weapon: false,
        container: false,
        sticker: false,
        graffiti: false,
        agent: false,
        musicKit: false,
        pin: false,
        gloves: false
    },
    categories: {
        stattrak: false,
        souvenir: false,
        normal: false,
    },
    qualities: {
        fn: false,
        mw: false,
        ft: false,
        ww: false,
        bs: false
    },
    sort: "profitPercent",
    sortDirection: "desc"
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        swapPlatforms: (state) => {
            const _n = state.fromPlatform.name;
            state.fromPlatform.name = state.toPlatform.name;
            state.toPlatform.name = _n;
        },
        updatePlatformFields: (state, action: PayloadAction<{
            platform: "fromPlatform" | "toPlatform",
            field: keyof IFiltersPlatform;
            value: string
        }>) => {
            const {platform, field, value} = action.payload;
            if (field === "name") {
                state[platform][field] = value;
            } else {
                state[platform][field] = Number(value) >= 0 ? value : "0";
            }
        },
        updateTypesCheckbox: (state, action: PayloadAction<string>) => {
            const field = action.payload;
            state.types[field as keyof IFiltersTypes] = !state.types[field as keyof IFiltersTypes];
        },
        updateCategoriesCheckbox: (state, action: PayloadAction<string>) => {
            const field = action.payload;
            state.categories[field as keyof IFiltersCategories] = !state.categories[field as keyof IFiltersCategories];
        },
        updateQualitiesCheckbox: (state, action: PayloadAction<string>) => {
            const field = action.payload;
            state.qualities[field as keyof IFiltersQualities] = !state.qualities[field as keyof IFiltersQualities];
        },
        updateSort: (state, action: PayloadAction<{sort: "fromPlatformPrice" | "toPlatformPrice" | "profit" | "profitPercent", sortDirection: "asc" | "desc"}>) => {
            state.sort = action.payload.sort;
            state.sortDirection = action.payload.sortDirection;
        }
    }
});

export default filtersSlice.reducer;