import ScrollToTop from '../../../component/scrollToTopButton/indexScrollToTop';
import ScrollFunc from '../scrollFunc';
import styles from '../infomationPage.module.scss';

const About_s_es = () => {
    const I = 'Đối với động từ'
    const II = 'Đối với danh từ'
    const II_1 = 'Trường hợp đa số'
    const II_2 = 'Đối với các danh từ có tận cùng bằng chữ cái s, ss, sh, ch, z và x'
    const II_3 = 'Các danh từ tận cùng bằng "o"'
    const II_4 = 'Các danh từ tận cùng bằng (phụ âm + "y")'
    const II_5 = 'Các danh từ có tận cùng bằng f hoặc fe'
    const II_6 = 'Các danh từ luôn ở dạng số nhiều'
    const II_7 = 'Các danh từ có dạng số nhiều không theo quy tắc thêm (s/es)'
    const II_8 = 'Các danh từ có định dạng (s/es) nhưng lại là danh từ số ít'
    const III = 'Cách phát âm (s/es) trong tiếng Anh'
    ScrollFunc();
    return (
        <>
            <ScrollToTop />
            <div className={styles.container}>
                <h1 className={styles.titlePage} id='#section0'>Các yếu tố liên quan đến (s/es)</h1>
                <div className={styles.toc}>
                    Mục lục
                    <ol type='I' className={styles.toc1}>
                        <li>
                            <a className="toc-link" href={`#sectionI`}>{I}</a>
                        </li>
                        <li>
                            <a className="toc-link" href={`#sectionII`}>{II}</a>
                            <ol className={styles.toc2}>
                                <li>
                                    <a className='toc-link' href={`#sectionII_1`}>{II_1}</a>
                                </li>
                                <li>
                                    <a className='toc-link' href={`#sectionII_2`}>{II_2}</a>
                                </li>
                                <li>
                                    <a className='toc-link' href={`#sectionII_3`}>{II_3}</a>
                                </li>
                                <li>
                                    <a className='toc-link' href={`#sectionII_4`}>{II_4}</a>
                                </li>
                                <li>
                                    <a className='toc-link' href={`#sectionII_5`}>{II_5}</a>
                                </li>
                                <li>
                                    <a className='toc-link' href={`#sectionII_6`}>{II_6}</a>
                                </li>
                                <li>
                                    <a className='toc-link' href={`#sectionII_7`}>{II_7}</a>
                                </li>
                                <li>
                                    <a className='toc-link' href={`#sectionII_8`}>{II_8}</a>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <a className="toc-link" href={`#sectionIII`}>{III}</a>
                        </li>
                    </ol>
                </div>
                <div className={styles.title1} id='sectionI'>I. {I}</div>
                <p className={styles.content4}>Có 3 quy tắc thêm (s/es) vào động từ:
                        <ol>
                            <li>Với các từ có tận cùng là <strong>“o“, “ch“, “sh“, “x“, “s”</strong> thì khi dùng với ngôi số ít, thêm đuôi “es”. Ví dụ: Go -Goes, Do - Does, Teach - Teaches, Mix - Mixes, Kiss - Kisses, Brush - Brushes.</li>
                            <li>Với các từ có tận cùng là “y” thì khi dùng với ngôi số ít, bỏ “y” và thêm đuôi “ies”  Ví dụ: Apology - Apologies; Ability - Abilities.</li>
                            <li>Với các từ còn lại, thêm đuôi “s”. (Get - Gets, Swim - Swims,…).</li>
                        </ol>
                    </p>
                <div className={styles.title1} id='sectionII'>II. {II}</div>
                    <p className={styles.content3}>
                        Đối với danh từ chúng ta có một số trường hợp sau:
                        <ol>
                            <li>Danh từ đếm được số ít
                                <p>Đối với các danh từ dạng này, sẽ có các danh từ số nhiều tương ứng được thành lập theo các quy tắc từ mục II_1 đến II_5</p>
                            </li>
                            <li>Danh từ luôn ở dạng số nhiều
                                <p>Xem thêm tại phần <a className={`${'toc-link'} ${styles.linkPage}`} href='#sectionII_6'>II_6</a></p>
                            </li>
                            <li>Danh từ có dạng số nhiều không theo quy tắc thêm (s/es)
                                <p>Xem thêm tại phần <a className={`${'toc-link'} ${styles.linkPage}`} href='#sectionII_7'>II_7</a></p>
                            </li>
                            <li>Danh từ có định dạng (s/es) nhưng lại là danh từ số ít
                                <p>Xem thêm tại phần <a className={`${'toc-link'} ${styles.linkPage}`} href='#sectionII_8'>II_8</a></p>
                            </li>
                        </ol>
                        <p  className={styles.noteBorder1} >
                            <div className={styles.text}>
                            <span className={`${styles.important}`}>Lưu ý:</span> danh sách các từ bên dưới chỉ mang tính chất minh họa điển hình, còn rất nhiều các trường hợp tương tự mà bạn cần phải tiếp thu dần trong quá trình học tập tiếng Anh
                            </div>
                            </p>
                    </p>
                    <p className={styles.title2}><span className={styles.tab} id='sectionII_1'/>1. {II_1}</p>
                    <p className={styles.content4}>
                        Đối với đa số các danh từ số ít đếm được, ta sẽ thêm s vào sau danh từ ấy để thành lập danh từ số nhiều tương ứng
                        <br/>
                        <br/>
                        <span className={styles.important}>Ex:</span> 
                    </p>
                        <table className={`${styles.customTable3} ${styles.table}`}>
                            <tbody>
                                <tr>
                                    <td className={styles.text_left}>Road</td>
                                    <td className={styles.text_left}>Roads</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Horse</td>
                                    <td className={styles.text_left}>Horses</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Book</td>
                                    <td className={styles.text_left}>Books</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Chair</td>
                                    <td className={styles.text_left}>Chairs</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Rose</td>
                                    <td className={styles.text_left}>Roses</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Image</td>
                                    <td className={styles.text_left}>Images</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Window</td>
                                    <td className={styles.text_left}>Windows</td>
                                </tr>
                            </tbody>
                        </table>                    
                    <p className={styles.title2}><span className={styles.tab} id='sectionII_2'/>2. {II_2}</p>
                    <p className={styles.content4}>
                        Đối với các danh từ có tận cùng bằng chữ cái s, ss, sh, ch, z và x sẽ được thêm es vào cuối để tạo thành danh từ số nhiều
                        <br/>
                        <br/>
                        <span className={styles.important}>Ex:</span> 
                    </p>
                    <table className={`${styles.customTable3} ${styles.table}`}>
                            <tbody>
                                <tr>
                                    <td className={styles.text_left}>Bus</td>
                                    <td className={styles.text_left}>Buses</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Box</td>
                                    <td className={styles.text_left}>Boxes</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Glass</td>
                                    <td className={styles.text_left}>Glasses</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Quiz</td>
                                    <td className={styles.text_left}>Quizes</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Fox</td>
                                    <td className={styles.text_left}>Foxes</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Church</td>
                                    <td className={styles.text_left}>Churches</td>
                                </tr>
                            </tbody>
                        </table>  
                    <p className={styles.title2}><span className={styles.tab} id='sectionII_3'/>3. {II_3}</p>
                    <p className={styles.content4}>
                        Đối với các danh từ tận cùng bằng âm "o", để thành lập danh từ số nhiều ta sẽ có rất nhiều trường hợp, có thể sẽ thêm s, có thể sẽ thêm es chứ không có quy tắc chung rõ ràng!
                        <br/>
                        <br/>
                        <span className={styles.important}>Ex:</span> Ví dụ một số từ thêm đuôi es 
                    </p>
                    <table className={`${styles.customTable3} ${styles.table}`}>
                            <tbody>
                                <tr>
                                    <td className={styles.text_left}>Tomato</td>
                                    <td className={styles.text_left}>Tomatoes</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Potato</td>
                                    <td className={styles.text_left}>Potatoes</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Hero</td>
                                    <td className={styles.text_left}>Heroes</td>
                                </tr>
                            </tbody>
                        </table> 
                    <p className={styles.content4}>
                        <span className={styles.important}>Ex:</span> Ví dụ một số từ thêm đuôi s 
                    </p>
                    <table className={`${styles.customTable3} ${styles.table}`}>
                            <tbody>
                                <tr>
                                    <td className={styles.text_left}>Piano</td>
                                    <td className={styles.text_left}>Pianos</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Radio</td>
                                    <td className={styles.text_left}>Radios</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Photo</td>
                                    <td className={styles.text_left}>Photos</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Studio</td>
                                    <td className={styles.text_left}>Studios</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Video</td>
                                    <td className={styles.text_left}>Videos</td>
                                </tr>
                            </tbody>
                        </table> 
                    <p className={styles.title2}><span className={styles.tab} id='sectionII_4'/>4. {II_4}</p>
                    <p className={styles.content4}>
                        Đối với các danh từ tận cùng bằng (phụ âm + "y") thì ta đổi âm "y" thành "i" sau đó thêm đuôi "es" để thành lập danh từ số nhiều
                        <br/>
                        <br/>
                        <span className={styles.important}>Ex:</span> 
                    </p>
                    <table className={`${styles.customTable3} ${styles.table}`}>
                            <tbody>
                                <tr>
                                    <td className={styles.text_left}>Baby</td>
                                    <td className={styles.text_left}>Babies</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Fly</td>
                                    <td className={styles.text_left}>Flies</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Lady</td>
                                    <td className={styles.text_left}>Ladies</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Duty</td>
                                    <td className={styles.text_left}>Duties</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Party</td>
                                    <td className={styles.text_left}>Parties</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Country</td>
                                    <td className={styles.text_left}>Countries</td>
                                </tr>
                            </tbody>
                        </table> 
                    <p className={styles.title2}><span className={styles.tab} id='sectionII_5'/>5. {II_5}</p>
                    <p className={styles.content4}>
                        Đối với các danh từ có tận cùng bằng f hoặc fe, cách thêm s es vào danh từ sẽ được chia thành 2 trường hợp
                        <ol>
                            <li>
                                Các danh từ thuộc nhóm sau sẽ được lược bỏ f hoặc fe bằng “v” và thêm es vào sau:
                                <br></br>
                                <br></br>
                                <table className={`${styles.customTable3} ${styles.table}`}>
                            <tbody>
                                <tr>
                                    <td className={styles.text_left}>Calf</td>
                                    <td className={styles.text_left}>Calves</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Half</td>
                                    <td className={styles.text_left}>Halves</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Knife</td>
                                    <td className={styles.text_left}>Knives</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Leaf</td>
                                    <td className={styles.text_left}>Leaves</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Life</td>
                                    <td className={styles.text_left}>Lives</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Loaf</td>
                                    <td className={styles.text_left}>Loaves</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Self</td>
                                    <td className={styles.text_left}>Selves</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Shelf</td>
                                    <td className={styles.text_left}>Shelves</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Wife</td>
                                    <td className={styles.text_left}>Wives</td>
                                </tr>
                            </tbody>
                        </table> 
                            </li>
                            <li>
                            Các trường hợp còn lại sẽ được giữ nguyên và thêm s như thông thường để thành lập số nhiều.
                                <br></br>
                                <br></br>
                                <table className={`${styles.customTable3} ${styles.table}`}>
                            <tbody>
                                <tr>
                                    <td className={styles.text_left}>Cliff</td>
                                    <td className={styles.text_left}>Cliffs</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Safe</td>
                                    <td className={styles.text_left}>Safes</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Chief</td>
                                    <td className={styles.text_left}>Chiefs</td>
                                </tr>
                            </tbody>
                        </table> 
                            </li>
                        </ol>
                    </p>    
                    <p className={styles.title2}><span className={styles.tab} id='sectionII_6'/>6. {II_6}</p>
                    <p className={styles.content4}>
                    <table className={`${styles.customTable3} ${styles.table}`}>
                            <tbody>
                                <tr>
                                    <td className={styles.text_left}>Deer</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Swine</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Fish</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Salmon</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Trout</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Sheep</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Cattle</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Police</td>
                                </tr>
                            </tbody>
                        </table> 
                    </p>
                    <p className={styles.title2}><span className={styles.tab} id='sectionII_7'/>7. {II_7}</p>
                    <p className={styles.content4}>
                    <table className={`${styles.customTable3} ${styles.table}`}>
                            <tbody>
                                <tr>
                                    <td className={styles.text_left}>Foot</td>
                                    <td className={styles.text_left}>Feet</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Tooth</td>
                                    <td className={styles.text_left}>Teeth</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Goose</td>
                                    <td className={styles.text_left}>Geese</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Man</td>
                                    <td className={styles.text_left}>Men</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Woman</td>
                                    <td className={styles.text_left}>Women</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Mouse</td>
                                    <td className={styles.text_left}>Mice</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Child</td>
                                    <td className={styles.text_left}>Children</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Radius</td>
                                    <td className={styles.text_left}>Radii</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Basis</td>
                                    <td className={styles.text_left}>Base</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Datum</td>
                                    <td className={styles.text_left}>Data</td>
                                </tr>
                                
                            </tbody>
                        </table> 
                    </p>
                    <p className={styles.title2}><span className={styles.tab} id='sectionII_8'/>8. {II_8}</p>
                    <p className={styles.content4}>
                    <table className={`${styles.customTable3} ${styles.table}`}>
                            <tbody>
                                <tr>
                                    <td className={styles.text_left}>News</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Mumps</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Darts</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Bowls</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Dominoes</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Shingles</td>
                                </tr>
                                <tr>
                                    <td className={styles.text_left}>Crossroads</td>
                                </tr>
                            </tbody>
                        </table> 
                    </p>
                <div className={styles.title1} id='sectionIII'>III. {III}</div>
                <p className={styles.content3}>
                    <ol>
                        <li>Âm s sẽ được phát âm là <strong>/s/</strong> khi tận cùng là các phụ âm vô thanh không rung gồm: <strong>/p/, /t/, /k/, /f/, /θ/</strong>.</li>
                        <br></br>
                        <li>Âm es sẽ được phát âm là <strong>/ɪz/</strong> khi danh từ có tận cùng bằng các phụ âm gió <strong>/s/, /z/, /ʃ/, /ʒ/, /tʃ/, /dʒ/.</strong> Thông thường, tận cùng của các từ này sẽ kết thúc bằng <strong>ce, x, z, sh, ch, s, ge.</strong></li>
                        <br></br>
                        <li>Âm s sẽ được phát âm là <strong>/z/</strong> khi tận cùng là các phụ âm hữu thanh <strong>/b/, /d/, /g/, /v/, /ð/, /m/, /n/, /ŋ, /l/, /r/</strong> hoặc <strong>các nguyên âm có rung.</strong></li>
                        <br></br>
                    </ol>
                </p>
            </div>
        </>
    )
}

export default About_s_es;