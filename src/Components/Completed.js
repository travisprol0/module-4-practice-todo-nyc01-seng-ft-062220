import React from "react"

class Completed extends React.Component {

deleteTask = (e) => {
  this.props.deleteTask(e.target.parentNode.id)
  // console.log(e.target.previousElementSibling.innerText)
}

completeTask = (e) => {
  this.props.completeTask(e.target.parentNode.id)
}

// ✓

  render() {
    return (
      <div id={this.props.task.id} className="task">
        <div className="label">{this.props.task.category}</div>
        <div className="text">{this.props.task.text}</div>
        <button className="complete" onClick={this.completeTask}>✓</button>
        <button className="delete" onClick={this.deleteTask}>X</button>
      </div>
    )
  }
}

export default Task
