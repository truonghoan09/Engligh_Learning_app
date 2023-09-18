import { Outlet } from "react-router-dom"
import Header from "../../component/header/indexHeader";
import styles from './layout2.module.scss'
import VerticalNavBar from "../../page/irregularVerbs/verticalNavBar/indexVerticalNavBar";

const Layout2 = () => {
    return(
        <>
            <Header/>
            <div className={styles.container}>
                <VerticalNavBar/>
                <div className={styles.outletContainer}>
                    <Outlet/>
                </div>
            </div>
        </>
    )
};

export default Layout2;