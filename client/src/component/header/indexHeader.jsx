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
                    Overview
                </Link>

                
                <Link 
                className={`${styles.menu_item} ${location.pathname.indexOf("/irregular_verbs") !== -1 ? styles.chooseOption: ''}`} 
                to={"/irregular_verbs/information"}>
                    Irregular Verbs
                </Link>

                <Link
                className={`${styles.menu_item} ${location.pathname.indexOf("/grammar") !== -1 ? styles.chooseOption: ''}`} 
                to={"/grammar/tense/simple_present_tense/#section0"}>
                    Grammar         
                </Link>
                
            </div>
        </>
    )
}

export default Header;