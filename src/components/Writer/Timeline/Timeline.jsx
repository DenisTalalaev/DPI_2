import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {ReactComponent as ToyIcon} from "../../../data/imgs/svgs/toy.svg";
import {ReactComponent as BookIcon} from "../../../data/imgs/svgs/book.svg";
import {ReactComponent as WorkIcon} from "../../../data/imgs/svgs/work.svg";
import {ReactComponent as ChillIcon} from "../../../data/imgs/svgs/chill.svg";

const Timeline = (props) => {
    let toyIconStyles = {background: "#FF83FCFF"};
    let bookIconStyles = {background: "#f9c74f"};
    let workIconStyles = {background: "#06D6A0"};
    let chillIconStyles = {background: "#f53c3c"};
    return (
        <VerticalTimeline>
            {props.info.map((element) => {
                let style;
                let icon;
                if (element.icon === "toy") {
                    style = toyIconStyles
                    icon = <ToyIcon/>
                } else if (element.icon === "book") {
                    style = bookIconStyles
                    icon = <BookIcon/>
                } else if (element.icon === "work") {
                    style = workIconStyles
                    icon = <WorkIcon/>
                } else if (element.icon === "chill") {
                    style = chillIconStyles
                    icon = <ChillIcon/>
                }
                return (
                    <VerticalTimelineElement
                        key={element.id}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={style}
                        icon={icon}
                    >
                        <h3 className="vertical-timeline-element-title">
                            {element.title}
                        </h3>
                        <p id="description">{element.description}</p>
                    </VerticalTimelineElement>
                );
            })}
        </VerticalTimeline>
    );
};

export default Timeline;