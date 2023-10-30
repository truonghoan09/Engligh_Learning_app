import { useEffect, useState } from 'react';
import styles from './addIrregularVerbs.module.scss'
import LoadingModal from '../../component/loadingModal/indexLoading';
import ModalNotice from '../../component/modalNotice/modalNotice';
import { useMutation } from 'react-query';
import axios from 'axios';
import { redirect } from 'react-router-dom';

const  AddIrregularVerbs = () => {
   

    const [JSONtext, setJSONtext] = useState('');
    const [cacheMemory, setCacheMemory] = useState('');
    const [sendData, setSendData] = useState(false);
    const [notice, setnotice] = useState({isshow: false, message: "", severity: "",type: ""});

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);


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

    const handleClickAddAllToDataBase = async () => {
        if (JSONtext !== '') {
            handleClickSaveToCacheMemory();
            handleResetLocalstorage();
            result.mutate({payload: cacheMemory});
            setCacheMemory('');
        } else {
            if (cacheMemory !== '') {
                handleResetLocalstorage();
                await result.mutate({payload: cacheMemory});
                setCacheMemory('');
            }
        }
    }

    const result = useMutation({
        mutationFn: async (cacheMemory) => {
            const response = await axios.post('http://localhost:8008/api/add_irregularverbs', cacheMemory)
            return response.data;
        }
    })
    
    useEffect(() => {
        if(result.error) {
            console.log(result.error);
        }
    }, [result.error]);
    

    useEffect(() => {
        if(result.data) {
            setData(result.data);
        }
    }, [result.data])

    useEffect(() => {
        setLoading(result.isLoading);
    }, [result.isLoading])
    
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