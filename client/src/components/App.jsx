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
      displayTaskList: false,
      displayGroup: null
    }
    
    this.getParentTasks = this.getParentTasks.bind(this);
    this.handleGroupSelect = this.handleGroupSelect.bind(this);
    this.handleReturnClick = this.handleReturnClick.bind(this);
    this.handleTaskClick = this.handleTaskClick.bind(this);
    this.getCompletedCount = this.getCompletedCount.bind(this);
  }
  
  /**
   * on mount, generate task group list and set all tasks 'locked' prop to true
   */
  componentDidMount() {
    let {tasks} = this.props;  
    const taskGroups = new Set(tasks.map(task => task.group))

    tasks.forEach((task) => {
      if (task.dependencyIds.length > 0) {
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
   * create list of indeces of tasks with dependent tasks as key
   * and array of their parent tasks as value
   */
  getParentTasks() {
    let {tasks} = this.state;
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

  /**
   * set selected group to state for filtering task list
   */
  handleGroupSelect(e, index) {
    let {groups} = this.state;
    let selected = groups[index];

    this.setState({
      displayGroup: selected,
      displayTaskList: true
    })
  }

  /**
   * when 'ALL GROUPS' button clicked, hide task list
   */
  handleReturnClick() {
    this.setState({
      displayTaskList: false
    })
  }

  /**
   *  update tasks 'completedAt' prop and check
   *  if it can be unlocked
   */
  handleTaskClick(e, id) {
    let {tasks} = this.state;
    let date = new Date();
    let utcDate = date.toUTCString();

    let task = tasks.filter(task => task.id === id)[0];
    let index = tasks.indexOf(task);

    if (task.locked) {
      alert('task locked')
    } else {
      if (task.completedAt === null) {
        task.completedAt = utcDate
      } else if (task.completedAt !== null) {
        task.completedAt = null;
      }
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
        } else {
          tasks[index].locked = true;
        }
      }
    }
    this.getCompletedCount(tasks) 
  }
  
  /**
   * get count of completed tasks per group to display in GroupList
   */
  getCompletedCount(tasks) {
    let {groups} = this.state;
    let completed = {};
    let count = 0;

    tasks.forEach((task) => {
      if (task.completedAt) {
        completed[task.group] ? completed[task.group]++ : completed[task.group] = 1;
      }
    })

    this.setState({
      tasks: tasks,
      completed: completed
    })
  }

  render () {
    return (
      <div id="main">
        {!this.state.displayTaskList ?
          <GroupList 
            groups={this.state.groups}
            tasks={this.state.tasks}
            completed={this.state.completed}
            displayTaskList={this.state.displayTaskList} 
            handleGroupSelect={this.handleGroupSelect}
            completedCount={this.getCompletedCount} 
          />
            :
          <TaskList 
            tasks={this.state.tasks} 
            displayTaskList={this.state.displayTaskList} 
            displayGroup={this.state.displayGroup}
            handleReturnClick={this.handleReturnClick}
            handleTaskClick={this.handleTaskClick}
          />
        }
      </div>
    )
  }
}

export default App;