import { Outlet } from "react-router-dom"
import Header from "../../component/header/indexHeader";
import styles from './layout2.module.scss'
import VerticalNavBarIrregularVerbs from "../../page/irregularVerbs/verticalNavBar/indexVerticalNavBarIrregularVerbs";

const Layout2 = () => {
    return(
        <>
            <Header/>
            <div className={styles.container}>
                <VerticalNavBarIrregularVerbs/>
                <div className={styles.outletContainer}>
                    <Outlet/>
                </div>
            </div>
        </>
    )
};

export default Layout2;