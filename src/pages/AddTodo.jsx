
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddTodo() {

  const [title, setTitle] = useState("")
  const [status, setStatus] = useState("Pending")
  const navigate = useNavigate()

  const API = "https://todo-backend-nwfp.onrender.com/todos"

  const addTodo = async (e) => {

    e.preventDefault()

    const newTodo = {
        id:"",
      title: title,
      status: status
    }

    await axios.post(API, newTodo)
    alert("Todo Added Successfully")
    navigate('/todos')
  }

  return (
    <div>

      <h2>Add New Todo</h2>

      <form onSubmit={addTodo}>

        <input
          type="text"
          placeholder="Enter todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <button type="submit">Add Todo</button>

      </form>

    </div>
  )
}

export default AddTodo
