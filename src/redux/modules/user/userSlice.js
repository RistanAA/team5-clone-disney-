import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    name: "",
    email: "",
    photo: "",
    status: false
}
const rootURL = 'https://nameless-cliffs-97979.herokuapp.com'

export const __getUserLogin = createAsyncThunk(
    'getUserLogin',
    async (payload, thunkApi) => {
        try {
            // console.log(payload)
            const { data } = await axios.get(`${rootURL}/users?username=${payload.username}&password=${payload.password}`)
            if (data.length > 0) {
                return thunkApi.fulfillWithValue(data)
            } else {
                return thunkApi.rejectWithValue()
            }

        } catch (error) {
            console.log(error)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.photo = action.payload.photo
        },
        setSignOutState: state => {
            state.name = null;
            state.name = null;
            state.name = null;
        }
    },
    extraReducers: {
        [__getUserLogin.fulfilled]: (state, action) => {
            alert('success')
            state.name = action.payload[0].name
            state.email = action.payload[0].email
            state.photo = action.payload[0].photo
            state.status = true
        },
        [__getUserLogin.rejected]: (state, action) => {
            alert('failed')
            state.status = false
        }
    }
})

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
export default userSlice.reducer

export const selectUserName = state => state.user.name
export const selectUserEmail = state => state.user.email
export const selectUserPhoto = state => state.user.photo
export const selectUserStatus = state => state.user.status
