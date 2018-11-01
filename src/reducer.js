import { createReducer } from 'redux-create-reducer'
import { fromJS, Map } from 'immutable'

let baseId = 0

const initialState = fromJS({
  todos: [],
  left: 0,
  filter: 'All',
})

const CREATE_TODO = 'CREATE_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const FILTER_TODOS = 'FILTER_TODOS'

export function createTodo(title) {
  return {
    type: CREATE_TODO,
    title,
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

export function filterTodos(filter) {
  return {
    type: FILTER_TODOS,
    filter,
  }
} 

const ACTION_HANDLERS = {
  [CREATE_TODO]: (state, action) => {
    return state.update('todos', todos => todos.push(Map({
      id: ++baseId,
      title: action.title,
      finished: false,
    })))
    .set('left', state.get('left')+1)
  },
  [REMOVE_TODO]: (state, action) => {
    const $$todos = state.get('todos').filter($$todo => {
      return $$todo.get('id') !== action.id
    })

    return state.set('todos', $$todos)
      .set('left', $$todos.filter($$todo => !$$todo.get('finished')).size)
  },
  [TOGGLE_TODO]: (state, action) => {
    const $$todos = state.get('todos').map($$todo => {
      if ($$todo.get('id') === action.id) {
        return $$todo.set('finished', !$$todo.get('finished'))
      } else {
        return $$todo
      }
    })

    return state.set('todos', $$todos)
      .set('left', $$todos.filter($$todo => !$$todo.get('finished')).size)
  },
  [FILTER_TODOS]: (state, action) => {
    return state.set('filter', action.filter)
  },
}

export default createReducer(initialState, ACTION_HANDLERS)