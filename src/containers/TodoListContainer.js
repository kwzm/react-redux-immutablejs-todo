import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import TodoList from '../components/TodoList'
import { removeTodo, toggleTodo } from '../reducer'

const todosSelector = state => {
  return state.get('todos')
}
const filterSelector = state => state.get('filter')

const filterTodosSelector = createSelector(
  [ todosSelector, filterSelector ],
  (todos, filter) => {
    switch (filter) {
      case 'Active':
        return todos.filter(todo => !todo.get('finished'))
      case 'Completed':
        return todos.filter(todo => todo.get('finished'))
      case 'All':
      default:
        return todos
    }
  }
)

const mapStateToProps = state => ({
  todos: filterTodosSelector(state),
})

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id)),
  toggleTodo: id => dispatch(toggleTodo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)