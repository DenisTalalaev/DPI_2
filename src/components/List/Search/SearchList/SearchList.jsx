import React from 'react';
import Card from '../Card/Card';
import './SearchList.css'

function SearchList(props) {
    return (
        <div className='filmmakers'>
            {props.filteredWriters.map(writer => <Card writer={writer} />)}
        </div>
    );
}

export default SearchList;