import React from 'react';
import ReactDOM from 'react';
import Task from './Task.jsx';

const TaskList = ({tasks, handleReturnClick, displayGroup, displayList, handleTaskClick}) => {

    return (
        <div id="task-list">
            <h1>Task Group: {displayGroup}</h1>
            <ul>
                {displayList ? 
                    tasks.map((task, i) => (
                        <Task key={i} index={i} task={task} locked={task.locked} handleClick={handleTaskClick}/>
                    )) 
                    : <p>...Select task group to display</p>
                }
            </ul>
        </div>
    )
}

export default TaskList;
