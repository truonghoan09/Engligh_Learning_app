import { useEffect, useRef, useState } from "react";
import styles from "./createJson.module.scss";
import {useDispatch, useSelector} from "react-redux";
import { uploadAndGetURL } from "../../redux/action";
import LoadingModal from "../../component/loadingModal/indexLoading";

const CreateJson = () => {

    //=======================================//
    // state lưu các input
    const [verb1, setVerb1] = useState('');
    const [verb2, setVerb2] = useState('');
    const [verb3, setVerb3] = useState('');

    const [IPA_verb1, setIPA_verb1] = useState('');
    const [IPA_verb2, setIPA_verb2] = useState('');
    const [IPA_verb3, setIPA_verb3] = useState('');

    const [soundVerb1, setSoundVerb1] = useState(null);
    const [soundVerb2, setSoundVerb2] = useState(null);
    const [soundVerb3, setSoundVerb3] = useState(null);

    const [URL_Verb1 ,setURL_Verb1] = useState(null);
    const [URL_Verb2 ,setURL_Verb2] = useState(null);
    const [URL_Verb3 ,setURL_Verb3] = useState(null);

    const [data, setData] = useState();
    const [checkedVerb ,setCheckedVerb] = useState(false);

    const [isCopied, setIsCopied] = useState(false);
    //=======================================//
    
    const audioRef1 = useRef(null)
    const audioRef2 = useRef(null)
    const audioRef3 = useRef(null)

    const handleClickCreateJSON = async() => {

        if (checkVal()) {
            dispatch(uploadAndGetURL(soundVerb1, '1'));
            dispatch(uploadAndGetURL(soundVerb2, '2'));
            dispatch(uploadAndGetURL(soundVerb3, '3'));
        } else {
            console.log('Nhập cho đủ dữ liệu');
        }
    }

    const checkVal = () => {
        return (verb1 && verb2 && verb3 && IPA_verb1 && IPA_verb2 && IPA_verb3 && soundVerb1 && soundVerb2 && soundVerb3);
    }

    const dispatch = useDispatch();
    const loading = useSelector(state => state.uploadAndGetFileReducer.loading);
    const payload = useSelector(state => state.uploadAndGetFileReducer.payload);
    const error = useSelector(state => state.uploadAndGetFileReducer.error);
    
    useEffect(() => {
        if (payload) {
            if (payload) {
                if (payload.status){
                    if (payload.status === '1') {
                        setURL_Verb1(payload.url);
                    }
                    if (payload.status === '2') {
                        setURL_Verb2(payload.url);
                    }
                    if (payload.status === '3') {
                        setURL_Verb3(payload.url);
                    }
                }
            } 
        }
    }, [payload]);

    // Lắng nghe lỗi tải lên hoặc lấy URL
    useEffect(() => {
        if (error) {
            console.log(error);
        }
    }, [error]);

    const fomatVerb = () => {
        setVerb1(`${verb1}1`);
        setVerb2(`${verb2}2`);
        setVerb3(`${verb3}3`);
        return (setCheckedVerb(true));
    }

    useEffect(() => {
        if (URL_Verb1 && URL_Verb2 && URL_Verb3) {
            fomatVerb();
        }
    }, [URL_Verb1, URL_Verb2, URL_Verb3]);

    useEffect(() => {
        if (checkedVerb) {
            createJSON();
        }
    }, [checkedVerb]);

    const createJSON = () => {
        setData ({
            [verb1] : {
                "status": "V1",
                "IPA": IPA_verb1,
                "Sound": URL_Verb1,
                "relative2": verb2,
                "relative3": verb3,
            },
            [verb2] : {
                "status": "V2",
                "IPA": IPA_verb2,
                "Sound": URL_Verb2,
                "relative1": verb1,
                "relative3": verb3,
            },
            [verb3] : {
                "status": "V3",
                "IPA": IPA_verb3,
                "Sound": URL_Verb3,
                "relative1": verb1,
                "relative2": verb2,
            },
        })
    }

    const handlePlaySound = (ref) => {
        if (ref===1) {
            audioRef1.current.play();
        } else {
            if (ref===2) {
                audioRef2.current.play();
            } else {
                audioRef3.current.play();
            }
        }
    }
    
    const handleClickCopy = (JSON) => {
        let data = JSON.slice(1, JSON.length-1);
        navigator.clipboard.writeText(data);

        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 2000); 
    }

    return(
        <>
            <div className={styles.container}>
                <div className={styles.verb}>
                    <div className={styles.input}>
                        <label>Verb 1</label>
                        <input type="text" onChange={(e) => setVerb1(e.target.value)}/>
                    </div>
                    <div className={styles.input}>
                        <label>IPA</label>
                        <input type="text" onChange={(e) => setIPA_verb1(e.target.value)}/>
                    </div>
                    <div className={styles.input}>
                        <label>Sound</label>
                        <input type="file" accept="audio/*" onChange={(e) => {setSoundVerb1(e.target.files[0])}}/>
                    </div>

                </div>
                <div className={styles.verb}>
                    <div className={styles.input}>
                        <label>Verb 2</label>
                        <input type="text" onChange={(e) => setVerb2(e.target.value)}/>
                    </div>
                    <div className={styles.input}>
                        <label>IPA</label>
                        <input type="text" onChange={(e) => setIPA_verb2(e.target.value)}/>
                    </div>
                    <div className={styles.input}>
                        <label>Sound</label>
                        <input type="file" accept="audio/*" onChange={(e) => {setSoundVerb2(e.target.files[0])}}/>
                    </div>
            
                </div>
                <div className={styles.verb}>
                    <div className={styles.input}>
                        <label>Verb 3</label>
                        <input type="text" onChange={(e) => setVerb3(e.target.value)}/>
                    </div>
                    <div className={styles.input}>
                        <label>IPA</label>
                        <input type="text" onChange={(e) => setIPA_verb3(e.target.value)}/>
                    </div>
                    <div className={styles.input}>
                        <label>Sound</label>
                        <input type="file" accept="audio/*" onChange={(e) => {setSoundVerb3(e.target.files[0])}}/>
                    </div>

                </div>
                <div className={styles.submitButton} onClick={() => {handleClickCreateJSON()}}>Create JSON</div>
                
                {URL_Verb1 &&
                    <>
                        <div onClick={()=> handlePlaySound(1)} className={styles.word}>{verb1}</div>
                        <audio ref={audioRef1} className={styles.audioControl} controls>
                            <source id="audioSource" src={URL_Verb1} type="audio/mpeg"/>
                        </audio>
                    </>
                }
                {URL_Verb2 &&
                    <>
                        <div onClick={()=> handlePlaySound(2)} className={styles.word}>{verb2}</div>
                        <audio ref={audioRef2} className={styles.audioControl} controls>
                            <source id="audioSource" src={URL_Verb2} type="audio/mpeg"/>
                        </audio>
                    </>
                }
                {URL_Verb3 &&
                    <>
                        <div onClick={()=> handlePlaySound(3)} className={styles.word}>{verb3}</div>
                        <audio ref={audioRef3} className={styles.audioControl} controls>
                            <source id="audioSource" src={URL_Verb3} type="audio/mpeg"/>
                        </audio>
                    </>
                }
                {data && 
                    <>
                        <div className={styles.output}>Your JSON is: {JSON.stringify(data)}</div>
                        <div className={`${styles.submitButton} ${styles.copyButton}`} onClick={() => handleClickCopy(JSON.stringify(data))}>
                            Copy JSON
                            {isCopied && <div className={styles.copiedNotification}>Copied!</div>}
                        </div>
                    </>
                }
                {loading && <LoadingModal/>}
            </div>
        </>
    )
}

export default CreateJson;