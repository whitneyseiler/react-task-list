import React from 'react';
import ReactDOM from 'react';
import GroupList from './GroupList.jsx';
import TaskList from './TaskList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      groups: [],
      displayList: false,
      displayGroup: null
    }

    this.handleGroupSelect = this.handleGroupSelect.bind(this);
    this.handleTaskClick = this.handleTaskClick.bind(this);
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
    let selected = e.target.className;

    this.setState({
      displayGroup: selected,
      displayList: true
    })
  }

  handleTaskClick(e, index) {
    let tasks = this.state.tasks;
    var date = new Date();
    var utcDate = date.toUTCString();

    if (tasks[index].completedAt === null) {
      tasks[index].completedAt = utcDate
    } else {
      tasks[index].completedAt = null;
    }

    this.setState({
      tasks: tasks
    })

  }

  render () {
    return (
      <div>
        <GroupList 
          groups={this.state.groups} 
          displayList={this.state.displayList} 
          handleGroupSelect={this.handleGroupSelect} 
        />
        <TaskList 
          tasks={this.state.tasks} 
          displayList={this.state.displayList} 
          displayGroup={this.state.displayGroup} 
          handleTaskClick={this.handleTaskClick}
        />
      </div>
    )
  }
}

export default App;