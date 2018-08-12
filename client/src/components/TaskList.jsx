import React from 'react';
import ReactDOM from 'react';
import TaskGroup from './TaskGroup.jsx';

const TaskList = ({tasks}) => {

    return (
        <div>
            <h1>Things To Do</h1>
            {tasks}
        </div>
    )
}

export default TaskList;
