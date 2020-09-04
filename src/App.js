import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css"
import { CATEGORIES } from "./data"
import TaskContainer from "./Containers/TaskContainer"
import CategoryContainer from "./Containers/CategoryContainer"
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import TaskForm from "./Components/TaskForm"
import CompletedTaskContainer from './Containers/CompletedTaskContainer'

class App extends React.Component {
  state = {
    tasks: [],
    completedTasks: [],
    category: "All",
  }

  componentDidMount = () => {
    fetch("http://localhost:4000/api/v1/tasks")
      .then((r) => r.json())
      .then((tasks) =>
        this.setState({
          tasks: tasks,
        })
      )
  }

  categoryClick = (e) => {
    this.setState({ category: e.target.value })
  }

  addTask = (newTask) => {
    this.setState({ tasks: [...this.state.tasks, newTask] })
  }

  deleteTask = (id) => {
    fetch(`http://localhost:4000/api/v1/tasks/${id}`, {
      method: "DELETE",
    })
    this.filterTasks(id)
    
  }

  filterTasks = (id) => {
    let int = parseInt(id)
    let array = this.state.tasks
    let filteredTasks = array.filter((task) => task.id !== int)
    this.setState({tasks: filteredTasks})
  }

  completeTask = (id) => {
    let int = parseInt(id)
    let task = this.state.tasks.find((task) => task.id === int)
    this.setState({completedTasks: [...this.state.completedTasks, task]})
    let array = this.state.tasks
    let filteredTasks = array.filter((task) => task.id !== int)
    this.setState({tasks: filteredTasks})

    fetch(`http://localhost:4000/api/v1/tasks/${id}`, {
      method: "DELETE",
    })
    this.filterTasks(id)
    
    // fetch('http://localhost:4000/api/v1/completeds', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json'
    //   },
    //   body: JSON.stringify({
    //     completeds: {
    //       text: task.text, 
    //       category: task.category
    //     }
    //   })
    // })
    //   .then(r => r.json())
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
                    deleteTask={this.deleteTask}
                    completeTask={this.completeTask}
                  />
                </>
              )
            }}
          />
          <Route
            path="/completed-tasks"
            render={() => {
              return (
                <>
                  <CategoryContainer
                    categories={CATEGORIES}
                    clickHandler={this.categoryClick}
                    category={this.state.category}
                  />

                  <CompletedTaskContainer
                    tasks={this.state.completedTasks}
                    category={this.state.category}
                    newTask={this.addTask}
                    deleteTask={this.deleteTask}
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
