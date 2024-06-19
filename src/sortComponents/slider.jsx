import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});



function valuetext(value) {
    return `${value}`;
}

export default function DiscreteSlider(props) {
    const classes = useStyles();
    const handleChange = (event) => {
        if (event.target.innerText === "") {
            return;
        }
        const num = parseInt(event.target.innerText, 10);
        props.onCountChange(num);
    };

    return (
        <div className={`${classes.root} `}>
            <Slider
                defaultValue={props.default}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto" // Only one valueLabelDisplay
                onChangeCommitted={handleChange}
                step={props.step}
                min={props.min}
                max={props.max}
                disabled={props.disable}
            />
            <Typography id="discrete-slider" gutterBottom>
                {props.title}
            </Typography>
        </div>
    );
}
