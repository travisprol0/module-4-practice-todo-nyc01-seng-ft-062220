import React from "react";
import Task from "../Components/Task";

class TaskContainer extends React.Component {
  tasks = () => {};

  filterTasks = () => {
    if (this.props.category === "All") {
      return this.props.tasks.map((task) => <Task task={task} />);
    } else {
      let tasksToFilter = this.props.tasks;
      let filteredTasks = tasksToFilter.filter(
        (task) => task.category === this.props.category
      );
      return filteredTasks.map((task) => <Task task={task} />);
    }
  };

  render() {
    return <div className="tasks">{this.filterTasks()}</div>;
  }
}

export default TaskContainer;
