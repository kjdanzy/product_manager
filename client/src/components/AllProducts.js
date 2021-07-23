import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from '@reach/router'

const AllProducts = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {

        axios.get("http://localhost:8000/api/product")
            .then(res => {
                console.log("**************  got the data!  *********")
                console.log(res)
                setProductList(res.data.products)
            })
            .catch(err => console.log("Something caused the following error:  ", err))
    }, [])

    return (
        <div>
            <span>-----------------------------------------------------------</span>
            <h1>All Products</h1>
            <Link to="/product/create">Add New Product</Link>
            <ul>
                {
                    productList.map((item, i) => {
                        return (
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title"><Link to={`/product/edit/${item._id}`} key={i}> {item.title}</Link></h4>
                                    <p class="card-text">
                                        Price: {item.price}
                                    </p>
                                    <p class="card-text">
                                        {item.description}
                                    </p>
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