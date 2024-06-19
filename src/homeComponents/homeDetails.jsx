import React from 'react';
import Navbar from "./navbar";
import Greet from "./greet";
import TypeWriterC from "./TypeWriterC";
import Cards from "./cards";
import Footer from "./footer";

const HomeDetails = () => {

    
    return (
        <React.Fragment>
            <Navbar/>
            <Greet/>
            <TypeWriterC/>
            <Cards/>
            <Footer/>
        </React.Fragment>
    );
}

export default HomeDetails;
