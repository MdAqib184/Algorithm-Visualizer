import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import ImgMediaCard2 from "./card2";
import "./style.css";
import { getDetails } from "./cardDetails";
import TextField from "@mui/material/TextField";

const Cards = () => {
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        setCards(getDetails());
    }, []);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleCardClick = (route) => {
        navigate(route);
    };

    return (
        <React.Fragment>
            <div className="d-flex justify-content-end CardsT">
                <TextField
                    id="standard-basic"
                    label="Search"
                    onChange={handleFilterChange}
                    sx={{
                        '& .MuiInputBase-root': {
                            color: 'black', // text color
                        },
                        '& .MuiInputLabel-root': {
                            color: 'black', // label color
                            '&.Mui-focused': {
                                color: 'black', // label color when focused
                            },
                            '&:hover': {
                                color: 'black', // label color on hover
                            },
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'black', // default border color
                            },
                            '&:hover fieldset': {
                                borderColor: 'black', // border color on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'black', // border color when focused
                            },
                        },
                        '& .MuiInputBase-input': {
                            cursor: 'pointer', // change cursor to pointer for input area
                        },
                    }}

                />
            </div>
            <div className="d-flex flex-wrap justify-content-center Cards p-lg-5">
                {
                    cards.filter((card) =>
                        card.title.toLowerCase().includes(filter.toLowerCase()) ||
                        card.description.toLowerCase().includes(filter.toLowerCase())
                    ).map(card => (
                        <div key={card.id} onClick={() => handleCardClick(card.route)}>
                            <ImgMediaCard2
                                className="d-flex flex-wrap"
                                card={card}
                            />
                        </div>
                    ))
                }
            </div>
        </React.Fragment>
    );
};

export default Cards;
