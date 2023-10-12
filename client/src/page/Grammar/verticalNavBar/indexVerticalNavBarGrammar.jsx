import { Link } from 'react-router-dom';
import styles from './verticalNavBarGrammar.module.scss' 
import { useState } from 'react';

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
                            className={`${styles.menu_item} ${location.pathname.indexOf("/grammar/tense/simple_present_tense") !== -1 ? styles.chooseOption: ''}`}
                            to={"/grammar/tense/simple_present_tense/#section0"}>
                                Simple Present Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf("/grammar/tense/present_continuous_tense") !== -1 ? styles.chooseOption: ''}`}
                            to={"/grammar/tense/present_continuous_tense/#section0"}>
                                Present Continuous Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf("/grammar/tense/present_perfect_tense") !== -1 ? styles.chooseOption: ''}`}
                            to={"/grammar/tense/present_perfect_tense/#section0"}>
                                Present Perfect Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf("/grammar/tense/present_perfect_continuous_tense") !== -1 ? styles.chooseOption: ''}`}
                            to={"/grammar/tense/present_perfect_continuous_tense/#section0"}>
                                Present Perfect Continuous Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf("/grammar/tense/past_simple_tense")!== -1 ? styles.chooseOption: ''}`}
                            to={"/grammar/tense/past_simple_tense/#section0"}>
                                Past Simple Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf("/grammar/tense/past_continuous_tense") !== -1 ? styles.chooseOption: ''}`}
                            to={"/grammar/tense/past_continuous_tense/#section0"}>
                                Past Continuous Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf("/grammar/tense/past_perfect_tense") !== -1 ? styles.chooseOption: ''}`}
                            to={"/grammar/tense/past_perfect_tense/#section0"}>
                                Past Perfect Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf("/grammar/tense/past_perfect_continuous_tense") !== -1 ? styles.chooseOption: ''}`}
                            to={"/grammar/tense/past_perfect_continuous_tense/#section0"}>
                                Past Perfect Continuous Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf("/grammar/tense/simple_future_tense") !== -1 ? styles.chooseOption: ''}`}
                            to={"/grammar/tense/simple_future_tense/#section0"}>
                                Simple Future Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf("/grammar/tense/future_continuous_tense") !== -1 ? styles.chooseOption: ''}`}
                            to={"/grammar/tense/future_continuous_tense/#section0"}>
                                Future Continuous Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf("/grammar/tense/future_perfect_tense")!== -1 ? styles.chooseOption: ''}`}
                            to={"/grammar/tense/future_perfect_tense/#section0"}>
                                Future Perfect Tense
                        </Link>
                        <Link
                            className={`${styles.menu_item} ${location.pathname.indexOf("/grammar/tense/future_perfect_continuous_tense") !== -1 ? styles.chooseOption: ''}`}
                            to={"/grammar/tense/future_perfect_continuous_tense/#section0"}>
                                Future Perfect Continuous Tense
                        </Link>
                    </div>
                </div>

                <Link
                className={`${styles.menu_item} ${location.pathname.indexOf("/grammar/about_s_es") !== -1 ? styles.chooseOption: ''}`} 
                to={"/grammar/about_s_es/#section0"}>
                    About (s/es)
                </Link>
                
            </div>
        </>
    )
}

export default VerticalNavBarGrammar;