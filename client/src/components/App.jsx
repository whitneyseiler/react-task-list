import React from 'react';
import ReactDOM from 'react';
import TaskList from './TaskList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    let tasks = this.props.tasks;
    let taskList = [];
    let groups = {};

    tasks.forEach((item) => {
      let task = {};
      task.name = item.task;
      task.id = item.id;
      task.completed_at = item.completedAt;
      task.dependency_ids = item.dependencyIds;
      task.group = item.group;
      groups[item.group] = task;
    })
    
    for (var group in groups) {
      taskList.push({[group]: groups[group]})
    }

    this.setState({
      tasks: taskList,
    })
  }

  render () {
    return (
      <div >
        <h1> test </h1>
        <TaskList tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default App;