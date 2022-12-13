import React from "react";
import Header from "./components/Home/Header/Header";
import Body from "./components/Home/Body/Body";
import developersInfo from "./data/developersInfo";
import List from "./components/List/List";
import Writer from "./components/Writer/Writer";
import { HashRouter, Route, Routes } from "react-router-dom";
import writersDatabase from "./data/writersDatabase";
import "./App.css";

const App = () => {
    const randomId = Math.floor(Math.random() * 5) + 1;
    let randomPerson;
    for (let i = 0; i < 5; i++) {
        if (writersDatabase[i].id === randomId)
            randomPerson = writersDatabase[i];
    }
    return (
        <div className="App">
            <div className="gradient__bg">
                <HashRouter>
                    <div>
                        <Header />
                        <div>
                            <Routes>
                                <Route
                                    path="/*"
                                    element={
                                        <Body
                                            mainPerson={randomPerson}
                                            developers_info={developersInfo}
                                        />
                                    }
                                />
                                <Route
                                    path="/list"
                                    element={<List info={writersDatabase} />}
                                />
                                {writersDatabase.map((writer) => (
                                    <Route
                                        path={writer.url}
                                        element={<Writer info={writer} />}
                                    />
                                ))}
                            </Routes>
                        </div>
                    </div>
                </HashRouter>
            </div>
        </div>
    );
};

export default App;
