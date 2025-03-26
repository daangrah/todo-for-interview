export const DeleteTask = ({deleteTask, task}) => {
    return (
        <button className="delete-btn" onClick={()=> deleteTask(task)}>
            ❌
        </button>
    )
}