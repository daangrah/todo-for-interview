import TodoInput from "./TodoInput"
import {nanoid} from "nanoid";
import {Task} from "./Task";
import {useDispatch, useSelector} from "react-redux";
import {
    addTaskR,
    checkTaskR,
    deleteTaskR
} from "../store/TaskReducer";
import {FooterArea} from "./FooterArea";
import {useState} from "react";

export const TodoApp = () =>{
    const [filter, setFilter] = useState('All');
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);
    const addTask = (text) => {
        const task = {
            text,
            id: nanoid(),
        }
        dispatch(addTaskR(task));
    }
    const deleteTask = (task) => {
        dispatch(deleteTaskR(task.id));
    }
    const toggleCheck = (task) => {
        dispatch(checkTaskR(task.id));
    };
    const filteredTasks = () => {
        if (filter === 'Completed') {
            return tasks.filter(task => task.checked);
        } else if (filter === 'Active') {
            return tasks.filter(task => !task.checked);
        }
        return tasks; // 'all' - показываем все задачи
    };
    const getButtonClass = (buttonFilter) => {
        return filter === buttonFilter ? 'active' : '';
    };
    return (
        <div className={'todo-area'}>
            <TodoInput addTask={addTask}/>
            <div className="tasks">
                {filteredTasks().length > 0 ?
                    <div className="task-list">
                        {filteredTasks().map((item, i) => (
                            <>
                                <Task task={item} key={item.id} number={i + 1}
                                      deleteTask={deleteTask} toggleCheck={toggleCheck}/>
                            </>
                        ))}
                    </div> :
                    <div className="task-list">ЗАДАЧ НЕТ</div>
                }
                <FooterArea tasks={tasks} setFilter={setFilter} getButtonClass={getButtonClass}/>
            </div>

        </div>)
}