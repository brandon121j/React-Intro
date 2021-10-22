import React, { Component } from "react";

import "./App.css";

export class App extends Component {
    state = {
        message: "....loading",
        backgroundColor: "orange",
        toggelShowMe: true
    };

    componentDidMount() {
        //make ajax call to a server or an api

        setTimeout(() => {
        this.setState({
            message: "component did mount executed! so the message is changed",
            backgroundColor: "red",
        });
        }, 2000);
    }

    handleClickMe = () => {
        this.setState({
        message: "clicked",
        });
    };

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
        if (prevState.message !== this.state.message) {
            setTimeout(() => {
                this.setState({
                backgroundColor: "blue",
                message:
                    "Component Did Update executed!!! so the message is changed again",
                });
            }, 2000);
        }

        // if (
        //   prevState.message === "Component Did Update executed!!! so the message is changed again"
        // ) {
        //   console.log("hello class");
        //   this.setState({ color: "pink" });
        // }
    }

    toggelShowMe = () => {
        this.setState((prevState) => {
            return {
                toggelShowMe : !prevState.toggelShowMe
            }
        })
    }

    render() {
        return (
        <div
            className="App"
            style={{ backgroundColor: this.state.backgroundColor }}
        >
            <h1>{this.state.message}</h1>
            <button onClick={this.handleClickMe}>Click Me</button>
            <hr />
            <div style={{backgroundColor : "white"}}>
                {this.state.toggelShowMe === true ? <ShowMe /> : ""}
                <button onClick={this.toggelShowMe}>Toggle Me</button>
            </div>
            
        </div>
        );
    }
}

class ShowMe extends Component{
    state = {
        showMeMessage : "Show me Component"
    }

    render(){
        return <div>{this.state.showMeMessage}</div>
    }
        
}

export default App;