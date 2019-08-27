/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import {ProductConsumer } from '../context'
import {Link} from 'react-router-dom'
import { ButtonContainer } from './Button'
export default class Details extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {(value) => {
                        const {
                            id,
                            company,
                            img,
                            info,
                            price, 
                            title,
                            inCart} = value.detailProduct;
                            console.log(value.detailProduct)
                        return (
                            <div className="container py-5">
                            {/* title */}
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                        <h5>{title}</h5>
                                    </div>
                                </div>
                            {/*end title */}
                            {/* product info */}
                                    <div className="col-10 col-md-6 my-3">
                                        <img src={img} className="img-fluid" alt="product" />
                                    </div>
                                {/* product text */}
                                    <div className="col-10 mx-auto col-md-6 my-3
                                    text-capitalize">
                                        <h2>Model : {title}</h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: <span className="text-uppercase">{company}</span>
                                        </h4>
                                        <h4 className="text-blue">
                                            <strong>
                                                price: <span>$</span>
                                                {price}
                                            </strong>
                                        </h4>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about product:</p>
                                        <p className="text-muted lead">{info}</p>
                                    </div>
                                    {/* product text */}
                                    <div className="text-center">
                                        <Link to="/">
                                            <ButtonContainer>
                                            back to products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer 
                                        cart
                                        disabled={inCart ? true:false}
                                        onClick={() => {
                                            value.addToCart(id)
                                        }}
                                        >{inCart ? "in Cart" : "add to Cart"}</ButtonContainer>
                                    </div>

                            </div>
                        )
                    }}
                </ProductConsumer>
            </div>
        )
    }
}
