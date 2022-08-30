import React, { Component } from "react";

export default class About extends Component {
    render () {
        return(
            <div className="App">
        <div>
            <h5 style={{color: "black"}}>Hi, i'm Yuval, and you're watching the Disney Channel.</h5>
            <img src="https://i.kym-cdn.com/photos/images/facebook/001/296/969/73b.png" alt="" />
        </div>
        <br />
        <iframe width="420" height="345" src="https://www.youtube.com/embed/HhHwnrlZRus">
</iframe>
            </div>
        );
    }
}