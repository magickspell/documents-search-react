import {useNavigate} from "react-router-dom";

export const SideMenu = (props: any) => {

    const navigate = useNavigate()

    return (
        <>
            <div className={"side-menu__wrapper"}
                 onClick={() => props.setVis(false)}
            >
                <div className={"side-menu"}
                     onClick={(e) => {
                         e.stopPropagation()
                     }}
                >
                    <button
                        onClick={() => props.setVis(false)}
                    >close
                    </button>
                    <ul>
                        <li
                            onClick={
                                () => {
                                    navigate("/main")
                                    props.setVis(false)
                                }
                            }
                        >Main
                        </li>
                        <li
                            onClick={
                                () => {
                                    navigate("/info")
                                    props.setVis(false)
                                }
                            }
                        >Info
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}