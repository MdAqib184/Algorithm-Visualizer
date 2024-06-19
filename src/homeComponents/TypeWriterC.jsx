import React from 'react';
import Typewriter from "typewriter-effect";
import './style.css';

const TypeWriterC = () => {
    return (
        <div className="type display-3">
            <span className="badge badge-dark">
                <Typewriter
                    options={{
                        strings: ['Graph Algorithms', 'Sorting Algorithms', 'Binary Search Algorithm', 'N Queen Algorithm', '15 Puzzle Algorithm'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
        </div>
    );
}

export default TypeWriterC;
