import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style.css";
import "./images/graph.png";

const useStyles = makeStyles({
    card: {
        minWidth: 350,
        maxWidth: 350,
        minHeight: 250,
        borderRadius: 5,
        '&:hover': {
            boxShadow: '0 6px 12px 0 rgba(0, 0, 0, 0.5)',
        },
    },
    media: {
        height: 140,
    },
    actionArea: {
        padding: 15,
        transition: '0.2s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
});

export default function ImgMediaCard(props) {
    const classes = useStyles();

    return (
        <CardActionArea className={classes.actionArea} m={20}>
            <Card className={classes.card}>
                <CardMedia
                    component="img"
                    alt={props.card.title}
                    height="140"
                    src={props.card.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.card.description}
                    </Typography>
                    <ExpandMoreIcon />
                </CardContent>
            </Card>
        </CardActionArea>
    );
}
