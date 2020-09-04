import React from "react"

class TaskForm extends React.Component {
  state = {
    input: "",
    category: "Code",
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    let newTask = {
      text: this.state.input,
      category: this.state.category,
    }
    this.props.addTask(newTask)
    this.setState({
      input: "",
      category: "Code",
    })
  
  fetch('http://localhost:4000/api/v1/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      task: {
        text: this.state.input, 
        category: this.state.category
      }
    })
  })
    .then(r => r.json())
  }

  render() {
    return (
      <form className="new-task-form" onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="New Task Details"
          name="input"
          value={this.state.input}
          onChange={this.handleChange}
        ></input>
        <select
          name="category"
          value={this.state.category}
          onChange={this.handleChange}
        >
          <option>Code</option>
          <option>Food</option>
          <option>Household</option>
          <option>Misc</option>
        </select>
        <input type="submit" value="Add Task"></input>
      </form>
    )
  }
}

export default TaskForm
