import {DeleteTask} from "./DeleteTask";

export const Task = ({task, number, deleteTask, toggleCheck}) => {

    return (
        <div className="task-area">
            <p className={`task ${task.checked ? 'is-checked' : ''}`} id={task.id}>
                    <input type='checkbox'  className='checkbox'
                           checked={task.checked}
                           onChange={() => toggleCheck(task)}/>
                {number}.
                <div>{task.text}</div>
            </p>
            <DeleteTask deleteTask={deleteTask} task={task} />
        </div>
    )
}