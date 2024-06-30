import React, {Component} from 'react';

class Guess extends Component {
    render() {
        return (
            <div >
               <h1>
                    Is you number greater than {this.getMid()}?
                </h1> <br />
                <button
                    className='btn btn-lg btn-success m-2'
                    onClick={this.props.yesButton}
                >Yes</button>
                <button
                    className='btn btn-lg btn-danger m-2'
                    onClick={this.props.noButton}
                >No</button> <br/>
            </div>
        );
    }
    getMid = () => {
        const mid = Math.floor( (this.props.upper+this.props.lower)/2);
        return mid;
    }
}

export default Guess;