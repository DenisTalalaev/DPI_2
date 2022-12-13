import React from "react";
import "./Body.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Developer from "./Developer/Developer";

const Body = (props) => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="gpt3__cta wow animate__animated animate__zoomIn">
                <div className="gpt3__cta-content">
                    {/* <p>Данный портал содержит информацию о писателях Беларуси</p> */}
                    <h3>
                        <img src={props.mainPerson.main_photo} alt="" />
                    </h3>
                </div>
                <div className="gpt3__features-container__feature-text">
                    <h1 className="gpt3__cta-content">{t("figure_of_the_day")}</h1>

                    <div className="gpt3__cta-content">{props.mainPerson.full_name}</div>
                    <div className="gpt3__cta-content">({props.mainPerson.life_dates})</div>
                    <div className="gpt3__cta-content">{props.mainPerson.short_information}</div>
                    <NavLink className="gpt3__footer-btn" to={props.mainPerson.url}>
                        <p>{t("more_info_button")}</p>
                    </NavLink>
                </div>
            </div>

            <div className="developers-block">
                {/* <h1>{t("developers")}</h1> */}
                <div className="developers-list">
                    {props.developers_info.map((developer) => (
                        <Developer info={developer} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Body;
