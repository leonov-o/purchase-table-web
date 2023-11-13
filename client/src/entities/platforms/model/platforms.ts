import {createSlice} from "@reduxjs/toolkit";

interface IPlatform {
    name: string,
    image: string
}

interface IPlatformsState {
    platforms: IPlatform[]
}

const initialState: IPlatformsState = {
    platforms: [
        {
            image: "",
            name: "CSGO Market"
        },
        {
            image: "",
            name: "Steam sell"
        },
        {
            image: "",
            name: "Steam buy order"
        }
    ]
}

const platformsSlice = createSlice({
    name: "platforms",
    initialState,
    reducers: {

    }
})

export default  platformsSlice.reducer;