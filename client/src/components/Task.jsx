import React from 'react';
import ReactDOM from 'react';

const Task = ({index, id, task, locked, handleClick}) => {
    //apply task classes based on completion and locked status
    let completeStatus = (task.completedAt === null ? "incomplete" : "completed");
    let lockedStatus = (locked === true ? "locked" : null);
    let taskClasses = [completeStatus, lockedStatus];

    return (
        <li className={taskClasses.join(' ')} onClick={(e) => {handleClick(e, id)}}>{task.task}</li>
    )
}
export default Task;