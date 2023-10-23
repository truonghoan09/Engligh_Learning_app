import { useEffect, useState } from 'react';
import styles from './addIrregularVerbs.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import LoadingModal from '../../component/loadingModal/indexLoading';
import { addIrr } from '../../reudux_toolkit/slices/addIrregularVerbs';
import ModalNotice from '../../component/modalNotice/modalNotice';

const  AddIrregularVerbs = () => {
   

    const [JSONtext, setJSONtext] = useState('');
    const [cacheMemory, setCacheMemory] = useState('');
    const [sendData, setSendData] = useState(false);
    const [notice, setnotice] = useState({isshow: false, message: "", severity: "",type: ""});


    const handleClickResetAll = () => {
        setCacheMemory('');
        localStorage.removeItem('JSON_from_addIrregularVerbs')
    }

    const handleResetLocalstorage = () => {
        localStorage.removeItem('JSON_from_addIrregularVerbs');
    }

    const handleClickSaveToCacheMemory = () => {
        if (JSONtext && cacheMemory!== '') {
            setCacheMemory(cacheMemory + "," + JSONtext);
            setJSONtext('');
        } else {
            if (JSONtext && cacheMemory === '') {
                setCacheMemory(JSONtext);
                setJSONtext('');
            }
        }
    }

    const handleClickAddAllToDataBase = () => {
        if (JSONtext !== '') {
            handleClickSaveToCacheMemory();
            handleResetLocalstorage();
            setSendData(true);
        } else {
            if (cacheMemory !== '') {
                handleResetLocalstorage();
                setSendData(true);
            }
        }
    }

    const dispatch = useDispatch();
    
    useEffect(() => {
        if (sendData) {
            dispatch(addIrr(cacheMemory));
            setCacheMemory('');
            setSendData(false);
        }
    }, [sendData]);
    
    const loading = useSelector(state => state.addIrregularVerbs.loading);
    const data = useSelector(state => state.addIrregularVerbs.data);
    
    useEffect(() => {
        if (data) {
            if (data.errCode === 1) {
                setnotice({isshow: true, message: `Bộ từ bạn vừa thêm đã tồn tại trong dataBase và hệ thống đã bỏ qua quá trình thêm bộ này`, severity: "Thông Báo", type: "Notification Just Noitce"})
            }
            if (data.errCode === 0) {
                setnotice({isshow: true, message: `Bộ từ bạn vừa được thêm thành công vào dataBase!`, severity: "Thông Báo", type: "Notification Just Noitce"})
            }
            if (data.errCode === 2) {
                setnotice({isshow: true, message: `Có lỗi khi thêm bộ từ: ${data.message}`, severity: "Warning", type: "Notification Just Noitce"})
            }
        }
    }, [data])

    useEffect(() => {
        if (localStorage.getItem("JSON_from_addIrregularVerbs")) {
            setCacheMemory(localStorage.getItem("JSON_from_addIrregularVerbs"));
        }
    }, [])

    useEffect(() => {
        if (cacheMemory !== '' && cacheMemory) {
            localStorage.setItem('JSON_from_addIrregularVerbs', cacheMemory);
        }
    }, [cacheMemory])

    return (
        <>
            {loading &&  <LoadingModal/>}
            <ModalNotice show={notice.isshow} onHide={()=>setnotice(!notice.isshow)} message={notice.message} severity={notice.severity} type={notice.type}/>
            <div className={styles.container}>
                <div className={styles.containerInput}>
                    <textarea rows="15" cols="150" className={styles.inputField} placeholder="Enter your JSON" 
                    value={JSONtext}
                    onChange={(e) => {setJSONtext(e.target.value)}}></textarea>
                </div>
                <div className={styles.containerButton}>
                    <div className={`${styles.button} ${JSONtext === '' && styles.disabled}`}
                        onClick={() => {handleClickSaveToCacheMemory()}}>
                        Save to cache memory
                    </div>
                    <div className={`${styles.button} ${cacheMemory === '' && styles.disabled}`}
                        onClick={() => {handleClickAddAllToDataBase()}}>
                        Add all to Database
                    </div>
                    <div 
                        className={styles.button}
                        onClick={() => handleClickResetAll()}>
                        Reset cache memory
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddIrregularVerbs;