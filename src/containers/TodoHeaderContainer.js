import { connect } from 'react-redux'
import TodoHeader from '../components/TodoHeader'
import { createTodo } from '../reducer'

const mapDispatchToProps = dispatch => ({
  createTodo: title => dispatch(createTodo(title)),
})

export default connect(null, mapDispatchToProps)(TodoHeader)