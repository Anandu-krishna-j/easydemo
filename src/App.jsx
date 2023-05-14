import React from 'react'
import { StoreProvider } from 'easy-peasy'
import TodoList from './TodoList'
import { store } from './store'

function App() {
  return (
    <StoreProvider store={store}>
    <TodoList />
  </StoreProvider>
  )
}

export default App
