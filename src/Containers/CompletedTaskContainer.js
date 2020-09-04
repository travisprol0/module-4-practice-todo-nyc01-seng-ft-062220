import React from "react"
import Completed from "../Components/Task"

class CompletedTaskContainer extends React.Component {
  filterTasks = () => {
    if (this.props.category === "All") {
      return this.props.tasks.map((task) => (
        <Completed key={task.id} task={task} deleteTask={this.deleteTask} />
      ))
    } else {
      let tasksToFilter = this.props.tasks
      let filteredTasks = tasksToFilter.filter(
        (task) => task.category === this.props.category
      )
      return filteredTasks.map((task) => (
        <Completed key={task.id} task={task} deleteTask={this.deleteTask} />
      ))
    }
  }

  deleteTask = (id) => {
    this.props.deleteTask(id)
  }



  render() {
    return (
      <div>
        <div className="tasks">{this.filterTasks()}</div>
      </div>
    )
  }
}

export default CompletedTaskContainer
