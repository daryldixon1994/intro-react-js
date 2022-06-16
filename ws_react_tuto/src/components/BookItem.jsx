import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
export default class BookItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nbre: 1,
            price: 0,
        };
    }

    componentWillMount() {
        alert("THE COMPONENT WILL MOUNT");
    }
    render() {
        return (
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={this.props.cardProps.imgUrl}
                    alt="photo"
                />
                <Card.Body>
                    <Card.Title>{this.props.cardProps.bookName}</Card.Title>
                    <Card.Text>{this.props.cardProps.author}</Card.Text>
                    <Card.Text>
                        <h4>Quantity : {this.props.cardProps.qte}</h4>
                    </Card.Text>
                    <br />
                    <Card.Text>
                        <h5> You ordered : {this.state.nbre} book</h5>
                    </Card.Text>
                    <Card.Text>
                        <h5> Price : {this.state.price} $</h5>
                    </Card.Text>
                    <br />
                    <Button variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        );
    }
    componentDidMount() {
        console.log("component did mount");
    }
    componentWillUnmount() {
        alert("THE COMPONENT WILL UNMOUNT");
    }
}
