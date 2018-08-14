import React from 'react';
import ReactDOM from 'react';
import Task from './Task.jsx';

const TaskList = ({tasks, displayGroup, displayList}) => {

    return (
        <div id="task-list">
            <h1>Task Group: {displayGroup}</h1>
            <ul>
                {displayList && displayGroup? 
                    tasks.map((task, i) => (
                        task.group === displayGroup ? 
                            <li key={i} ><Task task={task} /></li> 
                        : null
                    )) 
                    : <p>...Select task group to display</p>
                }
            </ul>
        </div>
    )
}

export default TaskList;
