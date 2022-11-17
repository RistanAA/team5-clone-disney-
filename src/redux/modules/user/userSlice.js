import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    id: "",
    name: "",
    email: "",
    photo: "",
    watchList: [],
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
export const __refreshWatchList = createAsyncThunk(
    'refreshWatchList',
    async (payload, thunkApi) => {
        try {
            // console.log(payload)
            const {user} = thunkApi.getState()
            const { data } = await axios.get(`${rootURL}/users/${user.id}`)
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

// export const __getUserWatchList = createAsyncThunk(
//     'getUserWatchList',
//     async (payload, thunkApi) => {
//         try {
//             // console.log("payload")
//             const {user} = thunkApi.getState()
//             const {data} = await axios.get(`${rootURL}/users?email=${user.email}`)
//             // console.log(user.email)
//             // console.log(data)
//             return data
//             // return thunkApi.fulfillWithValue(data)
//         } catch (error) {
            
//         }
//     }
// )
export const __addWatchList = createAsyncThunk(
    'addWatchList',
    async (payload, thunkApi) => {
        try {
            console.log(payload)
            const {user} = thunkApi.getState()
            // const {data} = await axios.get(`${rootURL}/users?email=${user.email}`)
            // console.log(user.email)
            // console.log(user.watchList)
            await axios.patch(`${rootURL}/users/${user.id}`, { watchList: payload})
            console.log("sukses")
        } catch (error) {
            
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
            // alert('success')
            state.id = action.payload[0].id
            state.name = action.payload[0].name
            state.email = action.payload[0].email
            state.photo = action.payload[0].photo
            state.watchList = action.payload[0].watchList
            state.status = true
        },
        [__getUserLogin.rejected]: (state, action) => {
            alert('failed')
            state.status = false
        },  
        [__refreshWatchList.fulfilled]: (state, action) => {
            // alert('success')
            state.id = action.payload[0].id
            state.name = action.payload[0].name
            state.email = action.payload[0].email
            state.photo = action.payload[0].photo
            state.watchList = action.payload[0].watchList
            state.status = true
            console.log(action.payload[0].watchList)
            console.log('tes')
        },
    }
})

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
export default userSlice.reducer

export const selectUserName = state => state.user.name
export const selectUserEmail = state => state.user.email
export const selectUserPhoto = state => state.user.photo
export const selectUserStatus = state => state.user.status
export const selectUserWatchList = state => state.user.watchList
