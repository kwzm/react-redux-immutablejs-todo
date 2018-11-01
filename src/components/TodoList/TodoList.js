import React from "react"
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import PureComponent from '../PureComponent'
import TodoItem from '../TodoItem'
import styles from './TodoList.module.css'

class TodoList extends PureComponent {
  static propTypes = {
    todos: ImmutablePropTypes.list.isRequired,
    removeTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
  }

  render() {
    const { 
      todos, 
      removeTodo, 
      toggleTodo,
    } = this.props
    
    return (
      <ul className={styles.todoView}>
        { todos.map(todo => (
          <li key={todo.get('id')} className={styles.todoItem}>
            <TodoItem todo={todo} toggleTodo={toggleTodo} />
            <span className={styles.delete} onClick={e => removeTodo(todo.get('id'))}>x</span>
          </li>
        ))}
      </ul>
    )
  }
}

export default TodoList