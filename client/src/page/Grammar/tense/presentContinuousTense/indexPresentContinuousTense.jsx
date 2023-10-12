import styles from '../../infomationPage.module.scss';
import ScrollFunc from '../../scrollFunc';
import ScrollToTop from '../../../../component/scrollToTopButton/indexScrollToTop';

const PresentContinuousTense = () => {
    const verbNoUse = ["Appear: xuất hiện", "Believe: tin tưởng", "Belong: thuộc về", "Contain: chứa đựng", "Depend: phụ thuộc" ,"Forget: quên", "Hate: ghét", "Hope: hy vọng", "Know: biết", "Lack: thiếu", "Like: thích", "Love: yêu", "Mean: có nghĩa là", "Need: cần", "Prefer: thích hơn", "Realize: nhận ra", "Remember: nhớ", "Seem: dường như/ có vẻ như", "Sound: nghe có vẻ như", "Suppose: cho rằng", "Taste: nếm", "Understand: hiểu biết", "Want: muốn", "Wish: ước"]
    const I = 'Khái niệm thì hiện tại tiếp diễn';
    const II = 'Cách dùng thì hiện tại tiếp diễn';
    const III = 'Cấu trúc thì hiện tại tiếp diễn';
    const IV = 'Các lưu ý về cách chia động từ - V_ing';
    const IV_1 = 'Với động từ tận cùng là chữ “e”';
    const IV_2 = 'Với động từ tận cùng là “ie”';
    const IV_3 = 'Với động từ có một âm tiết, tận cùng là phụ âm, trước là nguyên âm';
    const V = 'Dấu hiệu nhận biết thì hiện tại tiếp diễn';
    const VI = 'Những động từ không chia ở hiện tại tiếp diễn';
    ScrollFunc();    
    return (
        <>  
            <ScrollToTop/>
            <div className={styles.container}>
                <h1 className={styles.titlePage} id='section0'>Thì hiện tại tiếp diễn<br/>(Present Continuous Tense)</h1>
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
                        <li>
                            <a className="toc-link" href={`#sectionVI`}>{VI}</a>
                        </li>
                    </ol>
                </div>
                <div className={styles.title1} id='sectionI'>I. {I}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Thì hiện tại tiếp diễn - <span className={styles.important}>Present continuous tense</span> diễn tả những sự việc hoặc hành động <span className={styles.important}>xảy ra ngay lúc nói</span> hay <span className={styles.important}>xung quanh thời điểm nói</span>, sự việc và hành động đó vẫn <span className={styles.important}>chưa chấm dứt</span> và <span className={styles.important}>vẫn tiếp tục</span> diễn ra tính đến thời điểm hiện tại.</p>
                <div className={styles.title1} id='sectionII'>II. {II}</div>
                <p className={styles.content2}>
                    Có 4 cách dùng thì hiện tại tiếp diễn
                    <ol className={styles.usePastSimpleTense}>
                        <li>Diễn tả sự việc/ hành động đang xảy ra tại thời điểm nói</li>
                        <div>Ex: They are watching TV now (Họ đang xem TV lúc này)</div>
                        <li>Diễn tả sự việc/ hành động đang xảy ra không nhất thiết tại thời điểm nói</li>
                        <div>Ex: I am finding a job (Tôi đang đi tìm việc)</div>
                        <li>Diễn tả sự việc/ hành động sắp xảy ra trong tương lai gần</li>
                        <div>Ex: I am flying to Kyoto tomorrow (Tôi sẽ bay đến Kyoto vào ngày mai)</div>
                        <li>Diễn tả 1 sự việc lặp đi lặp lại mang tính chất lặp đi lặp lại</li>
                        <div>Ex: She is always going to work late (Cô ấy lúc nào cũng đi làm muộn)</div>
                    </ol>
                </p>
                    <div className={styles.title1} id='sectionIII'>III. {III}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Thì hiện tại tiếp diễn được chia thành 3 dạng:</p>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th colSpan={2}>Công thức thì hiện tại tiếp diễn</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={1} className={styles.col1}>Khẳng định</td>
                                <td className={styles.noTop}>S + am/is/are + V_ing</td>
                            </tr>
                            
                            <tr>
                                <td rowSpan={1} className={styles.col1}>Phủ định</td>
                                <td className={styles.noTop}>S + am/is/are + not + V_ing</td>
                            </tr>
                              <tr>
                                <td rowSpan={1} className={styles.col1}>Nghi vấn</td>
                                <td className={styles.noTop}>(Wh-) + am/is/are (not) + S + V_ing?</td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <div className={styles.title1} id='sectionIV'>IV. {IV}</div>
                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_1'/>1. {IV_1}</p>
                        <p className={styles.content4}>Với động từ tận cùng là chữ “e“, quy tắc thêm đuôi “ing” ở đây là bỏ “e” rồi thêm “-ing”
                        <div><strong>Ex:</strong> leave - leaving, ride - riding, come - coming</div>
                        </p>
                        <p className={styles.content4}><span className={styles.important}>Lưu ý quan trọng:</span> Nếu tận cùng là “ee”, bạn chú ý rằng quy tắc thêm ING ở đây là ta không bỏ “e” mà vẫn thêm “-ing” bình thường nhé!</p>
                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_2'/>2. {IV_2}</p>
                        <p className={styles.content4}>
                            Với động từ tận cùng là “ie”, quy tắc thêm đuôi “ing” ở đây là “ie” đổi thành “y” rồi thêm “-ing”.
                            <div><strong>Ex:</strong> lie - lying, die - dying</div>
                        </p>
                    <p className={styles.title2}><span className={styles.tab} id='sectionIV_3'/>3. {IV_3}</p>
                    <p className={styles.content4}>
                        Với động từ có một âm tiết, tận cùng là phụ âm, trước là nguyên âm, quy tắc thêm đuôi “ing” ở đây là nhân đôi phụ âm cuối rồi thêm “-ing”.
                        <div><strong>Ex:</strong> stop - stopping, get - getting, put - putting</div>
                    </p>
                    <strong className={`${styles.important} ${styles.content4}`}>*Các trường hợp ngoại lệ</strong>
                        <ol className={styles.content4}>
                            <li>begin - beginning</li>
                            <li>travel - travelling</li>
                            <li>prefer - preferring</li>
                            <li>permit - permitting</li>
                        </ol>
                    <div className={styles.title1} id='sectionV'>V. {V}</div>
                    <p className={styles.content2}><span className={styles.tab}/>Bạn có thể dễ dàng nhận biết được thì hiện tại tiếp diễn khi trong câu xuất hiện trạng từ chỉ thời gian và động từ sau:
                        <ul className={styles.listGap}>
                            <li>
                                now (bây giờ)
                                <div><strong>Ex:</strong> She is studying English now.</div>
                            </li>
                            <li>
                                right now (ngay bây giờ)
                                <div><strong>Ex: </strong>I'm sorry, I can't talk right now.</div>
                            </li>
                            <li>
                                at the moment  (lúc này)
                                <div><strong>Ex: </strong>She's not available at the moment.</div>
                            </li>
                            <li>
                                at present (lúc này)
                                <div><strong>Ex: </strong>We're not hiring at present. </div>
                            </li>
                            <li>
                                At + thời gian cụ thể (at 7 AM, in the evening,...)
                                <div><strong>Ex1: </strong>I will be in a meeting at 7 AM tomorrow.</div>
                                <div><strong>Ex2: </strong>They usually go for a walk in the evening.</div>
                            </li>
                            <li>
                                Look! (Nhìn kìa!)
                                <div><strong>Ex: </strong>Look! The sun is setting.</div>
                            </li>
                            <li>
                                Listen! (Nghe kìa!)
                                <div><strong>Ex: </strong>Listen! Can you hear the birds singing? </div>
                            </li>
                            <li>
                                keep silent (Giữ im lặng!)
                                <div><strong>Ex: </strong>Please keep silent during the exam.</div>
                            </li>
                        </ul>
                    </p>
                    <div className={styles.title1} id='sectionVI'>VI. {VI}</div>
                    <p className={styles.content2}>Sau đây là một số động từ tuyệt đối không chia ở thì hiện tại tiếp diễn:
                        <ol>
                            {verbNoUse.map((v,_) => {
                                return (
                                    <li>{v}</li>
                                )
                            })}
                        </ol>
                    </p>
            </div>
        </>
    )
}

export default PresentContinuousTense;