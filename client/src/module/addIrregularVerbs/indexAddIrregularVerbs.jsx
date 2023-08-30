import { useEffect, useState } from 'react';
import styles from './addIrregularVerbs.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import LoadingModal from '../../component/loadingModal/indexLoading';
import { addIrregularVerbs } from '../../redux/action';
import io from 'socket.io-client';

const  AddIrregularVerbs = () => {
    const generateUniqueId = () => {
        const randomId = Math.floor(10000 + Math.random() * 90000);
        return randomId.toString();
    }
    const socket = io("http://localhost:8008/");

    const handleClickSendDataToServer = () => {
        socket.emit('send-data-to-server', { message: 'Hello, Server!' });
    }

    const [JSONtext, setJSONtext] = useState('');
    const [cacheMemory, setCacheMemory] = useState('');
    const [sendData, setSendData] = useState(false);


    const handleClickResetCacheMemory = () => {
        setCacheMemory('');
    }

    const handleClickSaveToCacheMemory = () => {
        if (JSONtext) {
            setCacheMemory(cacheMemory + JSONtext);
            setJSONtext('');
        }
    }

    const handleClickAddAllToDataBase = () => {
        if (JSONtext !== '') {
            handleClickSaveToCacheMemory();
            setSendData(true);
        } else {
            if (cacheMemory !== '') {
                setSendData(true);
            }
        }
    }

    const dispatch = useDispatch();
    const data = useSelector (state => state.addIrregularVerbsReducer.data);
    const loading = useSelector (state => state.addIrregularVerbsReducer.loading);
    const error = useSelector (state => state.addIrregularVerbsReducer.error);

    useEffect(() => {
        // Lắng nghe sự kiện "overwrite-prompt" từ server
        socket.on('overwrite-prompt', ({ key }) => {
            const shouldOverwrite = window.confirm(`Data for key ${key} already exists. Do you want to overwrite?`);
            if (shouldOverwrite) {
                // Gửi lại thông điệp đồng ý ghi đè lên server
                socket.emit('overwrite-confirmed', { key });
            }
        });

        if (sendData) {
            console.log(cacheMemory);
            dispatch(addIrregularVerbs(cacheMemory, userId));
            setCacheMemory('');
            setSendData(false);
        }
    }, [sendData, socket]);

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
                        onClick={() => handleClickResetCacheMemory()}>
                        Reset cache memory
                    </div>
                </div>
            </div>
            <button onClick={() => handleClickSendDataToServer()}>
                Send Data to Server
            </button>
        </>
    )
}

export default AddIrregularVerbs;