import React from 'react';
import ReactDOM from 'react';

const Group = ({taskCount, group, index, handleGroupSelect, completed}) => {
	
	if (completed && Object.keys(completed).length > 0) {
		//for "See All Tasks" option, find sum of all completed tasks in all groups
		if (group === "See All Tasks") {
			completed = Object.values(completed).reduce((a, b) => a + b);
			if (completed === taskCount) {
				alert("Congratulations! You've completed all of your tasks!")
			}
		} else {
			//otherwise get completed count for specific group
			completed = completed[group] ? completed[group] : 0;
		}
	} else {
		completed = 0;
	}

	return (
		<li className="list-item group" onClick={(e) => handleGroupSelect(e, index)}>
			<span>{group}</span><br/>
			<span className="completed-count">{completed} OF {taskCount} TASKS COMPLETE</span>
		</li>
	)
}
export default Group;