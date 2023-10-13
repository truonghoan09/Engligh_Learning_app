import { Link } from 'react-router-dom';
import styles from './verticalNavBarGrammar.module.scss' 
import { useState } from 'react';
import PATH from '../../../config/routePathConfig';

const VerticalNavBarGrammar = () => {
    const [openMenuTense, setOpenMenuTense] = useState(true)
    return  (
        <>
            <div className={styles.container}>
                
                <div className={`${styles.containerMenuManyGrade} ${location.pathname.indexOf("/grammar/tense/") !== -1 && styles.gradeManyGradeChoose}`}>
                    <div className={`${styles.nameGrade1}`}
                        onClick={() => {setOpenMenuTense(!openMenuTense)}}
                    >
                        {openMenuTense ? 
                            //True => menu đang được mở => dấu mũi tên xuống
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                            </svg>
                             :
                            //false => menu đang đóng => dấu mũi tên qua phải
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                            </svg>
                        }
                        
                        Tense
                    </div>
    
                    <div className={openMenuTense ? styles.menuGrade2On : styles.menuGrade2Off}>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf(PATH.GRAMMAR_TENSE_SIMPLE_PRESENT) !== -1 ? styles.chooseOption: ''}`}
                            to={PATH.GRAMMAR_TENSE_SIMPLE_PRESENT + "/#section0"}>
                                Simple Present Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf(PATH.GRAMMAR_TENSE_PRESENT_CONTINUOUS) !== -1 ? styles.chooseOption: ''}`}
                            to={PATH.GRAMMAR_TENSE_PRESENT_CONTINUOUS + "/#section0"}>
                                Present Continuous Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf(PATH.GRAMMAR_TENSE_PRESENT_PERFECT) !== -1 ? styles.chooseOption: ''}`}
                            to={PATH.GRAMMAR_TENSE_PRESENT_PERFECT + "/#section0"}>
                                Present Perfect Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf(PATH.GRAMMAR_TENSE_PRESENT_PERFECT_CONTINUOUS) !== -1 ? styles.chooseOption: ''}`}
                            to={PATH.GRAMMAR_TENSE_PRESENT_PERFECT_CONTINUOUS + "/#section0"}>
                                Present Perfect Continuous Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf(PATH.GRAMMAR_TENSE_PAST_SIMPLE)!== -1 ? styles.chooseOption: ''}`}
                            to={PATH.GRAMMAR_TENSE_PAST_SIMPLE + "/#section0"}>
                                Past Simple Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf(PATH.GRAMMAR_TENSE_PAST_CONTINUOUS) !== -1 ? styles.chooseOption: ''}`}
                            to={PATH.GRAMMAR_TENSE_PAST_CONTINUOUS + "/#section0"}>
                                Past Continuous Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf(PATH.GRAMMAR_TENSE_PAST_PERFECT) !== -1 ? styles.chooseOption: ''}`}
                            to={PATH.GRAMMAR_TENSE_PAST_PERFECT + "/#section0"}>
                                Past Perfect Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf(PATH.GRAMMAR_TENSE_PAST_PERFECT_CONTINUOUS) !== -1 ? styles.chooseOption: ''}`}
                            to={PATH.GRAMMAR_TENSE_PAST_PERFECT_CONTINUOUS + "/#section0"}>
                                Past Perfect Continuous Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf(PATH.GRAMMAR_TENSE_SIMPLE_FUTURE) !== -1 ? styles.chooseOption: ''}`}
                            to={PATH.GRAMMAR_TENSE_SIMPLE_FUTURE + "/#section0"}>
                                Simple Future Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf(PATH.GRAMMAR_TENSE_FUTURE_CONTINUOUS) !== -1 ? styles.chooseOption: ''}`}
                            to={PATH.GRAMMAR_TENSE_FUTURE_CONTINUOUS + "/#section0"}>
                                Future Continuous Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf(PATH.GRAMMAR_TENSE_FUTURE_PERFECT)!== -1 ? styles.chooseOption: ''}`}
                            to={PATH.GRAMMAR_TENSE_FUTURE_PERFECT + "/#section0"}>
                                Future Perfect Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf(PATH.GRAMMAR_TENSE_FUTURE_PERFECT_CONTINUOUS) !== -1 ? styles.chooseOption: ''}`}
                            to={PATH.GRAMMAR_TENSE_FUTURE_PERFECT_CONTINUOUS + "/#section0"}>
                                Future Perfect Continuous Tense
                        </Link>
                    </div>
                </div>

                <Link
                className={`${styles.menu_item} ${location.pathname.indexOf(PATH.GRAMMAR_ABOUT_S_ES) !== -1 ? styles.chooseOption: ''}`} 
                to={PATH.GRAMMAR_ABOUT_S_ES + "/#section0"}>
                    About (s/es)
                </Link>
                
            </div>
        </>
    )
}

export default VerticalNavBarGrammar;