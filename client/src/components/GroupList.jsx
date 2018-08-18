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
                    <div>
                        <Group 
                            key={index} 
                            index={index} 
                            taskCount={(group === "See All Tasks" ? tasks : tasks.filter(task => task.group === group)).length} 
                            group={group} 
                            handleGroupSelect={handleGroupSelect}
                            completed={completed} 
                        />
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default GroupList;
