import React from 'react';
import Typewriter from "typewriter-effect";
import './style.css';

const TypeWriterC = () => {
    return (
        <div className="type display-3">
            <span className="badge badge-dark">
                <Typewriter
                    options={{
                        strings: ['Sorting Algorithms', 'Binary Search Algorithm', 'Graph Algorithms', 'N Queen Algorithm', 'Prime Number'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
        </div>
    );
}

export default TypeWriterC;
