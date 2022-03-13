import React from "react";
import { TextField } from "@mui/material";
import SearchLogo from "../assets/search.svg";
import "../css/Search.css";

const SearchBar = ({setInputField}) => {
    const searchHandler = (e) => {
        let searchTerm = e.target.value.toLowerCase();
        setInputField(searchTerm);
    };

    return (
        <div className="search-bar">
        <img src={SearchLogo} alt="magnifying glass logo"></img>
        <TextField
            id="outlined-basic"
            onChange={searchHandler}
            variant="outlined"
            label="Search"
        />
        </div>
    );
};

export default SearchBar;
