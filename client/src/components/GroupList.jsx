import React from 'react';
import ReactDOM from 'react';
import TaskGroup from './TaskGroup.jsx';

const GroupList = ({groups, handleGroupSelect}) => {

    return (
        <div id="group-list">
            <h1>Things To Do</h1>
            <ul className="group-list">
                {groups.map((group, index) => (
                    <li className={group} key={index} value={group} onClick={(e) => handleGroupSelect(e)}>{group}</li>
                ))}
            </ul>
        </div>
    )
}

export default GroupList;
