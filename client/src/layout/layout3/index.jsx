import { Outlet } from "react-router-dom"
import Header from "../../component/header/indexHeader";
import styles from './layout3.module.scss'
import VerticalNavBarGrammar from "../../page/Grammar/verticalNavBar/indexVerticalNavBarGrammar";

const Layout3 = () => {
    return(
        <>
            <Header/>
            <div className={styles.container}>
                <VerticalNavBarGrammar/>
                <div className={styles.outletContainer}>
                    <Outlet/>
                </div>
            </div>
        </>
    )
};

export default Layout3;