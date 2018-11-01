import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import classNames from 'classnames'
import PureComponent from '../PureComponent'
import styles from './TodoItem.module.css'

class TodoItem extends PureComponent {
  static propTypes = {
    todo: ImmutablePropTypes.contains({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      finished: PropTypes.bool.isRequired,
    }).isRequired,
    toggleTodo: PropTypes.func.isRequired,
  }

  handleChange = e => {
    this.props.toggleTodo(this.props.todo.get('id'))
  }

  render() {
    const { todo } = this.props
    
    return (
      <Fragment>
        <input className={styles.toggle} type="checkbox" checked={todo.get('finished')} onChange={this.handleChange} />
        <span className={classNames(styles.title, { [styles.finished]: todo.get('finished') })}>{todo.get('title')}</span>
      </Fragment>
    )
  }
}

export default TodoItem