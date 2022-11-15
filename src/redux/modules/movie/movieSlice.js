import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    recommend: [],
    newDisney: [],
    original: [],
    trending: [],
}

const rootURL = 'https://nameless-cliffs-97979.herokuapp.com'

export const __getMovie = createAsyncThunk(
    'getMovie',
    async (payload, thunkApi) => {
        try {
            const { data } = await axios.get(`${rootURL}/movies?type=recommend`)
            // console.log(data)
            return thunkApi.fulfillWithValue(data)


        } catch (error) {
            console.log(error)
        }
    }
)

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {

    },
    extraReducers: {
        [__getMovie.fulfilled]: (state, action) => {
            // console.log(action.payload)
            // state.recommend = action.payload;
            action.payload.map((item) => {
                if (item.data.type === "recommend") {
                    state.recommend[item.id] = item.data;
                }
                else if (item.data.type === "new") {
                    state.newDisney[item.id] = item.data;
                }
                else if (item.data.type === "trending") {
                    state.trending[item.id] = item.data;
                }
                else if (item.data.type === "original") {
                    state.original[item.id] = item.data;
                }
            })
        },
    }
})

export default movieSlice.reducer

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;
