import React, {Component} from 'react'
import TodoItem from './components/TodoItem'
import todosData from './todosData'

class App extends Component {
  constructor() {
    super()
    this.state = {todos : todosData}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      return {
        todos : prevState.todos.map(item => {
          if (item.id === id) item.completed = !item.completed
          return item
        })
      } 
    })
  }

  render() {
    const todosComponents = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return (
      <div className="todo-list">
        {todosComponents}
      </div>
    )
  }
}

export default App
