import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Authors = () => {
  const [authors, setAuthors] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
      .then(response => {
        console.log(response.data)
        setAuthors(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[])

  const updateHandler = ( id) => {

    console.log("handling an update for " + id)
    navigate("/authors/"+ id + "/edit")
  }

  const deleteHandler = (id) => {
    axios.delete("http://localhost:8000/api/authors/"+id )
      .then(res => {
        setAuthors(authors.filter(authors => id !== authors._id))
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
        <p><Link to="/authors/new">Add an author</Link></p>
        <h3>We have quotes by: </h3>
        {authors ?
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Actions Available</th>
            </tr>
          </thead>
          <tbody>
          {authors.map((author) => {
            return <tr key={author._id}>
                    <td>{author.authorName}</td>
                    <td> <button onClick={() => {updateHandler(author._id)}}>Update</button> / <button onClick={() => {deleteHandler(author._id)}}>Delete</button></td>
                  </tr>
          })
          }
          </tbody>
        </table>
        : "Author List Loading"}
    </div>
  )
}

export default Authors