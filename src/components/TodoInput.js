import {useState} from "react";
import AddTaskButton from "./AddTask";

function TodoInput({addTask}){
    const [value, setValue] = useState('');
    const enterHandler = (e) => {
        if (e.key === 'Enter' && value.trim()) {
            addTask(value.trim())
            setValue('');
        }
    }


    return (
        <div className="input-area">

            <input placeholder='What needs to be done?' className='input-place'
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={enterHandler}/>
            <AddTaskButton addTask={addTask}
            value={value}
            setValue={setValue}/>
        </div>
    )
}
export default TodoInput;