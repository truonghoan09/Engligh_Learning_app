import { Outlet } from "react-router-dom"
import Header from "../../component/header/indexHeader";
import styles from './layout1.module.scss';

const Layout1 = () => {
    return(
        <>
            <Header/>
            <div className={styles.outletContainer}>
                <Outlet/>
            </div>
        </>
    )
};

export default Layout1;