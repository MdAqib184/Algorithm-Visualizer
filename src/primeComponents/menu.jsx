import React, {Component} from 'react';
import DiscreteSlider from "./slider";
import SimpleSelect from "./simpleSelect";

class Menu extends Component {
    render() {
        return (
            <nav className="nav alert-dark gap-1">
                <button className="btn btn-primary btn-lg m-2" 
                    onClick={this.props.onRefresh}
                    disabled={this.props.isDisabled} 
                    style={this.isClickable()}
                >
                    Refresh
                </button>
                <SimpleSelect
                    pos={0}
                    onAlgoChanged={this.props.setAlgo}
                />
                <DiscreteSlider
                    marks={false}
                    default={20}
                    step={1}
                    min={10}
                    max={50}
                    title="speed"
                    onChange={this.props.onChangeSpeed}
                    isDisabled={false}
                />
                <DiscreteSlider
                    marks={false}
                    default={100}
                    step={1}
                    min={10}
                    max={500}
                    title="Total Number"
                    onChange={this.props.onChangeValues}
                    isDisabled={this.props.isDisabled}
                />
                <button className="btn btn-warning btn-lg m-2" 
                    onClick={this.props.onVisualize} 
                    disabled={this.props.isDisabled} 
                    style={this.isClickable()}
                >
                    Visualize
                </button>


            </nav>
        );
    }
    isClickable = () =>{
        if( this.props.isDisabled ){
            return {cursor: "not-allowed"};
        } else{
            return {};
        }
    }
}

export default Menu;