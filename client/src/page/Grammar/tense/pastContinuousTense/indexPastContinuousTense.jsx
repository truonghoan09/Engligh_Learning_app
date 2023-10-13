import ScrollToTop from '../../../../component/scrollToTopButton/indexScrollToTop';
import styles from '../../infomationPage.module.scss';
import {Link} from 'react-router-dom';
import ScrollFunc from '../../scrollFunc';
import PATH from '../../../../config/routePathConfig';

const PastContinuousTense = () => {
    const I = 'Khái niệm thì quá khứ tiếp diễn'
    const II = 'Cách dùng thì quá khứ tiếp diễn'
    const III = 'Cấu trúc thì quá khứ tiếp diễn'
    const IV = 'Các lưu ý về thì quá khứ tiếp diễn'
    const IV_1 = 'Cách chia Was/Were'
    const IV_2 = 'Các động từ KHÔNG được dùng cho thì quá khứ tiếp diễn'
    const IV_3 = 'Quy tắc thêm "ing" cho động từ'
    const V = 'Dấu hiệu nhận biết thì Quá khứ tiếp diễn'
    ScrollFunc();
    return (
        <>  
            <ScrollToTop />
            <div className={styles.container}>
            <h1 className={styles.titlePage} id='section0'>Thì quá khứ tiếp diễn<br/>(Past Continuous Tense)</h1>
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
                        </li>
                    </ol>
                </div>
                <div className={styles.title1} id='sectionI'>I. {I}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Tương tự như <Link className={styles.linkPage} to={PATH.GRAMMAR_TENSE_PRESENT_CONTINUOUS + "/#section0"}>Hiện tại tiếp diễn</Link>, thì quá khứ tiếp diễn <span className={styles.important}>Past continuous tense</span> dùng để: diễn tả một hành động, sự việc đang diễn ra xung quanh một thời điểm trong quá khứ.</p>
                <div className={styles.title1} id='sectionII'>II. {II}</div>
                <p className={styles.content2}>
                    <ol className={styles.usePastSimpleTense}>
                        <li>Dùng để diễn tả 1 hành động <span className={styles.important}>đang diễn ra tại một thời điểm xác định trong quá khứ</span>
                            <p><span className={styles.important}>Ex: </span> At nine o'clock yesterday, I was studying with my brother <br/>(Vào lúc chín giờ ngày hôm qua, tôi đang học với anh trai tôi)</p>
                        </li>
                        <li>Dùng để diễn tả 1 hành động <span className={styles.important}>đang diễn ra thì một hành động khác xen vào</span>
                            <p><span className={styles.important}>Ex: </span>I was talking to my mom when you called me<br/>(Tôi đang nói chuyện với mẹ khi bạn gọi cho tôi =&gt; Hành động bạn gọi cho tôi xen vào giữa hạnh động đang nói chuyện với mẹ)</p>
                        </li>
                        <li>Dùng để diễn tả 2 hành động nhưng chúng lại <span className={styles.important}>đang diễn ra cùng lúc trong quá khứ</span>
                            <p><span className={styles.important}>Ex: </span>I was reading my book while/and my friend was watching TV<br/>(Tôi đang đọc sách của mình trong khi /và bạn tôi đang xem TV)</p>
                        </li>
                    </ol>
                </p>
                    <div className={styles.title1} id='sectionIII'>III. {III}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Thì quá khứ tiếp diễn được chia thành 3 dạng:</p>
                    <table className={styles.table}>
                        <tbody>
                            <tr>
                                <td rowSpan={1} className={styles.col1}>Khẳng định</td>
                                <td className={styles.noTop}>S + was/were + V_ing</td>
                            </tr>
                            
                            <tr>
                                <td rowSpan={1} className={styles.col1}>Phủ định</td>
                                <td className={styles.noTop}>S + was/were + not + V_ing</td>
                            </tr>
                              <tr>
                                <td rowSpan={1} className={styles.col1}>Nghi vấn</td>
                                <td className={styles.noTop}>(Wh-) + was/were (not) + S + V_ing</td>
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
                        <strong className={styles.important}>KHÔNG</strong> sử dụng động từ chỉ trạng thái (State verbs: want, like, love, understand, hate…) trong thì quá khứ tiếp diễn. Thay vào đó sử dụng thì quá khứ đơn .
                        <br/>
                        <p><span className={styles.important}>Ex: </span>
                            <br/>
                            I wanted to have a cat. =&gt; Đúng
                            <br/>
                            I was wanting to have a cat. =&gt; Sai
                        </p>
                        <br/>
                        </div>
                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_3'/>3. {IV_3}</p>
                        <p className={styles.content4}>
                            Bạn có thể xem lại ở phần <Link className={styles.linkPage} to={PATH.GRAMMAR_TENSE_PRESENT_CONTINUOUS + "/#sectionIV"}>{IV_3}</Link> ở bài thì hiện tại tiếp diễn
                        </p>
                            

                    <div className={styles.title1} id='sectionV'>V. {V}</div>
                    <ol className={styles.content4}>
                        <li >
                            <p>Bạn có thể dễ dàng nhận biết được thì quá khứ tiếp diễn khi trong câu có các trạng từ chỉ thời điểm xác định trong quá khứ
                                <div className={styles.noteBorder1}>
                                    <div>
                                    At + giờ chính xác + thời gian ở quá khứ (At 8 a.m yesterday) 
                                    <br/>
                                    At + this time + thời gian ở quá khứ (At this time three months ago,….)
                                    <br/>
                                    In + năm xác định (in 2004, in 2002) 
                                    <br/>
                                    In the past (trong quá khứ)
                                    </div>
                                </div>
                            </p>

                        </li>
                        <li>
                        Khi trong câu xuất hiện các liên từ như when/while/and để diễn tả các hành động xảy ra đồng thời hoặc 1 hành động đang xảy ra thì hành động khác xen vào.
                        </li>
                    </ol>
            </div>
        </>
    )
}

export default PastContinuousTense;