import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'Generic Car',
        description: 'Redefine fast',
        price: '350.00',
        make: 'make',
        model: 'model',
        max_speed: '140 kph',
        series: 'Generic Series'
    },
    reducers: {
        chooseName: (state, action) => {state.name = action.payload},
        choosePrice: (state, action) => {state.price = action.payload} 
    }
})

// Export redcuer
export const reducer = rootSlice.reducer;
export const { chooseName, choosePrice } = rootSlice.actions
