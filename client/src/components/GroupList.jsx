import React from 'react';
import ReactDOM from 'react';
import TaskGroup from './TaskGroup.jsx';
import Group from './Group.jsx';

const GroupList = ({groups, tasks, handleGroupSelect, completed}) => {

    return (
        <div id="group-list">
            <h1>Things To Do</h1>
            <ul className="group-list">
                {groups.map((group, index) => (
                    <Group 
                        key={index} 
                        index={index} 
                        tasks={group === "See All Tasks" ? tasks : tasks.filter(task => task.group === group)} 
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
