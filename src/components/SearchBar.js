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
            <img src={SearchLogo} alt="magnifying glass logo"></img>
            <TextField
                id="outlined-basic"
                onChange={searchChangeHandler}
                variant="outlined"
                label="Search"
            />
        </form>
    );
};

export default SearchBar;
