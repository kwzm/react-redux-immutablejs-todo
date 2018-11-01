import React, { Component } from "react"
import { hot } from 'react-hot-loader'
import TodoHeaderContainer from '../../containers/TodoHeaderContainer'
import TodoListContainer from '../../containers/TodoListContainer'
import TodoFooterContainer from '../../containers/TodoFooterContainer'
import styles from './App.module.css'

class App extends Component {  
  render() {
    
    return (
      <div className={styles.todoList}>
        <TodoHeaderContainer />
        <TodoListContainer />
        <TodoFooterContainer />
      </div>
    )
  }
}

export default hot(module)(App)