import React, {useState} from 'react';
import SearchList from './SearchList/SearchList';
import './Search.css'
import {useTranslation} from "react-i18next";
import {Form} from "react-bootstrap";

function Search(props) {
    const {t} = useTranslation();
    const [searchField, setSearchField] = useState("");
    const filteredWriters = props.info.filter(writer => writer.full_name.toLowerCase().includes(searchField.toLowerCase()));
    const handleChange = e => setSearchField(e.target.value);

    function searchList() {
        return (
            <SearchList filteredWriters={filteredWriters}/>
        );
    }

    return (
        <div className='search'>
                <Form className="d-flex">
                    <div className='search_fields'>
                    <div>
                        <h2>{t('search')}</h2>
                    </div>
                    <Form.Control
                        type="search"
                        className="me-2"
                        aria-label="Search"
                        placeholder={t('search_placeholder')}
                        onChange={handleChange}
                    />
                    </div>
                </Form>
            {searchList()}
        </div>
    );
}

export default Search;