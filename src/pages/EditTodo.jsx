import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function EditTodo() {

  const [title, setTitle] = useState("")
  const [status, setStatus] = useState("Pending")
  const { id } = useParams()
  const navigate = useNavigate()

  const API = "https://todo-backend-nwfp.onrender.com/todos"

  const getTodo = async () => {
    const res = await axios.get(`${API}/${id}`)

    setTitle(res.data.title)
    setStatus(res.data.status)
  }

  useEffect(() => {
    getTodo()
  }, [id])


  const updateTodo = async (e) => {
    e.preventDefault()

    const updatedTodo = {
      title: title,
      status: status
    }

    await axios.put(`${API}/${id}`, updatedTodo)
    alert("Todo Updated Successfully")
    navigate('/todos')

  }

  return (
    <div>

      <h2>Edit Todo</h2>

      <form onSubmit={updateTodo}>
        <input
          type="text"
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
        <button type="submit">Update Todo</button>

      </form>
    </div>
  )
}

export default EditTodo
