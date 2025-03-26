
function AddTaskButton(props) {
    const addTaskHandler = () => {
        if (props.value.trim()) {
            props.addTask(props.value.trim())
            props.setValue('')
        }
    }
    return (
        <button onClick={addTaskHandler}>ADD</button>
    )
}

export default AddTaskButton;