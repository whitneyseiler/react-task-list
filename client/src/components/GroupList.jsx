import React from 'react';
import ReactDOM from 'react';
import TaskGroup from './TaskGroup.jsx';
import Group from './Group.jsx';

const GroupList = ({groups, tasks, handleGroupSelect, completed}) => {

	return (
		<div id="group-list">
			<div className="header group-list">
				<h2>Things To Do</h2>
			</div>
			<ul className="group-list">
				{groups.map((group, index) => (
					<Group 
						key={index} 
						index={index} 
						taskCount={(group === "See All Tasks" ? tasks : tasks.filter(task => task.group === group)).length} 
						group={group} 
						handleGroupSelect={handleGroupSelect}
						completed={completed} 
					/>
				))}
			</ul>
		</div>
	)
}

export default GroupList;
