import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.scss"

const Header = () => {
    const location = useLocation();

    return(
        <>
            <div className={styles.container}>
                <div className={`${styles.menu_item} ${location.pathname === "/" ? styles.chooseOption: ''}`}>
                    <Link to={"/"}>Home</Link>
                </div>
                <div className={`${styles.menu_item} ${location.pathname === "/irregular_verbs" ? styles.chooseOption: ''}`}>
                    <Link to={"/irregular_verbs"}>Irregular Verbs</Link>
                </div>
                <div className={`${styles.menu_item} ${location.pathname === "/create_json" ? styles.chooseOption: ''}`}>
                    <Link to={"/create_json"}>Create JSON</Link>
                </div>
                <div className={`${styles.menu_item} ${location.pathname === "/add_irregular_verbs" ? styles.chooseOption: ''}`}>
                    <Link to={"/add_irregular_verbs"}>Add Irregular Verbs</Link>
                </div>
            </div>
        </>
    )
}

export default Header;