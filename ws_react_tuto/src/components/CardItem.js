import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PropTypes from "prop-types";

export default function CardItem({
    pizzaName,
    date,
    description,
    imgUrl,
    affichage,
    children,
}) {
    // let pizzaCardName = props.cardPizzaName;*

    return (
        <Card sx={{ maxWidth: 345 }}>
            <button onClick={() => affichage()}>Click me</button>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={pizzaName}
                subheader={date}
            />
            <CardMedia
                component="img"
                height="194"
                image={imgUrl}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Rate : {children[0]}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
CardItem.propTypes = {
    pizzaName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
};
CardItem.defaultProps = {
    imgUrl: "https://img.freepik.com/free-vector/pizza-icon-fast-food-collection-food-icon-isolated_138676-504.jpg?w=2000",
    pizzaName: "PIZZA",
};
