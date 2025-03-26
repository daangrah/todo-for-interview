import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    tasks: [],
}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTaskR: (state, action) => {
            state.tasks.push(action.payload);
        },
        deleteTaskR: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        checkTaskR: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.checked = !task.checked;
            }
        },
    },
});

export const { addTaskR, deleteTaskR, checkTaskR } = taskSlice.actions;
export default taskSlice.reducer;


// export const taskReducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case ADD_TASK:
//             return {...state, tasks: [...state.tasks, action.payload]};
//         case DELETE_TASK:
//             return {...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
//         case CHECK_TASK:
//             return {...state, tasks: state.tasks.map((task) =>
//                     task.id === action.payload ? { ...task, checked: !task.checked } : task)}
//
//         default: return state;
//     }
// }
//
// export const addTaskAction = (payload) => {return {type: ADD_TASK, payload}};
// export const deleteTaskAction = (payload) => {return {type: DELETE_TASK, payload}};
// export const checkTaskAction = (payload) => {return {type: CHECK_TASK, payload}};