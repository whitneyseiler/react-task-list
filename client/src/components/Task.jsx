import React from 'react';
import ReactDOM from 'react';

const Task = ({index, id, task, handleClick}) => {

    return (
        <li 
            className={task.completedAt === null ? "incomplete" : "completed"}
            onClick={(e) => {handleClick(e, index)}}
        >{task.task}</li>
    )
}
export default Task;