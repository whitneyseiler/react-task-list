import React from 'react';
import ReactDOM from 'react';
import Task from './Task.jsx';

const TaskList = ({tasks, handleReturnClick, displayGroup, displayList, handleTaskClick}) => {

    return (
        <div id="task-list">
            <div id="task-list-header">
                <h1 id="task-header" >{displayGroup ? `Task Group: ${displayGroup}` : "Select A Group"}</h1>
                <button id="return-button" onClick={handleReturnClick}>ALL GROUPS</button>
            </div>
            <ul>
                {displayList ? 
                    tasks.map((task, i) => (
                        <Task key={i} id={task.id} task={task} locked={task.locked} handleClick={handleTaskClick}/>
                    )) 
                    : <p>...no task group selected</p>
                }
            </ul>
        </div>
    )
}

export default TaskList;
