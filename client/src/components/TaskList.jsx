import React from 'react';
import ReactDOM from 'react';

const TaskList = ({tasks, displayList, displayGroup}) => {

    return (
        <div id="task-list">
            <ul>
                {displayList ? 
                    tasks.map((task, index) => {
                        if (task.group === displayGroup) {
                            <li key={index}>{task}</li>
                        }
                    }) : <h2>Select Group to Display</h2>
                }
            </ul>
        </div>
    )
}

export default TaskList;
