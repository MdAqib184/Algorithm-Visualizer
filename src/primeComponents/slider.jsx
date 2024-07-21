import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    return `${value}`;
}


export default function DiscreteSlider(props) {
    const classes = useStyles();
    const handleChange = (event) =>{
        if( event.target.innerText === "" ){
            return;
        }
        const num = parseInt(event.target.innerText,10);
        props.onChange(num);
    }
    return (
        <div className={classes.root+" ml-2 mr-2 mb-0"}>
            <Slider
                defaultValue={props.default}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                onChangeCommitted={handleChange}
                step={props.step}
                marks={props.marks}
                min={props.min}
                max={props.max}
                disabled={props.isDisabled}
            />
            <Typography id="discrete-slider" gutterBottom>
                {props.title}
            </Typography>
        </div>
    );
}
