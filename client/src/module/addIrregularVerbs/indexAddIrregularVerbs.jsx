import { useEffect, useState } from 'react';
import styles from './addIrregularVerbs.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import LoadingModal from '../../component/loadingModal/indexLoading';
import { addIrregularVerbs } from '../../redux/action';

const  AddIrregularVerbs = () => {
   

    const [JSONtext, setJSONtext] = useState('');
    const [cacheMemory, setCacheMemory] = useState('');
    const [sendData, setSendData] = useState(false);


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
    const data = useSelector (state => state.addIrregularVerbsReducer.data);
    const loading = useSelector (state => state.addIrregularVerbsReducer.loading);
    const error = useSelector (state => state.addIrregularVerbsReducer.error);

    useEffect(() => {
        if (sendData) {
            console.log(cacheMemory);
            dispatch(addIrregularVerbs(cacheMemory));
            setCacheMemory('');
            setSendData(false);
        }
    }, [sendData]);

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
                        {
                            JSONtext === '' && <div className={styles.arlert}>Please enter your JSON into the input box.</div>
                        }
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