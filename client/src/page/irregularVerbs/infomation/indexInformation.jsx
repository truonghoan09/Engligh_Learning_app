import { Link } from 'react-router-dom';
import styles from './information.module.scss';
import ScrollToTop from '../../../component/scrollToTopButton/indexScrollToTop';
import ScrollFunc from '../../Grammar/scrollFunc';

const InformationIrregularVerbs = () => {
    const I = 'Định nghĩa'
    const II = 'Quy ước'
    const III = 'Các trường hợp sử dụng các thể QUÁ KHỨ và QUÁ KHỨ PHÂN TỪ của động từ'
    ScrollFunc()
    return (
        <>  
            <ScrollToTop/>
            <div className={styles.container}>
                <h1 className={styles.titlePage}>Irregular Verbs</h1>
                <div className={styles.toc}>
                    Mục lục
                    <ol type='I' className={styles.toc1}>
                        <li>
                            <a className="toc-link" href={`#sectionI`}>{I}</a>
                        </li>
                        <li>
                            <a className="toc-link" href={`#sectionII`}>{II}</a>
                        </li>
                        <li>
                            <a className="toc-link" href={`#sectionIII`}>{III}</a>
                        </li>
                    </ol>
                </div>
                <div className={styles.title1} id='sectionI'>I. {I}:</div>
                <div className={styles.content1}>
                <p><span class={styles.tab}></span>
                Irregular verbs trong tiếng Anh là một nhóm các động từ có 
                    <span className={styles.important}> hình thức thay đổi</span> khi chuyển từ dạng cơ bản sang các dạng khác như quá khứ đơn (simple past) và quá khứ phân từ (past participle). 
                </p>
                            
                <p><span class={styles.tab}></span>
                    <span className={styles.important}>
                    Khác với các động từ quy tắc
                    </span> (chỉ cần thêm -ed để thành lập từ), các <span className={styles.important}>động từ bất quy tắc KHÔNG tuân theo các quy tắc cụ thể</span>
                     , vì vậy bạn phải học từng động từ một để biết cách sử dụng chúng.  
                </p>
                </div>
                <div className={styles.title1} id='sectionII'>II. {II}:</div>
                <div className={styles.content1}>
                    <p>
                        <span className={styles.tab}/>Trong tài liệu này chúng ta có quy ước chung như sau:
                        <ul className={styles.content2}>
                            <li><span className={styles.important}>V1:</span> là động từ ở dạng nguyên thể <span className={styles.important}>(Infinitive Verb)</span></li>
                            <li><span className={styles.important}>V2:</span> là động từ ở dạng quá khứ <span className={styles.important}>(Past Tense)</span></li>
                            <li><span className={styles.important}>V3:</span> là động từ ở dạng quá khứ phân từ <span className={styles.important}>(Past participle)</span></li>
                        </ul>
                    </p>
                    
                </div>

                <div className={styles.title1} id='sectionIII'>III. {III}:</div>
                    <div className={styles.content2}>1. Thì quá khứ đơn <Link className={styles.linkPage} to={"/grammar/past_simple_tense"}>(Past Simple Tense)</Link></div>       
                    <div className={styles.content2}>2. Thì quá khứ hoàn thành <Link className={styles.linkPage} to={"/grammar/past_perfect_tense"}>(Past Perfect Tense)</Link></div>       
                    <div className={styles.content2}>3. Thì hiện tại hoàn thành <Link className={styles.linkPage} to={"/grammar/present_perfect_tense"}>(Present Perfect Tense)</Link></div>       
            </div>
        </>
    )
}

export default InformationIrregularVerbs;