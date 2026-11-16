
import { Routes, Route, Link } from 'react-router-dom'
import TodoList from './pages/TodoList'
import AddTodo from './pages/AddTodo'
import EditTodo from './pages/EditTodo'

function App() {

  return (
    <div className="container">

      <h1>To-Do Management</h1>

      <nav>
        <Link to="/todos">Todo List</Link>
        <Link to="/add-todo">Add Todo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/add-todo" element={<AddTodo />} />
        <Route path="/edit-todo/:id" element={<EditTodo />} />
      </Routes>

    </div>
  )
}

export default App
