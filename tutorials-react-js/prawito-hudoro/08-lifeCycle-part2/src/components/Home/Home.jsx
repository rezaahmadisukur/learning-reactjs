import React, { Component } from "react";
import YouTubeComp from "../YoutubeComp/YouTubeComp";
import Product from "../../container/Product/Product";
import LifeCycle from "../LifeCycle.jsx/LifeCycle";
import LifeCycleComp from "../../container/LifeCycleComp.jsx/LifeCycleComp";

class Home extends Component {
    state = {
        showComponent: true
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showComponent: true
            });
        }, 15000);
    }

    render() {
        return (
            <section>
                <h1>YouTube Component</h1>
                <hr />
                <div style={{ display: "flex" }}>
                    <YouTubeComp
                        time="07:12"
                        title="Tutorial React JS - Part 1"
                        desc="2x views 2 days ago"
                    />
                    <YouTubeComp
                        time="05:10"
                        title="Tutorial React JS - Part 2"
                        desc="10x views 5 days ago"
                    />
                    <YouTubeComp
                        time="09:04"
                        title="Tutorial React JS - Part 3"
                        desc="3x views 3 days ago"
                    />
                    <YouTubeComp
                        time="10:10"
                        title="Tutorial React JS - Part 4"
                        desc="1x views 1 days ago"
                    />
                    <YouTubeComp />
                </div>
                <hr />
                <h1>Counter</h1>
                <hr />
                <Product />
                <hr />
                <h1>LifeCycle</h1>
                <hr />
                <div style={{ display: "flex", gap: "20px" }}>
                    {this.state.showComponent ? <LifeCycleComp /> : null}
                    <LifeCycle />
                </div>

                <hr />
            </section>
        );
    }
}

export default Home;
