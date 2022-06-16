import React from "react";
import CardItem from "./CardItem";
function PizzaList(props) {
// console.log("pizzalist",props)
    return (
        <div>
            <h1>Pizza List</h1>
            <CardItem {...props[0]}>
                {5}
                {"liked"}
            </CardItem>
            <CardItem {...props[1]}>{6}</CardItem>
        </div>
    );
}

export default PizzaList;
