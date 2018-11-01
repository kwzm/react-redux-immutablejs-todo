import { connect } from 'react-redux'
import TodoFooter from '../components/TodoFooter'
import { filterTodos } from '../reducer'

const mapStateToProps = state => ({
  left: state.get('left'),
  filter: state.get('filter'),
})

const dispatchToProps = dispatch => ({
  filterTodos: filter => dispatch(filterTodos(filter)),
})

export default connect(mapStateToProps, dispatchToProps)(TodoFooter)