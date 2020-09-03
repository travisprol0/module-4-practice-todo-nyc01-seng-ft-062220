import React from "react"

class Task extends React.Component {
  render() {
    return (
      <div className="task">
        <div className="label">{this.props.task.category}</div>
        <div className="text">{this.props.task.text}</div>
        <button className="delete" onClick={this.props.deleteTask}>
          X
        </button>
      </div>
    )
  }
}

export default Task
