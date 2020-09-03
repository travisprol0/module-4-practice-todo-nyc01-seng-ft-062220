import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css"
import { CATEGORIES } from "./data"
import TaskContainer from "./Containers/TaskContainer"
import CategoryContainer from "./Containers/CategoryContainer"
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import TaskForm from "./Components/TaskForm"

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
    console.log("Setting State in App:", newTask)
    this.setState({ tasks: [...this.state.tasks, newTask] })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route
            path="/tasks"
            render={() => {
              return (
                <>
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
                </>
              )
            }}
          />
          <Route
            path="/new-task"
            render={() => {
              return <TaskForm addTask={this.addTask} />
            }}
          />
        </div>
      </Router>
    )
  }
}

export default App
