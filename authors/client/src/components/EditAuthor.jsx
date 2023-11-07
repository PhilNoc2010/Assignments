import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const EditAuthor = (props) => {

  const [authorName, setAuthorName] = useState(null)
  const [errors, setErrors] = useState([])

  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors/" + id)
      .then(res => {
        console.log(res.data)
        setAuthorName(res.data.authorName)
      })
      .catch(err => console.log(err))

  }, [id])

  const updateHandler = (e) => {
    e.preventDefault()
    axios.patch("http://localhost:8000/api/authors/" + id, {
        authorName
    })
        .then(res => {
            console.log(res.data)
            navigate("/authors")
        })
        .catch(err => {
            console.log(err)
            //prepare error messages for display to the user
            const errorRes = err.response.data.errors
            const errorArr = []
            for (const key of Object.keys(errorRes)) {
                errorArr.push(errorRes[key].message)
            }
            setErrors(errorArr)
        })
}

  const cancelHandler = (e) => {
    e.preventDefault()
    navigate("/authors")
  }


  return (
    <div>
      <p>Edit this Author:</p>
      <form>
        {errors.map((err, i) => <p key={i} style={{color:"red"}}>{err}</p>)}
        <label htmlFor="authorName">Name:</label>
        <input type='text' id="authorName" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
        <p>
          <button onClick={(e) => cancelHandler(e)}>Cancel</button>
          <button onClick={(e) => updateHandler(e)}>Submit</button>
        </p>
      </form>


    </div>
  )
}

export default EditAuthor