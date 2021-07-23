import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css'

const EditProduct = (props) => {
    const { productId } = props
    const [productDetail, setProductDetail] = useState({
        title: "",
        price: "",
        description: ""
    })

    const { title, price, description } = productDetail

    useEffect(() => {

        axios.get(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                console.log("**************  got the edit data!  *********")
                console.log(res)
                setProductDetail(res.data.product)
            })
            .catch(err => console.log("Something caused the following error:  ", err))
    }, [])

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/product/update/${productId}`, productDetail)
            .then(res => {
                console.log("*************************************************")
                console.log(res)
                console.log("updating")
                console.log("*************************************************")
                navigate("/")
            })
            .catch((err) => console.log("?????  This error was produced during the update operation.   ??????", err))

    }

    const changeHandler = (event) => {
        setProductDetail({
            ...productDetail,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div classForm="form-group">
                    <h4>Update your selected product here!</h4>
                    <label>Title:  </label>
                    <input type="text" name="title" classForm="form-control" onChange={changeHandler} value={title} />
                </div>
                <div classForm="form-group">
                    <br />
                    <label>Price:  </label>
                    <input type="text" name="price" classForm="form-control" onChange={changeHandler} value={price} />

                </div>
                <div classForm="form-group">
                    <br />
                    <label>Description:</label><br />
                    <textarea
                        name="description"
                        onChange={changeHandler}
                        classForm="form-control"
                        cols={40}
                        rows={5}
                        value={description} />
                </div>
                <input type="submit" value="Submit" />
            </form>
            <br />
        </div>
    )
}

export default EditProduct