import { useRoutes } from "react-router-dom"
import PATH from "../../config/routePathConfig"
import Layout1 from "../../layout/layout1"
import Home from "../../page/Home/indexHome"
import IRREGULAR_VERBS from "../../page/irregularVerbs/indexIrregularVerb"
import AddWord from "../../module/addWord/indexAddWord"

const AppRoutes = () => {
    const element = useRoutes([
        {
            path: PATH.HOME,
            element: <Layout1 />,
            children: [
                {
                    index: true,
                    element: <Home />,
                }
            ]
        },
        {
            path: PATH.IRREGULAR_VERBS,
            element: <Layout1 />,
            children: [
                {
                    index: true,
                    element: <IRREGULAR_VERBS />,
                }
            ]
        },
        {
            path: PATH.ADD_WORD,
            element: <Layout1 />,
            children: [
                {
                    index: true,
                    element: <AddWord />,
                }
            ]
        },
    ])
    return element;
}

export default AppRoutes