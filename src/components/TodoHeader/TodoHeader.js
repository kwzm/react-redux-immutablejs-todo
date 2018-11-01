import React from 'react'
// import PropTypes from 'prop-types'
import PureComponent from '../PureComponent'
import styles from './TodoHeader.module.css'

class TodoHeader extends PureComponent {
  // static propTypes = {
  //   createTodo: PropTypes.func.isRequired,
  // }

  state = {inputValue: ''}

  handleSubmit = (e) => {
    e.preventDefault()

    const { createTodo } = this.props
    const { inputValue } = this.state

    createTodo(inputValue)
    this.setState({inputValue: ''})
  }

  handleChange = (e) => {
    var inputValue = e.target.value

    this.setState({
      inputValue,
    })
  }
  
  render() {
    const { inputValue } = this.state

    return (
      <header>
        <h1>todos</h1>
        <form onSubmit={this.handleSubmit}>
          <input className={styles.input} type="text" onChange={this.handleChange} value={inputValue} placeholder="What needs to be finished?" />
        </form>
      </header>
    )
  }
}

export default TodoHeader