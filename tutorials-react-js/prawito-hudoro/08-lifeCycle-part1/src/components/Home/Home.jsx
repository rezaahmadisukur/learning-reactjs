import React, { Component } from "react";
import YouTubeComp from "../YoutubeComp/YouTubeComp";
import Product from "../../container/Product/Product";
import LifeCycleCop from "../../container/LifeCycleCop.jsx/LifeCycleCop";
import LifeCycle from "../LifeCycle.jsx/LifeCycle";

export default class Home extends Component {
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
                    <LifeCycleCop />
                    <LifeCycle />
                </div>
                <hr />
            </section>
        );
    }
}
