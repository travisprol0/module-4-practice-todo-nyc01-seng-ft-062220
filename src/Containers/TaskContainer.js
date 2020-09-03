import React from "react"
import Task from "../Components/Task"
import TaskForm from "../Components/TaskForm"

class TaskContainer extends React.Component {
  filterTasks = () => {
    if (this.props.category === "All") {
      return this.props.tasks.map((task) => (
        <Task task={task} deleteTask={this.deleteTask} />
      ))
    } else {
      let tasksToFilter = this.props.tasks
      let filteredTasks = tasksToFilter.filter(
        (task) => task.category === this.props.category
      )
      return filteredTasks.map((task) => (
        <Task task={task} deleteTask={this.deleteTask} />
      ))
    }
  }

  deleteTask = (e) => {
    e.target.parentElement.remove()
  }

  addTask = (newTask) => {
    this.props.newTask(newTask)
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
