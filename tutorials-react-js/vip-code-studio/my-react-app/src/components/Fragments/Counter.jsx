import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log("contructor");
    }

    componentDidMount() {
        this.setState({
            count: 1
        });
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        if (this.state.count === 10) {
            this.setState({
                count: 0
            });
        }
    }
    render() {
        return (
            <div className="flex gap-5 justify-center my-5">
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count - 1
                        });
                    }}
                    className="bg-black text-white px-5 py-1"
                >
                    -
                </button>
                <h1>{this.state.count}</h1>
                <button
                    onClick={() =>
                        this.setState({
                            count: this.state.count + 1
                        })
                    }
                    className="bg-black text-white px-5 py-1"
                >
                    +
                </button>
                {console.log("render")}
            </div>
        );
    }
}

export default Counter;
