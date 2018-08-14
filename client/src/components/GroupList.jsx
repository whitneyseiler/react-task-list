import React from 'react';
import ReactDOM from 'react';
import TaskGroup from './TaskGroup.jsx';

const GroupList = ({groups, handleGroupSelect}) => {

    return (
        <div id="group-list">
            <h1>Things To Do</h1>
            {groups.map((group, index) => (
                <h3 className={group} key={index} onClick={(e) => handleGroupSelect(e)}>{group}</h3>
            ))}
        </div>
    )
}

export default GroupList;
