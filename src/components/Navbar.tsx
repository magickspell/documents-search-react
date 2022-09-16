import {SideMenu} from "./SideMenu";
import {useState} from "react";

require("../style/navbar.scss")

interface NavbarPropsInt {
    page?: string,
    path?: string,
    url?: string,
}

export const Navbar = (props: NavbarPropsInt) => {

    let [vis, setVis] = useState(false)

    return (
        <nav>
            <ul>
                <li>
                    <h1>{props.page}</h1>
                </li>
                <li
                    onClick={() => setVis(!vis)}
                >
                    {props.path}
                </li>
            </ul>

            {
                (vis)
                    ? <SideMenu setVis={setVis}/>
                    : []
            }

        </nav>
    )
}