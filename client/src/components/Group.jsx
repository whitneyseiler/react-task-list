import React from 'react';
import ReactDOM from 'react';

const Group = ({tasks, group, index, handleGroupSelect, completed}) => {
    
    if (completed && Object.keys(completed).length > 0) {
        if (group === "See All Tasks") {
            completed = Object.values(completed).reduce((a, b) => a + b);
            if (completed === tasks.length) {
                alert("Congratulations! You've completed all of your tasks!")
            }
        } else {
            completed = completed[group] ? completed[group] : 0;
        }
    } else {
        completed = 0;
    }

    return (
        <li className="group" onClick={(e) => handleGroupSelect(e, index)}>
            {group}<br/>
            <span className="completed-count">{completed} OF {tasks.length} TASKS COMPLETE</span>
        </li>
    )
}
export default Group;