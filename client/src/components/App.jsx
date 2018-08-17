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

    this.handleGroupSelect = this.handleGroupSelect.bind(this);
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
      groups: [...taskGroups, "See All Tasks"]
    }, () => {
      this.getParentTasks()
    })
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
  
  handleTaskClick(e, index) {
    let tasks = this.state.tasks;
    let task = tasks[index]
    var date = new Date();
    var utcDate = date.toUTCString();

    if (task.locked) {
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

  checkTaskStatus(currentIndex) {
    let tasks = this.state.tasks;
    let dependencies = this.state.dependencies;

    let complete = function(index) {
      if (tasks[index].completedAt !== null) {
        return true;
      }
    }

    //for each index in dependencies
    for (var index in dependencies) {
      //if list of parents includes current index
      if (dependencies[index].includes(currentIndex)) {
        //for for each parent index
        if (dependencies[index].every(complete)) {
          tasks[index].locked = false;
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
    let dependencies = {};

    for (var i = 0; i < tasks.length; i++) {
      let taskIndex = i;
      let parents = tasks[i].dependencyIds;
      if (parents.length) {
        for (var j = 0; j < tasks.length; j++) {
          if (parents.includes(tasks[j].id)) {
            if (dependencies[i]) {
              dependencies[i].push(j)
            } else {
              dependencies[i] = [j];
            }
          }
        }
      }
    }

    this.setState({
      dependencies: dependencies
    }, () => {
      console.log(JSON.stringify(this.state.parentTasks))
    })
  }

  render () {

    let tasks = this.state.displayGroup === "See All Tasks" ? this.state.tasks :
      this.state.tasks.filter(task => task.group === this.state.displayGroup)

    return (
      <div id="main">
        <GroupList 
          groups={this.state.groups} 
          displayList={this.state.displayList} 
          handleGroupSelect={this.handleGroupSelect} 
        />
        <TaskList 
          tasks={tasks} 
          displayList={this.state.displayList} 
          displayGroup={this.state.displayGroup} 
          handleTaskClick={this.handleTaskClick}
        />
      </div>
    )
  }
}

export default App;