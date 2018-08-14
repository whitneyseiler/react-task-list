import React from 'react';
import ReactDOM from 'react';

const TaskList = (props) => {

    return (
        <div id="task-list">
            <h1>Task Group: {props.displayGroup}</h1>
            <ul>
                {props.tasks.map((task, i) => (
                    <li key={i} >{task.task}</li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList;
