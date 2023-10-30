import { useEffect, useState } from "react";
import styles from "./createJson.module.scss";
import LoadingModal from "../../component/loadingModal/indexLoading";
import ModalNotice from "../../component/modalNotice/modalNotice";
import { useMutation } from "react-query";
import { storage } from "../../App";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";


const CreateJson = () => {

    //=======================================//
    // state lưu các input
    const [verb1, setVerb1] = useState('');
    const [verb2, setVerb2] = useState('');
    const [verb3, setVerb3] = useState('');
    const [meaning, setMeaning] = useState('');

    const [IPA_verb1, setIPA_verb1] = useState('');
    const [IPA_verb2, setIPA_verb2] = useState('');
    const [IPA_verb3, setIPA_verb3] = useState('');

    const [soundVerb1, setSoundVerb1] = useState(null);
    const [soundVerb2, setSoundVerb2] = useState(null);
    const [soundVerb3, setSoundVerb3] = useState(null);

    const [URL_Verb1 ,setURL_Verb1] = useState(null);
    const [URL_Verb2 ,setURL_Verb2] = useState(null);
    const [URL_Verb3 ,setURL_Verb3] = useState(null);

    // const [canCreateJson, setCanCreateJson] = useState(false);

    const [data, setData] = useState();
    const [checkedVerb ,setCheckedVerb] = useState(false);

    const [isCopied, setIsCopied] = useState(false);
    //=======================================//

    const [notice, setnotice] = useState({isshow: false, message: "", severity: "",type: ""});

    const [loading, setLoading] = useState(false);

    const result = useMutation({
        mutationFn: async (data) => {
            const storageRef = ref(storage, `Sound_IrregularVerbs/${data.soundVerb.name}`);
            await uploadBytes(storageRef, data.soundVerb);
            const url = await getDownloadURL(storageRef);
            if(data.status === "1") {
                setURL_Verb1(url)
            }
            if(data.status === "2") {
                setURL_Verb2(url)
            }
            if(data.status === "3") {
                setURL_Verb3(url)
            }
        }   
    })

    useEffect(() => {
        setLoading(result.isLoading);
    }, [result.isLoading])

    

    useEffect(() => {
        if (result.error) {
            console.log(result.error.message);
        }
    }, [result.error])
    

    const handleClickCreateJSON = async() => {
        if (checkVal()) {   
            await result.mutate({soundVerb: soundVerb1, status:'1'})
            await result.mutate({soundVerb: soundVerb2, status:'2'})
            await result.mutate({soundVerb: soundVerb3, status:'3'})
        } else {
            setnotice({isshow: true, message: "Vui lòng nhập đầy đủ tất cả các ô input!", severity: "Thông Báo", type: "Notification Just Noitce"})
        }
    }

    const checkVal = () => {
        return (verb1 && verb2 && verb3 && IPA_verb1 && IPA_verb2 && IPA_verb3 && soundVerb1 && soundVerb2 && soundVerb3 && meaning);
    }


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
                "meaning" : meaning,
            },
            [verb2] : {
                "status": "V2",
                "IPA": IPA_verb2,
                "Sound": URL_Verb2,
                "relative1": verb1,
                "relative3": verb3,
                "meaning" : meaning,
            },
            [verb3] : {
                "status": "V3",
                "IPA": IPA_verb3,
                "Sound": URL_Verb3,
                "relative1": verb1,
                "relative2": verb2,
                "meaning" : meaning,
            },
        })
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
            <ModalNotice show={notice.isshow} onHide={()=>setnotice(!notice.isshow)} message={notice.message} severity={notice.severity} type={notice.type}/>
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
                <div className={styles.meaning}>
                    <label>Meaning</label>
                    <input type="text" className={styles.input} onChange={(e) => setMeaning(e.target.value)}/>
                </div>
                <div className={styles.submitButton} onClick={() => {handleClickCreateJSON()}}>Create JSON</div>
                
                {/* {URL_Verb1 &&
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
                } */}
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