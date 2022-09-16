import {Navbar} from "../components/Navbar";
import React from "react";
import {useNavigate} from "react-router-dom";

export const InfoPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <Navbar
                page={"Info Page"}
                path={"Menu"}
            />
            <div className={"info-page"}>
                <h3>Info Page</h3>
                <ul>
                    <li>This app generate first 8 documents with TODAY date.</li>
                    <li>Other documents generated with random date of current year.</li>
                </ul>
                <button
                    className={"not-found__btn"}
                    style={{height: 30, margin: 4}}
                    onClick={() => navigate("/main")}
                >Go Main
                </button>
            </div>
        </>
    )
}