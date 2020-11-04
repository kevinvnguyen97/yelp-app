import React from "react";

import { CardColumns } from "react-bootstrap";

import SearchCard from "../../components/SearchCard";

function Search(props) {
    return (
        <CardColumns>
            {props.searchResults.map(result =>
                <SearchCard result={result} searchDetails={props.searchDetails}/>
            )}
        </CardColumns>
    )
}

export default Search;