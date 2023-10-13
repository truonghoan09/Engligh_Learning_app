import styles from '../../infomationPage.module.scss';
import {Link} from 'react-router-dom';
import ScrollFunc from '../../scrollFunc';
import ScrollToTop from '../../../../component/scrollToTopButton/indexScrollToTop';

const SimplePresentTense = () => {
    const I = 'Khái niệm thì hiện tại đơn';
    const II = 'Cách dùng thì hiện tại đơn';
    const III = 'Cấu trúc thì hiện tại đơn';
    const IV = 'Các lưu ý về cách chia động từ';
    const IV_1 = 'Cách chia động từ Tobe';
    const IV_2 = 'Cách chia động từ thường';
    const IV_3 = 'Quy tắc chia động từ (s/es)';
    const IV_4 = 'Các cách viết tắt thường gặp';
    const V = 'Dấu hiệu nhận biết thì hiện tại đơn';
    ScrollFunc();
    return (
        <>  
            <ScrollToTop />
            <div className={styles.container}>
                <h1 className={styles.titlePage} id='section0'>Thì hiện tại đơn<br/>(Simple Present Tense)</h1>
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
                        <li>
                            <a className="toc-link" href={`#sectionIV`}>{IV}</a>
                            <ol className={styles.toc2}>
                                <li>
                                    <a className='toc-link' href={`#sectionIV_1`}>{IV_1}</a>
                                </li>
                                <li>
                                    <a className='toc-link' href={`#sectionIV_2`}>{IV_2}</a>
                                </li>
                                <li>
                                    <a className='toc-link' href={`#sectionIV_3`}>{IV_3}</a>
                                </li>
                                <li>
                                    <a className='toc-link' href={`#sectionIV_4`}>{IV_4}</a>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <a className="toc-link" href={`#sectionV`}>{V}</a>
                        </li>
                    </ol>
                </div>
                <div className={styles.title1} id='sectionI'>I. {I}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Thì hiện tại đơn - <span className={styles.important}>Simple Present Tense</span> dùng để diễn tả một sự thật hiển nhiên hay một hành động diễn ra lặp đi lặp lại theo thói quen, phong tục, khả năng.</p>
                <div className={styles.title1} id='sectionII'>II. {II}</div>
                <p className={styles.content2}>
                    Có 4 cách dùng thì hiện tại đơn trong cuộc sống hàng ngày
                    <ol className={styles.usePastSimpleTense}>
                        <li>Diễn đạt một thói quen hay hành động lặp đi lặp lại trong thời điểm hiện tại</li>
                        <li>Diễn tả 1 chân lý, 1 sự thật hiển nhiên</li>
                        <li>Diễn tả 1 sự việc xảy ra theo thời gian biểu cụ thể, như giờ tàu, máy bay chạy hay một lịch trình nào đó</li>
                        <li>Diễn tả trạng thái, cảm giác, cảm xúc của một chủ thể</li>
                    </ol>
                </p>
                    <div className={styles.title1} id='sectionIII'>III. {III}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Thì hiện tại đơn được chia thành 3 dạng:</p>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Động từ tobe</th>
                                <th>Động từ thường</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={1} className={styles.col1}>Khẳng định</td>
                                <td className={styles.noTop}>S + am/is/are + N/Adj</td>
                                <td className={styles.noTop}>S + V(s/es) + N/Adj</td>
                            </tr>
                            
                            <tr>
                                <td rowSpan={1} className={styles.col1}>Phủ định</td>
                                <td className={styles.noTop}>S + am/is/are + not + N/Adj</td>
                                <td className={styles.noTop}>S + do/ does + not + V1(nguyên thể)</td>
                            </tr>
                              <tr>
                                <td rowSpan={1} className={styles.col1}>Nghi vấn</td>
                                <td className={styles.noTop}>(Wh-) + am/is/are (not) + S + N/Adj?</td>
                                <td className={styles.noTop}>(Wh-) + do/does (not) + S + V1(nguyên thể)?</td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <div className={styles.title1} id='sectionIV'>IV. {IV}</div>
                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_1'/>1. {IV_1}</p>
                        <ol className={styles.content4}>
                            <li>I + am</li>
                            <li>You/We/They + are</li>
                            <li>He/She/It + is</li>
                        </ol>
                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_2'/>2. {IV_2}</p>
                        <ol className={styles.content4}>
                            <li>I/We/You/They/Danh từ số nhiều + V1(nguyên thể)</li>
                            <li>He/She/It/Danh từ số ít/Danh từ không đếm được + V(s/es)</li>
                        </ol>
                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_3'/>3. {IV_3}</p>
                    <p className={styles.content4}>Có 3 quy tắc chia động từ trong thì hiện tại đơn như sau:
                        <ol>
                            <li>Với các từ có tận cùng là <strong>“o“, “ch“, “sh“, “x“, “s”</strong> thì khi dùng với ngôi số ít, thêm đuôi “es”. Ví dụ: Go -Goes, Do - Does, Teach - Teaches, Mix - Mixes, Kiss - Kisses, Brush - Brushes.</li>
                            <li>Với các từ có tận cùng là “y” thì khi dùng với ngôi số ít, bỏ “y” và thêm đuôi “ies”  Ví dụ: Apology - Apologies; Ability - Abilities.</li>
                            <li>Với các từ còn lại, thêm đuôi “s”. (Get - Gets, Swim - Swims,…).</li>
                        </ol>
                    </p>

                    <p className={styles.content4}>Ngoài ra, bạn có thể tham khảo cách thêm s/es cho danh từ <Link className={styles.linkPage} to={'/grammar/about_s_es/#section0'}>tại đây</Link></p>
                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_4'/>4. {IV_4}</p>
                        <ol className={styles.content4}>
                            <li>I am = I'm</li>
                            <li>He is = He's</li>
                            <div className={styles.smallNote}><span className={`${styles.important}`}>*note:</span> Cách ký hiệu này cũng sẽ gặp lại ở phần ký hiệu của "He has,..." trong <Link to={'/grammar/present_perfect_tense'} className={styles.linkPage}>Present Perfect Tense</Link>, chúng ta sẽ phân biệt He's là "He is" hay "He has" dựa vào ngữ cảnh cụ thể<br/><br/></div>
                            <li>You are = You're</li>
                            <li>do not = don't</li>
                            <li>does not = doesn't</li>
                            <li>I am not = I'm not</li>
                            <li>is not = isn't</li>
                            <li>are not = aren't</li>
                        </ol>
                    <div className={styles.title1} id='sectionV'>V. {V}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Dấu hiệu nhận biết thì hiện tại đơn là trong câu xuất hiện những trạng từ chỉ tần suất như: 
                        <ul>
                            <li>always (thường xuyên)</li>
                            <li>frequently (thường xuyên)</li>
                            <li>usually  (thường thường)</li>
                            <li>often (thường)</li>
                            <li>generally (thường thường)</li>
                            <li>regularly (thường thường)</li>
                            <li>sometimes (thỉnh thoảng)</li>
                            <li>seldom (hiếm khi)</li>
                            <li>rarely (rất hiếm khi)</li>
                            <li>hardly(khó gặp)</li>
                            <li>every + khoảng thời gian (day, week, month, year,…)</li>
                            <li>once, twice, three times, four times… + khoảng thời gian (a day, week, month, year,…)</li>
                        </ul>
                    </p>
            </div>
        </>
    )
}

export default SimplePresentTense;