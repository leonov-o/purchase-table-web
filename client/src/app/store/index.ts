import {combineReducers, configureStore} from "@reduxjs/toolkit";
import filtersReducer from "@/entities/filters/model/filters";
import platformsReducer from "@/entities/platforms/model/platforms";
import skinTableReducer from "@/entities/skinTable/model/skinTable";

const rootReducer = combineReducers({
    filtersReducer,
    platformsReducer,
    skinTableReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']