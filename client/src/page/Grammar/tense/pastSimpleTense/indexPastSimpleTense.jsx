import styles from '../../infomationPage.module.scss';
import ScrollToTop from '../../../../component/scrollToTopButton/indexScrollToTop';
import { Link } from 'react-router-dom';
import ScrollFunc from '../../scrollFunc';
import PATH from "../../../../config/routePathConfig";

const PastSimpleTense = () => {
    const I = 'Khái niệm thì quá khứ đơn'
    const II = 'Cách dùng thì quá khứ đơn'
    const III = 'Cấu trúc thì quá khứ đơn'
    const IV = 'Các lưu ý về thì quá khứ đơn'
    const IV_1 = 'Cách chia Was/Were'
    const IV_2 = 'Tìm hiểu V2(V_ed)'
    const IV_3 = 'Quy tắc thêm "ed" cho động từ'
    const IV_4 = 'Quy tắc phát âm "ed" cho động từ'
    const V = 'Dấu hiệu nhận biết thì Quá khứ đơn'
    ScrollFunc();
    return(
        <>  
            <ScrollToTop />
            <div className={styles.container}>
            <h1 className={styles.titlePage} id='section0'>Thì quá khứ đơn<br/>(Past Simple Tense)</h1>
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
                    <p className={styles.content2}><span className={styles.tab}/>Thì quá khứ đơn - <span className={styles.important}>Past simple tense</span> diễn tả một hành động, sự việc <span className={styles.important}>diễn ra và kết thúc trong quá khứ.</span> Thì quá khứ đơn là một trong 12 thì trong tiếng anh</p>
                <div className={styles.title1} id='sectionII'>II. {II}</div>
                    <ol className={`${styles.usePastSimpleTense} ${styles.content2}`}>
                        <li>Diễn tả một hành động, sự việc đã diễn ra tại <span className={styles.important}>một thời điểm cụ thể</span>, hoặc <span className={styles.important}>một khoảng thời gian trong quá khứ</span> và <span className={styles.important}>đã kết thúc hoàn toàn ở quá khứ</span></li>
                        <li>Diễn tả một hành động <span className={styles.important}>lặp đi lặp lại trong quá khứ</span></li>
                        <li>Diễn đạt các hành động <span className={styles.important}>xảy ra liên tiếp trong quá khứ</span></li>
                        <li>Diễn tả một hành động <span className={styles.important}>xen vào một hành động đang diễn ra trong quá khứ</span></li>
                        <li>Dùng trong <span className={styles.important}>câu điều kiện loại II</span></li>
                        <li>Dùng trong <span className={styles.important}>câu ước không có thật</span></li>
                    </ol>
                    <div className={styles.title1} id='sectionIII'>III. {III}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Thì quá khứ đơn được chia thành 3 dạng:</p>
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
                                <td className={styles.noTop}>S + was/were + N/Adj</td>
                                <td className={styles.noTop}>S + V2(V_ed) + N/Adj</td>
                            </tr>
                            
                            <tr>
                                <td rowSpan={1} className={styles.col1}>Phủ định</td>
                                <td className={styles.noTop}>S + was/were + not + N/Adj</td>
                                <td className={styles.noTop}>S + did not (didn't) + V1(nguyên thể)</td>
                            </tr>
                              <tr>
                                <td rowSpan={1} className={styles.col1}>Nghi vấn</td>
                                <td className={styles.noTop}>(Wh-) + was/were (not) + S + N/Adj?</td>
                                <td className={styles.noTop}>(Wh-) + did (not) + S + V1(nguyên thể)?</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.title1} id='sectionIV'>IV. {IV}</div>
                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_1'/>1. {IV_1}</p>
                        <ol className={styles.content4}>
                            <li>I/You/We/They + were</li>
                            <li>He/She/It + was</li>
                        </ol>
                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_2'/>2. {IV_2}</p>
                        <div className={styles.content4}>
                            V2(V_ed) nói chính xác là dạng quá khứ (Past Tense) của một động từ trong tiếng anh
                            <br></br>
                            <br></br>
                            Cách để thành lập một V2(V_ed) đó là thêm vào phía sau của động từ hậu tố "ed"; <span className={styles.important}>Quy tắc cụ thể sẽ được trình bày tại phần IV_3 của bài này!</span>
                            <br/>
                            <br/>
                            Tuy nhiên có một số từ trong tiếng anh có dạng (Past Tense) <span className={styles.important}>không theo quy tắc</span> thêm hậu tố "ed" mà có hẳn một từ cho thể Past Tense; Và ta gọi đó là <span className={styles.important}>Irregular Verbs</span>, Tham khảo bảng động tại <Link className={styles.linkPage} to={PATH.IRREGULAR_VERBS + '/information'}>Irregular Verbs</Link>
                            <br/>
                            <br/>
                        </div>
                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_3'/>3. {IV_3}</p>
                        <ul className={styles.content4}>
                            <li>Với hầu hết các động từ, ta chỉ cần thêm "ed" vào cuối</li>
                            <div><span className={styles.important}>Ex:</span>
                                <ul>
                                    <li>work - worked</li>
                                    <li>clean - cleaned</li>
                                </ul>
                            </div>
                            <li>Với những động từ kết thúc bằng âm "e", ta chỉ cần thêm "d" vào</li>
                            <div><span className={styles.important}>Ex:</span>
                                <ul>
                                    <li>dance - danced</li>
                                    <li>hope - hoped</li>
                                </ul>
                            </div>
                            <li>Với những động từ kết thúc bằng một phụ âm + âm "y", ta sẽ đổi "y" thành "i" rồi sau đó thêm "ed"</li>
                            <div><span className={styles.important}>Ex:</span>
                                <ul>
                                    <li>study - studied</li>
                                    <li>apply - applied</li>
                                </ul>
                            </div>
                            <li>Với những động từ có kết thúc là: (phụ âm - nguyên âm - phụ âm) thì ta gấp đôi âm cuối trước rồi thêm "ed"</li>
                            <div><span className={styles.important}>Ex:</span>
                                <ul>
                                    <li>plan - planned</li>
                                    <li>rob - robbed</li>
                                    <li>prefer - preferred</li>
                                </ul>
                            </div>
                        </ul>
                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_4'/>4. {IV_4}</p>
                    <ol className={styles.content4}>
                        <li>"ed" phát âm là /t/: Khi động từ kết thúc bằng âm /s/, /f/, /p/, /ʃ/, /tʃ/, /k/.</li>
                        <li>"ed" phát âm là /id/: Khi động từ kết thúc bằng âm /t/ hoặc /d/.</li>
                        <li>"ed" phát âm là /d/: Với những trường hợp còn lại.</li>
                    </ol>
                            

                    <div className={styles.title1} id='sectionV'>V. {V}</div>
                    <p className={styles.content2}><span className={styles.tab}/>- Yesterday, ago, last (week, year, month), in the past, the day before, với những khoảng thời gian đã qua trong ngày (today, this morning, this afternoon).</p>
                    <p className={styles.content2}><span className={styles.tab}/>- Sau as if, as though (như thể là), it's time (đã đến lúc), if only, wish (ước gì), would sooner/ rather (thích hơn)</p>

            </div>
        </>
    )
}

export default PastSimpleTense;