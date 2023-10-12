import styles from '../../infomationPage.module.scss';
import ScrollToTop from '../../../../component/scrollToTopButton/indexScrollToTop';
import { Link } from 'react-router-dom';
import ScrollFunc from '../../scrollFunc';

const PastPerfectContinuousTense = () => {
    const I = 'Khái niệm thì quá khứ hoàn thành tiếp diễn'
    const II = 'Cách dùng thì quá khứ hoàn thành tiếp diễn'
    const III = 'Cấu trúc thì quá khứ hoàn thành tiếp diễn'
    const IV = 'Các lưu ý về thì quá khứ hoàn thành tiếp diễn'
    const IV_1 = 'Cách chia động từ "had"'
    const IV_2 = 'Cách chia động từ - V_ing'
    const V = 'Dấu hiệu nhận biết thì Quá khứ hoàn thành tiếp diễn'
    ScrollFunc();
    return(
        <>  
            <ScrollToTop />
            <div className={styles.container}>
            <h1 className={styles.titlePage} id='section0'>
                Thì quá khứ hoàn thành tiếp diễn
                <br/>
                (Past Perfect Continuous Tense)
            </h1>
            
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
                            </ol>
                        </li>
                        <li>
                            <a className="toc-link" href={`#sectionV`}>{V}</a>
                        </li>
                    </ol>
                </div>
                <div className={styles.title1} id='sectionI'>I. {I}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Thì quá khứ hoàn thành tiếp diễn - <span className={styles.important}>Past perfect continuous tense</span> diễn tả hành động <span className={styles.important}>bắt đầu ở quá khứ, kéo dài trong quá khứ và cũng đã kết thúc</span> tại 1 thời điểm trong quá khứ.</p>
                <div className={styles.title1} id='sectionII'>II. {II}</div>
                <p className={styles.content2}>
                    Có 6 cách dùng thì quá khứ hoàn thành tiếp diễn, cụ thể như sau:
                    <ol className={styles.usePastSimpleTense}>
                        <li>Diễn tả 1 hành động được <span className={styles.important}>xảy ra kéo dài liên tục trước 1 hành động/thời điểm khác</span> trong quá khứ <span className={styles.important}>(nhấn mạnh tính liên tục của hành động)</span>.
                            <br/>
                            <br/>
                            <div>
                                <div><span className={styles.important}>Ex: </span>My father <strong>had been working</strong> as a businessman before he retired last year. 
                                <br/>
                                =&gt; Hành động <strong>“làm việc”</strong> của bố tôi đã <strong>kéo dài liên tục trước khi nghỉ hưu</strong></div>
                            </div>
                        </li>
                        <br/>
                        <li>Diễn tả hành động này <span className={styles.important}>là kết quả của một điều gì đó</span> trong quá khứ
                            <br/>
                            <br/>
                            <div>
                                <div><span className={styles.important}>Ex: </span>I gained weight because I <strong>had been overeating</strong>
                                <br/>
                                =&gt; Hành động <strong>“tăng cân”</strong> đã xảy ra trong quá khứ do <strong>hậu quả của việc “ăn quá nhiều”</strong>
                                </div>
                            </div>
                        </li>
                        <br/>
                        <li>Diễn tả một hành động <span className={styles.important}>xảy ra kéo dài liên tục trước một hành động khác</span> trong quá khứ
                            <br/>
                            <br/>
                            <div>
                                <div><span className={styles.important}>Ex: </span>He <strong>had been practicing</strong> the guitar <strong>all afternoon before he gave his performance.</strong> 
                                <br/>
                                =&gt; Anh ấy đã <strong>tập luyện</strong> đàn guitar <strong>suốt buổi chiều trước biểu diễn của mình.</strong>
                                </div>
                            </div>
                        </li>
                        <br/>
                        <li>Diễn tả hành động xảy ra để <span className={styles.important}>chuẩn bị cho một hành động khác</span>
                            <br/>
                            <br/>
                            <div>
                                <div><span className={styles.important}>Ex: </span>Tom and Cua <strong>had been falling in love</strong> for 2 years and <strong>prepared for a wedding</strong>
                                <br/>
                                =&gt; Tom và Cua <strong>đã yêu nhau trong suốt 2 năm và chuẩn bị cho đám cưới.</strong>
                                </div>
                            </div>
                        </li>
                        <br/>
                        <li>Nhấn mạnh hành động <span className={styles.important}>để lại kết quả</span> trong quá khứ
                            <br/>
                            <br/>
                            <div>
                                <div><span className={styles.important}>Ex: </span>Yesterday evening, I <strong>was exhausted</strong> because I <strong>had been studying</strong> my home work <strong>all morning</strong>
                                <br/>
                                =&gt; Buổi chiều hôm qua, Tôi <strong>đã kiệt sức</strong> bởi vì tôi <strong>đã làm bài tập về nhà cả sáng</strong>
                                <br/>
                                <br/>
                                <span className={styles.important}>Note: </span> Trong cách dùng này thì: <br/>
                                - <strong>Hành động gây ra kết</strong> quả sẽ được dùng thì <span className={styles.important}>Quá khứ hoàn thành tiếp diễn</span><br/>
                                - <strong>Kết quả</strong> của hành động kia gây ra sẽ được dùng thì <Link className={styles.linkPage} to={"/grammar/tense/past_simple_tense/#section0"}>Quá khứ đơn</Link>
                                </div>
                            </div>
                        </li>
                        <br/>
                        <li>Sử dụng trong <span className={styles.important}>câu điều kiện loại 3</span> để <span className={styles.important}>diễn tả 1 điều kiện không có thật trong quá khứ</span>
                            <br/>
                            <br/>
                            <div>
                                <div><span className={styles.important}>Ex: </span>If I <strong>had been studying</strong> harder, I would have been pass this exam
                                <br/>
                                =&gt; <strong>Nếu</strong> như tôi <strong>học hành chăm chỉ hơn</strong> thì tôi đã <strong>có thể vượt qua bài kiểm tra</strong>
                                </div>
                            </div>
                        </li>
                        <br/>
                    </ol>
                </p>
                    <div className={styles.title1} id='sectionIII'>III. {III}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Thì quá khứ hoàn thành tiếp diễn được chia thành 3 dạng:</p>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th colSpan={2}>Công thức thì quá khứ hoàn thành tiếp diễn<nav></nav></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={1} className={styles.col1}>Khẳng định</td>
                                <td className={styles.noTop}>S + had + been + V_ing</td>
                            </tr>
                            
                            <tr>
                                <td rowSpan={1} className={styles.col1}>Phủ định</td>
                                <td className={styles.noTop}>S + hadn't + been + V_ing</td>
                            </tr>
                              <tr>
                                <td rowSpan={1} className={styles.col1}>Nghi vấn</td>
                                <td className={styles.noTop}>(Wh-) + had + S + been + V-ing?</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.title1} id='sectionIV'>IV. {IV}</div>
                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_1'/>1. {IV_1}</p>
                        <div className={styles.content4}>
                            Chỉ có <strong>duy nhất một từ "had"</strong> cho <strong>tất cả</strong> các chủ từ kể cả <strong>số ít và số nhiều</strong>
                        <br/>
                        <br/>
                        </div>
                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_2'/>2. {IV_2}</p>
                        <div className={styles.content4}>
                        Bạn có thể xem lại ở phần <Link className={styles.linkPage} to="/grammar/tense/present_continuous_tense/#sectionIV">{IV_2}</Link> ở bài thì hiện tại tiếp diễn
                        <br/>
                        <br/>
                        </div>
                    

                    <div className={styles.title1} id='sectionV'>V. {V}</div>
                    <p className={styles.content3}>Quá khứ hoàn thành tiếp diễn được nhận biết khi trong câu có các trạng từ chỉ thời gian như:</p>
                    <ul className={styles.content4}>
                        <li>For</li>
                        <li>Since</li>
                        <li>When</li>
                        <li>How long</li>
                        <li>Until then</li>
                        <li>By the time</li>
                        <li>Prior to that time</li>
                        <li>Before, after v.v…</li>
                    </ul>
            </div>
        </>
    )
}

export default PastPerfectContinuousTense;