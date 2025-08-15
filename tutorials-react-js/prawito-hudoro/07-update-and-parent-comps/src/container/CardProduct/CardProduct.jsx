import React, { Component } from "react";

export default class CardProduct extends Component {
    state = {
        order: 4,
        name: "Prawito"
    };

    handleCounterChange = (value) => {
        this.props.onCounterChange(value);
    };

    handlePlus = () => {
        this.setState(
            {
                order: this.state.order + 1
            },
            () => {
                this.handleCounterChange(this.state.order);
            }
        );
    };

    handleMinus = () => {
        if (this.state.order !== 0) {
            this.setState(
                {
                    order: this.state.order - 1
                },
                () => {
                    this.handleCounterChange(this.state.order);
                }
            );
        }
    };
    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src={require("../../assets/product.png")} alt="" />
                </div>
                <div className="product-title">Laptop</div>
                <div className="product-price">Rp. 10.000.000</div>
                <div className="counter">
                    <button onClick={() => this.handleMinus()}>-</button>
                    <input
                        type="text"
                        inputMode="numeric"
                        value={this.state.order}
                        readOnly
                    />
                    <button onClick={() => this.handlePlus()}>+</button>
                </div>
            </div>
        );
    }
}
