import React from 'react';
import Search from "./Search/Search";

const List = (props) => {
    return (
        <div>
            <Search info={props.info}/>
        </div>
    );
};

export default List;