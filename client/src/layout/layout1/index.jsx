import { Outlet } from "react-router-dom"
import Header from "../../component/header/indexHeader";

const Layout1 = () => {
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
};

export default Layout1;