import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name:'Babban Billow',
    address:'Disha college',
    designation:'Principal',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName:(state,action) => {
            state.name = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setName } = userSlice.actions

export default userSlice.reducer