import "./App.css";
import React, { Component } from "react";
import BookList from "./components/BookList";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: "مائة عام من العزلة",
            imgUrl: "https://www.neelwafurat.com/images/lb/abookstore/covers/normal/292/292202.jpg",
            author: "غابريال غارسيا ماركيز",
            qte: 20,
        };
    }
    render() {
        return (
            <div className="App">
                <BookList data={this.state} />
            </div>
        );
    }
}

export default App;
