import React, { useState } from "react";
import SearchList from "./SearchList/SearchList";
import "./Search.css";
import { useTranslation } from "react-i18next";
import { Form } from "react-bootstrap";

function Search(props) {
    const { t } = useTranslation();
    const [searchField, setSearchField] = useState("");
    const filteredWriters = props.info.filter((writer) =>
        writer.full_name.toLowerCase().includes(searchField.toLowerCase())
    );
    const handleChange = (e) => setSearchField(e.target.value);

    function searchList() {
        return <SearchList filteredWriters={filteredWriters} />;
    }

    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content wow animate__animated animate__fadeInLeft">
                <h1 className="gpt3__header-content">{t("search")}</h1>
                <Form className="gpt3__header-content__input">
                    <div className="gpt3__header-content__input">
                        <Form.Control
                            type="search"
                            className="gpt3__header-content__input"
                            aria-label="Search"
                            placeholder={t("search_placeholder")}
                            onChange={handleChange}
                        />
                    </div>
                </Form>
                {searchList()}
            </div>
        </div>
    );
}

export default Search;
