import React from 'react';
import ReactDOM from 'react';
import TaskGroup from './TaskGroup.jsx';

const GroupList = ({groups, handleGroupSelect}) => {

    return (
        <div id="group-list">
            <h1>Things To Do</h1>
            <ul className="group-list">
                {groups.map((group, i) => (
                    <li className="group" key={i} onClick={(e) => handleGroupSelect(e, i)}>{group}</li>
                ))}
            </ul>
        </div>
    )
}

export default GroupList;
