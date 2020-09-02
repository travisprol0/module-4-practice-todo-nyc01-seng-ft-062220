import React from "react"

class CategoryContainer extends React.Component {
  clickHandler = (e) => {
    this.props.clickHandler(e)
  }

  categories = () => {
    return this.props.categories.map((category) => {
      if (this.props.category === category) {
        return (
          <button
            onClick={this.clickHandler}
            value={category}
            className="selected"
          >
            {category}
          </button>
        )
      } else {
        return (
          <button onClick={this.clickHandler} value={category}>
            {category}
          </button>
        )
      }
    })
  }

  render() {
    return (
      <div className="categories">
        <h5>Category filters</h5>
        {this.categories()}
      </div>
    )
  }
}

export default CategoryContainer
