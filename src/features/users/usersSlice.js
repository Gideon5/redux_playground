import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: 'Amos Addai' },
    { id: '1', name: 'Neil Omos' },
    { id: '2', name: 'John Cena'},
    { id: '3', name: 'Randy Orton'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer
