import {combineReducers, configureStore} from "@reduxjs/toolkit";
import filtersReducer from "@/entities/filters/model/filters";
import platformsReducer from "@/entities/platforms/model/platforms";

const rootReducer = combineReducers({
    filtersReducer,
    platformsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']