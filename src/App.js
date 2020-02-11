import React, {Component} from 'react'
import TodoItem from './components/TodoItem'
import todosData from './todosData'

class App extends Component {
  render() {
    const todosComponents = todosData.map(item => <TodoItem key={item.id} item={item} />)
    return (
      <div className="todo-list">
        {todosComponents}
      </div>
    )
  }
}

export default App
