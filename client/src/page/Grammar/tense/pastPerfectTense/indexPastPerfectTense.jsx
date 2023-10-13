import styles from '../../infomationPage.module.scss';
import ScrollToTop from '../../../../component/scrollToTopButton/indexScrollToTop';
import { Link } from 'react-router-dom';
import ScrollFunc from '../../scrollFunc';
import PATH from '../../../../config/routePathConfig';

const PastPerfectTense = () => {
    const I = 'Khái niệm thì quá khứ hoàn thành'
    const II = 'Cách dùng thì quá khứ hoàn thành'
    const III = 'Cấu trúc thì quá khứ hoàn thành'
    const IV = 'Các lưu ý về thì quá khứ hoàn thành'
    const IV_1 = 'Tìm hiểu V3(V_ed)'
    const V = 'Dấu hiệu nhận biết thì Quá khứ hoàn thành'
    ScrollFunc();
    return(
        <>  
            <ScrollToTop />
            <div className={styles.container}>
            <h1 className={styles.titlePage} id='section0'>Thì quá khứ hoàn thành<br/>(Past Perfect Tense)</h1>
            
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
                                
                            </ol>
                        </li>
                        <li>
                            <a className="toc-link" href={`#sectionV`}>{V}</a>
                        </li>
                    </ol>
                </div>
                <div className={styles.title1} id='sectionI'>I. {I}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Thì quá khứ hoàn thành - <span className={styles.important}>Past perfect tense</span> diễn tả một hành động <span className={styles.important}>xảy ra trước</span> một hành động khác trong quá khứ. Hoặc diễn tả một hành động hoàn tất trước một mốc thời gian trong quá khứ</p>
                <div className={styles.title1} id='sectionII'>II. {II}</div>
                <p className={styles.content2}>
                    <ol className={styles.usePastSimpleTense}>
                        <li>Diễn đạt một hành động <span className={styles.important}>hoàn tất trước khi một hành động khác xảy ra</span> trong quá khứ.
                            <ul>
                                <li>Hành động xãy ra trước =&gt; thì Quá khứ hoàn thành</li>
                                <li>Hành động xãy ra sau =&gt; thì <Link className={styles.linkPage} to={PATH.GRAMMAR_TENSE_PAST_SIMPLE + '/#section0'}>Quá khứ đơn</Link></li>
                            </ul>
                            <div>
                                <div><span className={styles.important}>Ex: </span>Last week, I visited my hometown. It had changed a lot. 
                                <br/>
                                (Tuần trước, tôi về thăm quê ngoại. Nó đã thay đổi rất nhiều)</div>
                            </div>
                        </li>
                        <li>Diễn đạt một hành động <span className={styles.important}>hoàn tất trước một mốc thời gian</span> trong quá khứ.</li>
                            <div>
                                <div><span className={styles.important}>Ex: </span>By 2010, Linh had completed two English courses. 
                                <br/>
                                (Trước năm 2010, Linh đã hoàn thành hai khóa học tiếng Anh).</div>
                            </div>
                    </ol>
                </p>
                    <div className={styles.title1} id='sectionIII'>III. {III}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Thì quá khứ hoàn thành được chia thành 3 dạng:</p>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th colSpan={2}>Công thức thì quá khứ hoàn thành</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={1} className={styles.col1}>Khẳng định</td>
                                <td className={styles.noTop}>S + had + V3(V_ed)</td>
                            </tr>
                            
                            <tr>
                                <td rowSpan={1} className={styles.col1}>Phủ định</td>
                                <td className={styles.noTop}>S + had + not + V3(V_ed)</td>
                            </tr>
                              <tr>
                                <td rowSpan={1} className={styles.col1}>Nghi vấn</td>
                                <td className={styles.noTop}>(Wh-) + had + S + V3(V_ed)?</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.title1} id='sectionIV'>IV. {IV}</div>
                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_1'/>1. {IV_1}</p>
                        <div className={styles.content4}>
                            Xem cụ thể về V3(V_ed) <Link className={styles.linkPage} to={PATH.GRAMMAR_TENSE_PRESENT_PERFECT + '/#sectionIV_3'}>tại đây</Link>
                        <br/>
                        <br/>
                        </div>
                    

                    <div className={styles.title1} id='sectionV'>V. {V}</div>
                    <p className={styles.content3}>Quá khứ hoàn thành thường được dùng kèm với các giới từ và liên từ như:</p>
                    <ul className={styles.content4}>
                        <li>Until then, prior to that time, as soon as, by, …</li>
                        <li>Before, after, when, by the time + S + V; by the end of + time in the past …</li>
                    </ul>
                    <p className={styles.content3}><span className={styles.important}>Ex:</span></p>
                    <ul className={styles.content4}>
                        <li><strong>When I got up this morning</strong>, my father <strong>had already left</strong>.<br/>(Khi tôi thức dậy sáng nay, cha tôi đã dời đi.)</li>
                        <br/>
                        <li><strong>By the time I met you, I had worked</strong> in that company for five years.<br/>(Vào thời điểm tôi gặp bạn, tôi đã làm việc trong công ty đó được năm năm.)</li>
                    </ul>
            </div>
        </>
    )
}

export default PastPerfectTense;