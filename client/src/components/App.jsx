import React from 'react';
import ReactDOM from 'react';
import GroupList from './GroupList.jsx';
import TaskList from './TaskList.jsx';
import {tasks} from '../assets/taskData';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      groups: [],
      displayList: true,
      displayGroup: "Purchases"
    }

    this.handleGroupSelect = this.handleGroupSelect.bind(this);
  }

  componentDidMount() {
    let tasks = this.props.tasks;
    let taskGroups = [];
    
    tasks.forEach((task) => {
      if (!taskGroups.includes(task.group)) {
        taskGroups.push(task.group);
      }
    })
    
    this.setState({
      tasks: tasks,
      groups: taskGroups
    })
  }

  handleGroupSelect(e) {
    e.preventDefault();

    let selected = e.target.value;
    this.setState({
      displayGroup: selected
    })
  }

  render () {
    return (
      <div>
        <GroupList groups={this.state.groups} displayList={this.state.displayList} handleGroupSelect={this.handleGroupSelect} />
        <TaskList tasks={this.state.tasks} displayList={this.state.displayList} displayGroup={this.state.displayGroup} />
      </div>
    )
  }
}

export default App;