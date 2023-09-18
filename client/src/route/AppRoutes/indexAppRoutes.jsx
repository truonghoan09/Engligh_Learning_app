import { useRoutes } from "react-router-dom"
import PATH from "../../config/routePathConfig"
import Layout1 from "../../layout/layout1"
import Home from "../../page/Home/indexHome"
import IrregularVerb from "../../page/irregularVerbs/dictionary/indexIrregularVerb"
import CreateJson from "../../module/createJson/indexCreateJson"
import AddIrregularVerbs from "../../module/addIrregularVerbs/indexAddIrregularVerbs"
import Layout2 from "../../layout/layout2"
import IrregularVerbExercise from "../../page/irregularVerbs/exercise/indexIrregularVerbsExercise"

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
            element: <Layout2 />,
            children: [
                {
                    index: true,
                    element: <IrregularVerb />,
                }
                ,
                {
                    path: "dictionary",
                    element: < IrregularVerb/>
                }
                ,
                {
                    path: "exercise",
                    element: <IrregularVerbExercise />
                }
                ,
                {
                    path: "create_json",
                    element: <CreateJson />,
                }
                ,
                {
                    path: "add_irregular_verbs",
                    element: <AddIrregularVerbs />
                }
            ]
        },
        
    ])
    return element;
}

export default AppRoutes