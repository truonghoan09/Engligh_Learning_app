import styles from '../../infomationPage.module.scss';
import {Link} from 'react-router-dom';
import ScrollFunc from '../../scrollFunc';
import ScrollToTop from '../../../../component/scrollToTopButton/indexScrollToTop';
import PATH from '../../../../config/routePathConfig';

const PresentPerfectContinuousTense = () => {
    const I = 'Khái niệm thì hiện tại hoàn thành tiếp diễn'
    const II = 'Cách dùng thì hiện tại hoàn thành tiếp diễn'
    const III = 'Cấu trúc thì hiện tại hoàn thành tiếp diễn'
    const IV = 'Các lưu ý về thì hiện tại hoàn thành tiếp diễn'
    const IV_1 = 'Cách chia Have/Has'
    const IV_2 = 'Cách chia động từ - V_ing'
    const IV_3 = 'Phân biệt giữa thì hiện tại hoàn thành và thì hiện tại hoàn thành tiếp diễn'
    const V = 'Dấu hiệu nhận biết thì hiện tại hoàn thành tiếp diễn'
    const V_Note = 'Công thức hình thành cụm "Since..." và "For..." trong thì Hiện tại hoàn thành tiếp diễn'
    let wordUseInTense = ["all day(suốt cả ngày)", "all week(suốt cả tuần)", "for a long time(trong một thời gian dài)", "in the past week(trong tuần vừa qua)", "recently(gần đây)", "lately(gần đây)", "up until now(cho đến bây giờ)", "so far(cho đến nay)", "almost every day this week(gần như mỗi ngày trong tuần này)", "in recent years(trong những năm gần đây)"];
    let exWithWord = [
        "She has been studying all day. (Cô ấy đã học suốt cả ngày.)",
        "They have been working on the project all week. (Họ đã làm việc trên dự án suốt cả tuần.)",
        "She has been playing the piano for a long time. (Cô ấy đã chơi đàn piano trong một thời gian dài.)",
        "I have traveled to three different cities in the past week. (Tôi đã đi du lịch đến ba thành phố khác nhau trong tuần vừa qua.)",
        "He has been feeling tired recently. (Anh ấy cảm thấy mệt mỏi gần đây.)",
        "They have been going to the gym a lot lately. (Họ đã thường xuyên đến phòng tập thể dục gần đây.)",
        "Up until now, I have never tried sushi. (Cho đến bây giờ, tôi chưa từng thử sushi.)",
        "The new project has been going well so far. (Dự án mới đã tiến triển tốt cho đến nay.)",
        "She has been going for a run almost every day this week. (Cô ấy đã đi chạy gần như mỗi ngày trong tuần này.)",
        "The city has seen a lot of development in recent years. (Thành phố đã chứng kiến nhiều sự phát triển trong những năm gần đây.)"
      ]
    ScrollFunc();
    
    return (
        <>
            <ScrollToTop />
            <div className={styles.container}>
                <h1 className={styles.titlePage} id='section0'>Thì hiện hoàn thành tiếp diễn <br/>(Present perfect continuous/Progressive)</h1>
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
                            </ol>
                        </li>
                        <li>
                            <a className="toc-link" href={`#sectionV`}>{V}</a>
                            <ul>
                                <a className={`toc-link`} href={'#sectionV_Note'}>{V_Note}</a>
                            </ul>
                        </li>
                    </ol>
                </div>
                <div className={styles.title1} id='sectionI'>I. {I}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Thì hiện tại hoàn thành tiếp diễn - <span className={styles.important}>(Present perfect continuous/Progressive)</span> dùng để chỉ sự việc <span className={styles.important}>bắt đầu trong quá khứ nhưng vẫn còn tiếp tục ở hiện tại</span>, sự việc này <span className={styles.important}>đã kết thúc nhưng vẫn ảnh hưởng kết quả đến hiện tại.</span> Thì hiện tại hoàn thành tiếp diễn dùng để <span className={styles.important}>nhấn mạnh về khoảng thời gian</span> của hành động đã xảy ra nhưng <span className={styles.important}>không có kết quả rõ rệt.</span></p>
                <div className={styles.title1} id='sectionII'>II. {II}</div>
                <p className={styles.content2}>
                Có 2 cách dùng thì hiện tại hoàn thành tiếp diễn trong tiếng anh:
                    <ol className={styles.usePastSimpleTense}>
                        <li>Dùng để diễn tả một hành động bắt đầu trong quá khứ và <span className={styles.important}>kéo dài đến hiện tại (Nhấn mạnh tính “liên tục” của hành động)</span></li>
                        <li>Dùng để diễn tả hành động đã xảy ra, vừa mới kết thúc nhưng kết quả của hành động vẫn có thể nhìn thấy được ở hiện tại (<span className={styles.important}>Nhấn mạnh kết quả của hành động</span>)</li>
                    </ol>
                </p>
                    <div className={styles.title1} id='sectionIII'>III. {III}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Thì hiện tại hoàn thành tiếp diễn được chia thành 3 dạng:</p>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th colSpan={2}>Công thức thì hiện tại hoàn thành tiếp diễn</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={1} className={styles.col1}>Khẳng định</td>
                                <td className={styles.noTop}>S + have/has + been + V_ing </td>
                            </tr>
                            
                            <tr>
                                <td rowSpan={1} className={styles.col1}>Phủ định</td>
                                <td className={styles.noTop}>S + haven't/hasn't + been + V_ing</td>
                            </tr>
                              <tr>
                                <td rowSpan={1} className={styles.col1}>Nghi vấn</td>
                                <td className={styles.noTop}>(Wh-) + have/has + S + been + V_ing? </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.title1} id='sectionIV'>IV. {IV}</div>
                    
                        <p className={styles.title2}><span className={styles.tab} id='sectionIV_1'/>1. {IV_1}</p>
                        <p className={styles.content3}>Có thể xem lại ở phần <Link className={styles.linkPage} to={PATH.GRAMMAR_TENSE_PRESENT_PERFECT + "/#sectionIV_1"}>IV/1 của Present Pefect Tense</Link></p>

                        <p className={styles.title2}><span className={styles.tab} id='sectionIV_2'/>2. {IV_2}</p>
                        <p className={styles.content3}>Có thể xem lại ở phần <Link className={styles.linkPage} to={PATH.GRAMMAR_TENSE_PRESENT_CONTINUOUS + "/#sectionIV"}>IV của Present Continuous Tense</Link></p>
                                                                                                          


                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_3'/>3. {IV_3}</p>
                        <div className={styles.content4}>Sẽ rất dễ nhầm lẫn khi sử dụng thì hiện tại hoàn thành và hiện tại hoàn thành tiếp diễn. Vì vậy, bạn nên chú ý những dấu hiệu sau để phân biệt và sử dụng cho đúng</div>
                        <br/>
                        <table className={`${styles.table} ${styles.customTable2}`}>
                            <thead>
                                <tr>
                                    <th className={styles.stt}></th>
                                    <th>Thì Hiện tại hoàn thành<br/>(Present perfect)</th>
                                    <th>Thì Hiện tại hoàn thành tiếp diễn<br/>(Present perfect continuous)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2} className={styles.noChange}>1</td>
                                    <td className={styles.text_left}>Diễn tả một hành động đã hoàn thành xong</td>
                                    <td className={styles.text_left}>Diễn tả hành động vẫn đang tiếp tục cho đến hiện tại</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>I have written an email to you.</td>
                                    <td className={styles.text_left}>I have been writing some emails to you.</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2} className={styles.noChange}>2</td>
                                    <td className={styles.text_left}>Tập trung vào kết quả</td>
                                    <td className={styles.text_left}>Tập trung vào hành động</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>You have cleaned the bathroom! It looks lovely!</td>
                                    <td className={styles.text_left}>I have been cleaning the bathroom. It's so dingy here.</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2} className={styles.noChange}>3</td>
                                    <td className={styles.text_left}>Thể hiện “Bao nhiêu” (Trả lời câu hỏi “How many/ How much?”)</td>
                                    <td className={styles.text_left}>Thể hiện “Bao lâu” (Trả lời câu hỏi “How long?”)</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>She has read ten books this summer.</td>
                                    <td className={styles.text_left}>She has been reading that book all day.</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2} className={styles.noChange}>4</td>
                                    <td className={styles.text_left}>Sử dụng với “for, since, và how” để nói về trạng thái đang diễn ra</td>
                                    <td className={styles.text_left}>Sử dụng với “for, since, và how” để nói về hành động đang diễn ra/ được lặp lại</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>How long have you known each other? <br/>→  I have known them since I was a child. </td>
                                    <td className={styles.text_left}>How long have they been playing tennis? <br/>
                                    → They have been playing tennis for an hour. →  đang diễn ra<br/><br/>
                                    → They have been playing tennis every Sunday for years. →  được lặp lại</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2} className={styles.noChange}>5</td>
                                    <td className={styles.text_left}>Diễn tả 1 hành động mang tính lâu dài hơn.</td>
                                    <td className={styles.text_left}>Nhấn mạnh 1 hành động nào đó là tạm thời.</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>She has run a lot for 3 years <br/>→ Hành động bền bỉ, thói quen lâu dài<br/><br/>
                                    I have studied in the library during my university years <br/>→ Hành động bền bỉ, thói quen lâu dài</td>
                                    <td className={styles.text_left}>She has been running a lot recently. <br/>(Cô ấy không thường xuyên chạy, gần đây cô ấy mới chạy nhiều → hành động tạm thời).<br/><br/>
                                    Usually, I study at home, but I have been studying in the library for the last week <br/>(Tôi thường học ở nhà, 1 tuần gần đây mới học tại thư viện → hành động tạm thời).</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className={styles.content3}>
                            <div className={styles.regularNote}><span className={styles.important}>Note 1:</span> Khi được sử dụng với những động từ như “live/ work/ study”, việc sử dụng 1 trong 2 thì đều không thay đổi nghĩa của câu.</div>
                            <div className={styles.regularNote}><span className={styles.important}>Note 2:</span> Khi trong câu có đề cập đến thời gian, <span className={styles.important}>hiện tại hoàn thành tiếp diễn nhấn mạnh về thời gian</span> hơn. Trong khi thì <Link className={styles.linkPage} to={PATH.GRAMMAR_TENSE_PRESENT_PERFECT + '/#section0'}>Hiện tại hoàn thành</Link> <span className={styles.important}>mang tính trung lập</span></div>
                        </p>
                        
                    
                    <div className={styles.title1} id='sectionV'>V. {V}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Dấu hiệu nhận biết thì hiện tại hoàn thành là trong câu xuất hiện những từ như: 
                        <ol>
                            {wordUseInTense.map((v,i)=> {
                                return (
                                    <>
                                        <li>{v}</li>
                                        <div><span className={styles.important}>Ex:</span> {exWithWord[i]}</div>
                                        <br/>
                                    </>
                                )
                            })} 
                        </ol>
                        <br/>
                        <div className={styles.title2} id='sectionV_Note'>*Note: {V_Note}</div>
                        <div className={styles.content2}>
                            <br/>
                            <div className={styles.noteBorder}>
                                <div className={styles.text}>
                                    Since + mốc thời gian<br/>or<br/>Since + S + V2/ed + ...
                                </div>
                            </div>
                            <br/>
                            <div><span className={styles.important}>Ex1: </span>John has been a dedicated teacher for many years. He has been teaching at this school since 2005.<br/>(John đã là một giáo viên tận tâm. Anh ấy đã dạy tại trường này từ năm 2005)</div>
                            <div><span className={styles.important}>Ex2: </span>I have been playing soccer since I was young (Tôi đã chơi bóng từ lúc tôi còn nhỏ).</div>
                            <br/>
                        </div>
                        <div className={styles.content2}>
                            <br/>
                            <div className={styles.noteBorder}>
                                <div className={styles.text}>
                                    For + khoảng thời gian
                                </div>
                            </div>
                            <br/>
                            <div><span className={styles.important}>Ex: </span>He has been swimming for 5 years (Anh ấy đã bơi lội được 5 năm)  </div>
                            <br/>
                        </div>
                    </p>
            </div>
        </>
    )
}

export default PresentPerfectContinuousTense;