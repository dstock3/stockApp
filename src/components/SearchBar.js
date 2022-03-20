import React, { useState } from "react";
import { TextField } from "@mui/material";
import SearchLogo from "../assets/search.svg";
import "../css/Search.css";

const SearchBar = ({setInputField}) => {
    const [searchField, setSearchField] = useState("")

    const searchChangeHandler = e => {
        setSearchField(e.target.value);
    };

    const searchSubmit = e => {
        setInputField(searchField);
        e.preventDefault();
    }

    return (
        <form className="search-bar" onSubmit={searchSubmit}>
            <span onClick={searchSubmit} className="search-button">
                <img className="search-icon" src={SearchLogo} alt="magnifying glass logo"></img>
            </span>

            <TextField
                className="search-field"
                variant="filled"
                id="outlined-basic"
                onChange={searchChangeHandler}
                label="Search"
            />
        </form>
    );
};

export default SearchBar;
