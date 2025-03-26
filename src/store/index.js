import taskReducer from "./TaskReducer";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    }
})
// export const store = createStore(taskReducer, composeWithDevTools())
