import React from 'react';
import ReactDOM from 'react';
import Task from './Task.jsx';

const TaskList = ({tasks, handleReturnClick, displayGroup, displayList, handleTaskClick}) => {

    return (
        <div id="task-list">
            <h1>{displayGroup ? `Task Group: ${displayGroup}` : "Select A Group"}</h1>
            <ul>
                {displayList ? 
                    tasks.map((task, i) => (
                        <Task key={i} index={i} task={task} locked={task.locked} handleClick={handleTaskClick}/>
                    )) 
                    : <p>...no task group selected</p>
                }
            </ul>
        </div>
    )
}

export default TaskList;
