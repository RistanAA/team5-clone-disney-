import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../modules/movie/movieSlice";
import userSlice from "../modules/user/userSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        movie: movieSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
export default store;
