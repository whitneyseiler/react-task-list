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

  /**
   * on mount, generate task group list and set all tasks 
   * 'locked' prop to true
   */
  componentDidMount() {
    let {tasks} = this.props;
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

  /**
   * set selected group to state for filtering task list
   */
  handleGroupSelect(e, index) {
    e.preventDefault();
    let {groups} = this.state;
    let selected = groups[index];

    this.setState({
      displayGroup: selected,
      displayList: true
    })
  }

  /**
   *  update tasks 'completedAt' prop and check
   *  if it can be unlocked
   */
  handleTaskClick(e, index) {
    let {tasks} = this.state;
    let task = tasks[index]
    let date = new Date();
    let utcDate = date.toUTCString();

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

  /**
   * check if task is dependent on other tasks and
   * unlock if all parent tasks are complete
   */
  checkTaskStatus(currentIndex) {
    let {tasks} = this.state;
    let {dependencies} = this.state;

    let complete = function(index) {
      if (tasks[index].completedAt !== null) {
        return true;
      }
    }

    for (var index in dependencies) {
      if (dependencies[index].includes(currentIndex)) {
        if (dependencies[index].every(complete)) {
          tasks[index].locked = false;
        }
      }
    }

    this.setState({
      tasks: tasks
    })
  }
  
  /**
   * create list of indeces of tasks with dependent tasks as key
   * and array of their parent tasks as value
   */
  getParentTasks() {
    let tasks = this.state.tasks;
    let dependencies = {};

    for (var i = 0; i < tasks.length; i++) {
      let parents = tasks[i].dependencyIds;

      if (parents.length) {
        for (var j = 0; j < tasks.length; j++) {
          if (parents.includes(tasks[j].id)) {
            dependencies[i] ? dependencies[i].push(j) : dependencies[i] = [j];
          }
        }
      }
    }

    this.setState({
      dependencies: dependencies
    })
  }

  render () {

    //filter task list according to selected group or "See All" option
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