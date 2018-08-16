import React from 'react';
import ReactDOM from 'react';
import GroupList from './GroupList.jsx';
import TaskList from './TaskList.jsx';
import Task from './Task.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      groups: [],
      displayList: false,
      displayGroup: null
    }

    this.remove = this.remove.bind(this);
    this.handleGroupSelect = this.handleGroupSelect.bind(this);
    this.handleReturnClick = this.handleReturnClick.bind(this);
    this.handleTaskClick = this.handleTaskClick.bind(this);
    this.getParentTasks = this.getParentTasks.bind(this);
  }

  componentDidMount() {
    let tasks = this.props.tasks;
    let taskGroups = [];
    
    tasks.forEach((task) => {
      if (!taskGroups.includes(task.group)) {
        taskGroups.push(task.group);
      }
      if (task.dependencyIds.length) {
        task.locked = true;
      }
    })
    
    this.setState({
      tasks: tasks,
      groups: taskGroups
    }, () => {
      this.getParentTasks()
    })
  }

  remove(todo) {
    // this.setState({
    //     todos: this.state.todos.filter(el => el !== todo)
    // })
  }

  handleGroupSelect(e, index) {
    e.preventDefault();
    let groups = this.state.groups;
    let selected = groups[index];

    this.setState({
      displayGroup: selected,
      displayList: true
    })
  }

  handleReturnClick(e) {
    this.setState({
      displayList: false
    })
  }

  handleTaskClick(e, index) {
    let tasks = this.state.tasks;
    let task = tasks[index]
    var date = new Date();
    var utcDate = date.toUTCString();

    if (task.locked === true) {
      alert('task locked')
    } else {
      if (task.completedAt === null) {
        task.completedAt = utcDate
      } else {
        task.completedAt = null;
      }

      this.setState({
        tasks: tasks
      })
      this.checkTaskStatus(index)
    }
  }

  checkTaskStatus(index) {
    let tasks = this.state.tasks;
    let currentTask = tasks[index];
    let parents = this.state.parentTasks;

    //if current task is a parent task
    if (parents[currentTask.id]) {
      let dependents = parents[currentTask.id];

      //for each task in task list
      for (var i = 0; i < tasks.length; i++) {
        //if task is a dependent of current task
        if (dependents.includes(i)) {
          tasks[i].locked = !tasks[i].locked;
        }
      }
    }
    this.setState({
      tasks: tasks
    })
  }

  getParentTasks() {
    console.log('parent check')
    let tasks = this.state.tasks;
    let parents = {};

    for (var i = 0; i < tasks.length; i++) {
      let task = tasks[i];

      if (task.dependencyIds.length) {
        task.dependencyIds.forEach((parentId) => {
          if (parents[parentId]) {
            parents[parentId].push(i); 
          } else {
            parents[parentId] = [i];
          }
        })
      }
    }
    this.setState({
      parentTasks: parents
    })
  }

  render () {
    if (this.state.displayList === false) {
      return (
        <GroupList 
          groups={this.state.groups} 
          displayList={this.state.displayList} 
          handleGroupSelect={this.handleGroupSelect} 
        />
      )
    } else {
      return (
        <TaskList 
          tasks={this.state.tasks} 
          handleReturnClick={this.handleReturnClick}
          displayList={this.state.displayList} 
          displayGroup={this.state.displayGroup} 
          handleTaskClick={this.handleTaskClick}
        />
      )
    }
  }
}

export default App;