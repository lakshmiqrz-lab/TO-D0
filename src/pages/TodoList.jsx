
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function TodoList() {

  const [todos, setTodos] = useState([])

const API = "https://todo-backend-nwfp.onrender.com/todos"
 
  const getTodos = async () => {
    const res = await axios.get(API)
    setTodos(res.data)
  }

  useEffect(() => {
    getTodos()
  }, [])

 
  const deleteTodo = async (id) => {

    const confirmDelete = window.confirm("Are you sure you want to delete?")

    if (confirmDelete) {
      await axios.delete(`${API}/${id}`)
      getTodos()
    }

  }

  return (
    <div>

      <h2>All Todos</h2>

      {todos.map((todo) => (

        <div className="todo-card" key={todo.id}>

          <h3>{todo.title}</h3>

          <p>Status: {todo.status}</p>

          <Link to={`/edit-todo/${todo.id}`}>
            <button>Edit</button>
          </Link>

          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>

        </div>

      ))}

    </div>
  )
}

export default TodoList
