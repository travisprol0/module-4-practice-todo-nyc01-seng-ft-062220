import React from "react"
import "./App.css"
import { CATEGORIES } from "./data"
import TaskContainer from "./Containers/TaskContainer"
import CategoryContainer from "./Containers/CategoryContainer"

class App extends React.Component {
  state = {
    tasks: [
      {
        text: "Buy rice",
        category: "Food",
      },
      {
        text: "Save a tenner",
        category: "Money",
      },
      {
        text: "Build a todo app",
        category: "Code",
      },
      {
        text: "Build todo API",
        category: "Code",
      },
      {
        text: "Get an ISA",
        category: "Money",
      },
      {
        text: "Cook rice",
        category: "Food",
      },
      {
        text: "Tidy house",
        category: "Misc",
      },
    ],
    category: "All",
  }

  categoryClick = (e) => {
    this.setState({ category: e.target.value })
  }

  addTask = (newTask) => {
    this.setState({ tasks: [...this.state.tasks, newTask] })
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoryContainer
          categories={CATEGORIES}
          clickHandler={this.categoryClick}
          category={this.state.category}
        />
        <TaskContainer
          tasks={this.state.tasks}
          category={this.state.category}
          newTask={this.addTask}
        />
      </div>
    )
  }
}

export default App
