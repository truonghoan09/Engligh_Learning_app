import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.scss"

const Header = () => {
    const location = useLocation();

    return(
        <>
            <div className={styles.container}>
                <Link 
                className={`${styles.menu_item} ${location.pathname === "/" ? styles.chooseOption: ''}`} 
                to={"/"}>
                    Home
                </Link>

                
                <Link 
                className={`${styles.menu_item} ${location.pathname.indexOf("/irregular_verbs") !== -1 ? styles.chooseOption: ''}`} 
                to={"/irregular_verbs/dictionary"}>
                    Irregular Verbs
                </Link>
                
            </div>
        </>
    )
}

export default Header;