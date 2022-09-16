import {Navbar} from "../components/Navbar";
import {useNavigate} from "react-router-dom";

export const NoRoute = () => {
    const navigate = useNavigate()
    return(
        <>
            <Navbar
                page={"Page not found =("}
                path={""}
            />

            <button
                className={"not-found__btn"}
                onClick={() => navigate("/info")}
            >
                Go Info
            </button>

        </>
    )
}