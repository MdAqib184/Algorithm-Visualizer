import React, {Component} from 'react';

class Result extends Component {
    render() {
        return (
            <div>
                <span className='display-3'>
                    Your number is {this.props.res}
                </span> <br /><br/>
                <button
                    className='btn btn-primary btn-lg'
                    onClick={this.props.onRestart}
                >
                    Restart
                </button>
            </div>
        );
    }
}

export default Result;