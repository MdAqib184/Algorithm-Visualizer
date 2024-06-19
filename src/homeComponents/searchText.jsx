import React from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(2),
        padding: theme.spacing(3),
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: '10px',
        backgroundColor: '#f0f0f0',
    },
    textField: {
        width: '100%',
        maxWidth: '400px',
        margin: theme.spacing(1, 0),
        '& .MuiInputBase-root': {
            padding: theme.spacing(1),
            fontSize: '16px',
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: '5px',
        },
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="standard-basics"
                label="Search"
            />
        </form>
    );
}
