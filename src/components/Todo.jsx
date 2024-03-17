export default function Todo({ task, toggleComplete, deleteTodo, editTodo }) {
    return (
        <div className="Todo">
            <p onClick={() => toggleComplete(task.id)}
             className={`${task.completed ? `completed` : ""}`}>{task.task}</p>
            <div>
                <i className="fa-solid fa-pen-to-square edit-icon" onClick={() => editTodo(task.id)}></i>
                <i className="fa-solid fa-trash delete-icon" onClick={() => deleteTodo(task.id)}></i>
            </div>
        </div>
    )
}