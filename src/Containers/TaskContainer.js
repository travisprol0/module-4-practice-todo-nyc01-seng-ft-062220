import React from "react"
import Task from "../Components/Task"

class TaskContainer extends React.Component {
  filterTasks = () => {
    if (this.props.category === "All") {
      return this.props.tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={this.deleteTask} completeTask={this.completeTask} />
      ))
    } else {
      let tasksToFilter = this.props.tasks
      let filteredTasks = tasksToFilter.filter(
        (task) => task.category === this.props.category
      )
      return filteredTasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={this.deleteTask} completeTask={this.completeTask} />
      ))
    }
  }

  deleteTask = (id) => {
    this.props.deleteTask(id)
  }

  addTask = (newTask) => {
    this.props.newTask(newTask)
  }

  completeTask = (id) => {
    this.props.completeTask(id)
}

  render() {
    return (
      <div>
        <div className="tasks">{this.filterTasks()}</div>
      </div>
    )
  }
}

export default TaskContainer
