import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from '@reach/router'

const AllProducts = () => {
    const [productList, setProductList] = useState([])
    const [deleteClicked, setDeleteClicked] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => {
                console.log("**************  got the data!  *********")
                console.log(res)
                setProductList(res.data.products)
            })
            .catch(err => console.log("Something caused the following error:  ", err))
    }, [deleteClicked])

    const deleteProductHandler = (e, productId) => {
        axios.delete(`http://localhost:8000/api/product/delete/${productId}`)
            .then(res => {
                console.log("*****************************")
                console.log(res)
                console.log("deleted")
                console.log("*****************************")
                setDeleteClicked(!deleteClicked)
            }, [])
            .catch((err) => console.log("?????  This error was produced during the update operation.   ??????", err))
    }

    return (
        <div>
            <span>-----------------------------------------------------------</span>
            <h1>All Products</h1>
            <Link to="/product/create">Add New Product</Link><br />
            <ul>
                {
                    productList.map((item, i) => {
                        return (
                            <div className="card"  key={i+"c"}>
                                <div className="card-body" key={i+"cb"}>
                                    <h3 key={i}>{item.title}</h3>
                                    <Link to={`/product/detail/${item._id}`} key={i+"l"} className="btn btn-info ml-3">Details</Link>
                                    <button onClick={(e) => deleteProductHandler(e, item._id)} key={i+"b"} className="btn btn-danger ml-3">Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default AllProducts