import React from 'react';
import ReactDOM from 'react';
import Task from './Task.jsx';

const TaskGroup = ({tasks}) => {
    console.log(tasks)
    return (
        <ul>
            {tasks}
        </ul>
    )
}

export default TaskGroup;
