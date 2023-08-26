import { Link } from "react-router-dom";
import styles from "./header.module.scss"
import { useState } from "react";


const Header = () => {
    const [active, setActive] = useState(0);

    return(
        <>
            <div className={styles.container}>
                <div className={`${styles.menu_item} ${active === 0 ? styles.chooseOption: ''}`} onClick={() => setActive(0)}>
                    <Link to={"/"}>Home</Link>
                </div>
                <div className={`${styles.menu_item} ${active === 1 ? styles.chooseOption: ''}`} onClick={() => setActive(1)}>
                    <Link to={"/irregular_verbs"}>Irregular Verbs</Link>
                </div>
                <div className={`${styles.menu_item} ${active === 2 ? styles.chooseOption: ''}`} onClick={() => setActive(2)}>
                    <Link to={"/add_word"}>Add Word</Link>
                </div>
            </div>
        </>
    )
}

export default Header;