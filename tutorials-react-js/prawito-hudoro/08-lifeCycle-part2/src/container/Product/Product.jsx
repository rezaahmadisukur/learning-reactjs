import React, { Component } from "react";
import "./Product.css";
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component {
    state = {
        order: 4,
        name: "Prawito"
    };
    handleCounterChange = (newValue) => {
        this.setState({ order: newValue });
    };
    render() {
        return (
            <>
                <div className="header">
                    <div className="logo">
                        <img
                            src="	https://img.lazcdn.com/g/tps/images/ims-web/TB1Hs8GaMFY.1VjSZFnXXcFHXXa.png"
                            alt="logo"
                        />
                    </div>
                    <div className="troley cursor-pointer">
                        <img
                            src="https://img.lazcdn.com/g/tps/tfs/TB1xEeTdBGw3KVjSZFDXXXWEpXa-75-66.png"
                            alt="icon-troley"
                        />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct
                    onCounterChange={(value) => this.handleCounterChange(value)}
                />
            </>
        );
    }
}

export default Product;
