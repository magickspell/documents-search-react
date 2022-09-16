import React from 'react';
import {MainPage} from "./views/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NoRoute} from "./views/NoRoute";
import {InfoPage} from "./views/InfoPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route element={<MainPage/>} path={"/"} />
                    <Route element={<MainPage/>} path={"/main"} />
                    <Route element={<InfoPage/>} path={"/info"} />
                    <Route element={<NoRoute/>} path={"*"} />

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
