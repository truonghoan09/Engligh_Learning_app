import { Link } from 'react-router-dom';
import styles from './verticalNavBarIrregularVerbs.module.scss' 

const VerticalNavBarIrregularVerbs = () => {
    return  (
        <>
            <div className={styles.container}>
                
                <Link
                className={`${styles.menu_item} ${location.pathname === "/irregular_verbs/information" ? styles.chooseOption: ''}`} 
                to={"/irregular_verbs/information"}>
                    Information
                </Link>

                <Link
                className={`${styles.menu_item} ${location.pathname === "/irregular_verbs/dictionary" ? styles.chooseOption: ''}`} 
                to={"/irregular_verbs/dictionary"}>
                    Dictionary
                </Link>
                
                <Link 
                className={`${styles.menu_item} ${location.pathname === "/irregular_verbs/exercise" ? styles.chooseOption: ''}`}
                to={"/irregular_verbs/exercise"}>
                    Exercise
                </Link>

                <Link 
                className={`${styles.menu_item} ${location.pathname === "/irregular_verbs/create_json" ? styles.chooseOption: ''}`} 
                to={"/irregular_verbs/create_json"}>
                    Create JSON
                </Link>

                <Link 
                className={`${styles.menu_item} ${location.pathname === "/irregular_verbs/add_irregular_verbs" ? styles.chooseOption: ''}`} 
                to={"/irregular_verbs/add_irregular_verbs"}>
                    Add Irregular Verbs
                </Link>
                
                
                
            </div>
        </>
    )
}

export default VerticalNavBarIrregularVerbs;