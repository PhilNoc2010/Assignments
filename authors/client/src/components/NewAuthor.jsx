import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const NewAuthor = () => {
    const [authorName, setAuthorName] =  useState()
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors", {
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

  return (
    <div>
        <p><Link to="/">Home</Link></p>
        <p>Add A New Author:</p>
        <form>
            {errors.map((err, i) => <p key={i} style={{color:"red"}}>{err}</p>)}

            <label htmlFor="authorName">Name: </label>
            <input type="text" id="authorName" value={authorName} onChange={(e) => setAuthorName(e.target.value)}/>
            <p>
                <button onClick={() => setAuthorName("")}>Cancel</button>
                <button onClick={(e) => submitHandler(e)}>Submit</button>
            </p>
        </form>


    </div>

  )
}

export default NewAuthor