import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import clsx from 'clsx';
import Collapse from '@mui/material/Collapse';
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from '@mui/material/IconButton';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardHeader from '@mui/material/CardHeader';
import { Link } from "react-router-dom";
import "./style.css";
import "./images/graph.png";

const useStyles = makeStyles((theme) => ({
    card: {
        minWidth: 300,
        maxWidth: 350,
        minHeight: 200,
        borderRadius: 5,
        '&:hover': {
            boxShadow: `0 6px 12px 0 rgba(0, 0, 0, 0.5)`,
        },
        [theme.breakpoints.down('sm')]: {
            minWidth: '100%', // Full width on small screens
            maxWidth: '100%', // Full width on small screens
        },
    },
    media: {
        height: 150,
        [theme.breakpoints.down('sm')]: {
            height: 100, // Adjust height on small screens
        },
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    actionArea: {
        padding: 15,
        transition: '0.2s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
        [theme.breakpoints.down('sm')]: {
            padding: 10, // Adjust padding on small screens
            '&:hover': {
                transform: 'scale(1)', // Disable scaling on hover for small screens
            },
        },
    },
}));

export default function ImgMediaCard2(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <CardActionArea className={classes.actionArea} m={20}>
            <Card className={classes.card}>
                <Link to={props.card.route}>
                    <CardMedia
                        component="img"
                        alt={props.card.title}
                        height="150"
                        src={props.card.img}
                        className={classes.media}
                    />
                </Link>
                <CardHeader
                    title={props.card.title}
                    style={{ backgroundColor: "whitesmoke" }}
                    action={
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    }
                />
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent style={{ backgroundColor: "whitesmoke" }}>
                        <Typography>
                            {props.card.description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </CardActionArea>
    );
}
