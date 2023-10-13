import styles from '../../infomationPage.module.scss';
import ScrollFunc from '../../scrollFunc';
import ScrollToTop from '../../../../component/scrollToTopButton/indexScrollToTop';
import { Link } from 'react-router-dom';
import PATH from '../../../../config/routePathConfig';

const PresentPerfectTense = () => {
    const I = 'Khái niệm thì hiện tại hoàn thành';
    const II = 'Cách dùng thì hiện tại hoàn thành';
    const III = 'Cấu trúc thì hiện tại hoàn thành';
    const IV = 'Các lưu ý về thì Hiện tại hoàn thành';
    const IV_1 = 'Cách chia Have/Has';
    const IV_2 = 'Các cách viết tắt thường gặp';
    const IV_3 = 'Quy tắc thành lập V3';
    const IV_4 = 'Phân biệt thì Hiện tại hoàn thành và quá khứ đơn';
    const IV_5 = 'Phân biệt “Have gone to” và “Have been to”';
    const V = 'Dấu hiệu nhận biết thì hiện tại hoàn thành';
    ScrollFunc();
    return (
        <>
            <ScrollToTop />
            <div className={styles.container}>
                <h1 className={styles.titlePage} id='section0'>Thì hiện hoàn thành<br/>(Present Perfect Tense)</h1>
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
                                <li>
                                    <a className='toc-link' href={`#sectionIV_5`}>{IV_5}</a>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <a className="toc-link" href={`#sectionV`}>{V}</a>
                        </li>
                    </ol>
                </div>
                <div className={styles.title1} id='sectionI'>I. {I}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Thì hiện tại hoàn thành - <span className={styles.important}>(Present perfect tense)</span> dùng để diễn tả một hành động, sự việc <span className={styles.important}>đã hoàn thành tính đến thời điểm hiện tại </span>mà <span className={styles.important}>KHÔNG đề cập tới</span> hành động, sự việc đó <span className={styles.important}>xảy ra cụ thể khi nào.</span> Hành động, sự việc này <span className={styles.important}>đã bắt đầu từ trong quá khứ, kéo dài đến hiện tại và có thể tiếp tục tiếp diễn trong tương lai</span></p>
                <div className={styles.title1} id='sectionII'>II. {II}</div>
                <p className={styles.content2}>
                Có 4 cách dùng thì hiện tại hoàn thành cơ bản như sau:
                    <ol className={styles.usePastSimpleTense}>
                        <li>Diễn đạt hành động bắt đầu trong quá khứ và kéo dài đến hiện tại</li>
                        <li>Diễn đạt kết quả của hành động đã xảy ra trong quá khứ (tuy nhiên không rõ là xảy ra tại lúc nào)</li>
                        <li>Dùng với so sánh hơn nhất và các cụm The first/ last/ second… </li>
                        <li>Diễn đạt một hành động đã xảy ra nhiều lần từ quá khứ đến hiện tại</li>
                    </ol>
                </p>
                    <div className={styles.title1} id='sectionIII'>III. {III}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Thì hiện tại hoàn thành được chia thành 3 dạng:</p>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th colSpan={2}>Công thức thì hiện tại hoàn thành</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={1} className={styles.col1}>Khẳng định</td>
                                <td className={styles.noTop}>S + have/has + V3(V_ed)</td>
                            </tr>
                            
                            <tr>
                                <td rowSpan={1} className={styles.col1}>Phủ định</td>
                                <td className={styles.noTop}>S + have/has + not + V3(V_ed)</td>
                            </tr>
                              <tr>
                                <td rowSpan={1} className={styles.col1}>Nghi vấn</td>
                                <td className={styles.noTop}>(Wh-) + have/has + S + V3(V_ed)?</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.title1} id='sectionIV'>IV. {IV}</div>
                    
                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_1'/>1. {IV_1}</p>
                        <ol className={styles.content4}>
                            <li>I/You/We/They + have</li>
                            <li>He/She/It + has</li>
                        </ol>

                        <p className={styles.title2}><span className={styles.tab} id='sectionIV_2'/>2. {IV_2}</p>
                        <ol className={styles.content4}>
                            <li>have not = haven't</li>
                            <li>has not = hasn't</li>
                            <li>He has = He's</li>
                            <li>She has = She's</li>
                            <li>It has = It's</li>
                            <li>I have = I've</li>
                            <li>They have = They've <br></br>...</li>
                        </ol>                                                                                   


                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_3'/>3. {IV_3}</p>
                    <div className={styles.content4}>
                            V3(V_ed) nói chính xác là dạng quá khứ phân từ (Past participle) của một động từ trong tiếng anh
                            <br></br>
                            <br></br>
                            Cách để thành lập một V3(V_ed) đó là thêm vào phía sau của động từ hậu tố "ed"; <span className={styles.important}>Quy tắc cụ thể có thể tham khảo tại phần <Link className={styles.linkPage} to={PATH.GRAMMAR_TENSE_PAST_SIMPLE + "/#sectionIV_3"}>IV_3 của phần Past Simple Tense</Link></span>
                            <br/>
                            <br/>
                            Tuy nhiên có một số từ trong tiếng anh có dạng (Past participle) <span className={styles.important}>không theo quy tắc</span> thêm hậu tố "ed" mà có hẳn một từ cho thể Past participle; Và ta gọi đó là <span className={styles.important}>Irregular Verbs</span>, Tham khảo bảng động tại <Link className={styles.linkPage} to={PATH.IRREGULAR_VERBS + '/information'}>Irregular Verbs</Link>
                            <br/>
                            <br/>
                        </div>

                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_4'/>4. {IV_4}</p>
                        <div className={styles.content4}>Thì hiện tại hoàn thành và quá khứ đơn thường rất dễ nhầm lẫn với nhau nếu như bạn không chú ý đến những dấu hiệu phân biệt dưới đây.</div>
                        <br/>
                        <table className={`${styles.table} ${styles.customTable1}`}>
                            <thead>
                                <tr>
                                    <th className={styles.stt}></th>
                                    <th>Hiện tại hoàn thành</th>
                                    <th>Quá khứ đơn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td className={styles.text_left}>Có sự liên kết giữa quá khứ và hiện tại</td>
                                    <td className={styles.text_left}>Chỉ nói về quá khứ (không liên quan đến hiện tại)</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td className={styles.text_left}>KHÔNG đề cập đến một khoảng thời gian cụ thể trong quá khứ</td>
                                    <td className={styles.text_left}>Đề cập đến mốc thời gian cụ thể</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td className={styles.text_left}>Sử dụng những cụm từ thể hiện mốc thời gian được đề cập chưa kết thúc</td>
                                    <td className={styles.text_left}>Sử dụng những cụm từ thể hiện mốc thời gian đã hoàn tất trong quá khứ</td>
                                </tr>
                            </tbody>
                        </table>
                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_5'/>5. {IV_5}</p>
                    <table className={`${styles.table} ${styles.customTable1}`}>
                            <thead>
                                <tr>
                                    <th className={styles.col1}>Have been to</th>
                                    <th className={styles.col2}>Have gone to</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.text_left}>Đi đến đâu đó và <strong>đã trở về</strong> <br/><br/> =&gt; Nhấn mạnh sự trải nghiệm (dùng với các  trạng từ chỉ số lần và từ chỉ số lượng)</td>
                                    <td className={styles.text_left}>Đi đến đâu đó và <strong>chưa trở về</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    <div className={styles.title1} id='sectionV'>V. {V}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Dấu hiệu nhận biết thì hiện tại hoàn thành là trong câu xuất hiện những từ như: 
                        <ul>
                            <li>Just</li>
                            <li>Already</li>
                            <li>Before</li>
                            <li>Yet</li>
                            <li>Ever</li>
                            <li>Never</li>
                            <li>Recently</li>
                            <li>So far</li>
                            <li>For + khoảng thời gian (for a long time, for 2 years)</li>
                            <li>Since + khoảng thời gian (since 2000, since 1995)</li>
                        </ul>
                    </p>
            </div>
        </>
    )
}

export default PresentPerfectTense;