import React from "react"

class Task extends React.Component {

deleteTask = (e) => {
  this.props.deleteTask(this.props.task.id)
  // console.log(e.target.previousElementSibling.innerText)
}

completeTask = () => {
  this.props.completeTask(this.props.task.id)
}

// ✓

  render() {
    return (
      <div className="task">
        <div className="label">{this.props.task.category}</div>
        <div className="text">{this.props.task.text}</div>
        <button className="complete" onClick={this.completeTask}>✓</button>
        <button className="delete" onClick={this.deleteTask}>X</button>
      </div>
    )
  }
}

export default Task
