import React from 'react';
import ReactDOM from 'react';
import Task from './Task.jsx';

const TaskList = ({tasks, displayGroup, displayList, handleTaskClick}) => {

    return (
        <div id="task-list">
            <h1>Task Group: {displayGroup}</h1>
            <ul>
                {displayList && displayGroup? 
                    tasks.map((task, i) => (
                        task.group === displayGroup ? 
                            <Task key={i} index={i} task={task} handleClick={handleTaskClick}/>
                        : null
                    )) 
                    : <p>...Select task group to display</p>
                }
            </ul>
        </div>
    )
}

export default TaskList;
