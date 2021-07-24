import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from '@reach/router'

const ProductDetails = (props) => {
    const { productId } = props
    const [productDetail, setProductDetail] = useState({})
    const { title, price, description } = productDetail

    useEffect(() => {

        axios.get(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                console.log("**************  got the detail data!  *********")
                console.log(res)
                setProductDetail(res.data.product)
            })
            .catch(err => console.log("Something caused the following error:  ", err))
    }, [productId])

    return (
        <div>
            
            <Link to={`/product/edit/${productId}`}>Edit</Link><span>&nbsp;&nbsp;</span><Link to="/">Home</Link><br />
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">
                        Price: {price}
                    </p>
                    <p className="card-text">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails