import { useRoutes } from "react-router-dom"
import PATH from "../../config/routePathConfig"
import Layout1 from "../../layout/layout1"
import IrregularVerb from "../../page/irregularVerbs/dictionary/indexIrregularVerb"
import CreateJson from "../../module/createJson/indexCreateJson"
import AddIrregularVerbs from "../../module/addIrregularVerbs/indexAddIrregularVerbs"
import Layout2 from "../../layout/layout2"
import IrregularVerbExercise from "../../page/irregularVerbs/exercise/indexIrregularVerbsExercise"
import InformationIrregularVerbs from "../../page/irregularVerbs/infomation/indexInformation"
import PastSimpleTense from "../../page/Grammar/tense/pastSimpleTense/indexPastSimpleTense"
import Layout3 from "../../layout/layout3"
import SimplePresentTense from "../../page/Grammar/tense/simplePresentTense/indexSimplePresentTense"
import PresentContinuousTense from "../../page/Grammar/tense/presentContinuousTense/indexPresentContinuousTense"
import PresentPerfectTense from "../../page/Grammar/tense/presentPerfectTense/indexPresentPerfectTense"
import PresentPerfectContinuousTense from "../../page/Grammar/tense/presentPerfectContinuousTense/indexPresentPerfectContinuousTense"
import PastContinuousTense from "../../page/Grammar/tense/pastContinuousTense/indexPastContinuousTense"
import PastPerfectTense from "../../page/Grammar/tense/pastPerfectTense/indexPastPerfectTense"
import PastPerfectContinuousTense from "../../page/Grammar/tense/pastPerfectContinuousTense/indexPastPerfectContinuousTense"
import SimpleFutureTense from "../../page/Grammar/tense/simpleFutureTense/indexSimpleFutureTense"
import FutureContinuousTense from "../../page/Grammar/tense/futureContinuousTense/indexFutureContinuousTense"
import FuturePerfectTense from "../../page/Grammar/tense/futurePerfectTense/indexFuturePerfectTense"
import FuturePerfectContinuousTense from "../../page/Grammar/tense/futurePerfectContinuousTense/indexFuturePerfectContinuousTense"
import About_s_es from "../../page/Grammar/about_s_es/indexAboutSEs"
import Overview from "../../page/Overview/indexOverview"

const AppRoutes = () => {
    const element = useRoutes([
        {
            path: PATH.HOME,
            element: <Layout1 />,
            children: [
                {
                    index: true,
                    element: <Overview />,
                }
            ]
        },
        {
            path: PATH.IRREGULAR_VERBS,
            element: <Layout2 />,
            children: [
                {
                    path: "information",
                    element: <InformationIrregularVerbs />
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
        {
            path: PATH.GRAMMAR,
            element: <Layout3 />,
            children: [
                {
                    path: "tense",
                    children: [
                        {
                            path: "simple_present_tense",
                            element: <SimplePresentTense />
                        },
                        {
                            path: "present_continuous_tense",
                            element: <PresentContinuousTense />
                        },
                        {
                            path: "present_perfect_tense",
                            element: <PresentPerfectTense />
                        },
                        {
                            path: "present_perfect_continuous_tense",
                            element: <PresentPerfectContinuousTense />
                        },
                        {
                            path: "past_simple_tense",
                            element: <PastSimpleTense />
                        },
                        {
                            path: "past_continuous_tense",
                            element: <PastContinuousTense />
                        },
                        {
                            path: "past_perfect_tense",
                            element: <PastPerfectTense />
                        },
                        {
                            path: "past_perfect_continuous_tense",
                            element: <PastPerfectContinuousTense />
                        },
                        {
                            path: "simple_future_tense",
                            element: <SimpleFutureTense />
                        },
                        {
                            path: "future_continuous_tense",
                            element: <FutureContinuousTense />
                        },
                        {
                            path: "future_perfect_tense",
                            element: <FuturePerfectTense />
                        },
                        {
                            path: "future_perfect_continuous_tense",
                            element: <FuturePerfectContinuousTense />
                        }
                    ]
                },
                {
                    path: "about_s_es",
                    element: <About_s_es />
                },
            ]
        },
    ])
    return element;
}

export default AppRoutes