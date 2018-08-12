import React from 'react';
import ReactDOM from 'react';
import GroupList from './GroupList.jsx';
import TaskList from './TaskList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      displayList: false,
      displayGroup: null
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
      tasks: this.props.tasks,
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
      <div >
        <h1> test </h1>
        <GroupList tasks={this.state.tasks} groups={this.state.groups} handleGroupSelect={this.handleGroupSelect}/>
        <TaskList tasks={this.state.tasks} />
      </div>
    )
  }
}

export default App;