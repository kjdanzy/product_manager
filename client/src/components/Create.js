import React, { useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const Create = () => {
    const [formInfo, setFormInfo] = useState({
        title: "",
        price: "",
        description: ""
    })

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/product/new", formInfo)
            .then(res => {
                console.log("*************************************************")
                console.log("insert successful!")
                console.log(res)
                console.log("*************************************************")
            })
            .catch((err) => console.log("?????  This error was produced during the save operation.   ??????", err))
        console.log("http://localhost:8000/api/product/new")
        navigate("/")
    }

    const changeHandler = (event) => {
        setFormInfo({
            ...formInfo,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <h4>Use this form to add a new product!</h4>
                    <label>Title:  </label>
                    <input type="text" name="title" onChange={changeHandler} />
                </div>
                <div>
                    <br />
                    <label>Price:  </label>
                    <input type="text" name="price" onChange={changeHandler} />

                </div>
                <div>
                    <br />
                    <label>Description:</label><br />
                    <textarea
                        name="description"
                        onChange={changeHandler}
                        cols={40}
                        rows={5}
                        placeholder="Please enter a complete description" />                </div>
                <input type="submit" value="Submit" />
            </form>
            <br />
        </div>
    )
}

export default Create