import React from 'react';
import ReactDOM from 'react';

const TaskForm = ({handleFormSubmit, onInputChange}) => {
    
    return (
        <div id="form-container">
            <form className="form" onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Add a new item..." onChange={onInputChange} />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default TaskForm;
