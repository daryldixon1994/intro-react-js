import React, { Component } from "react";
import BookItem from "./BookItem";
import { Card, Button } from "react-bootstrap";

export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: false,
        };
        this.handleClick = () => {
            this.setState({ hide: !this.state.hide });
        };
    }
    render() {
        console.log(this.state.hide);
        if (this.state.hide) {
            return (
                <div>
                    <Button variant="primary" onClick={this.handleClick}>
                        {this.state.hide ? "Show Book" : "Hide Book"}
                    </Button>
                    <h1>Componenet was hidden</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <Button variant="primary" onClick={this.handleClick}>
                        {this.state.hide ? "Show Book" : "Hide Book"}
                    </Button>
                    <BookItem cardProps={this.props.data} />
                </div>
            );
        }
    }
}
