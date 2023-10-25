import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useRef, useState} from 'react';
import styles from './irregularVerb.module.scss';
import LoadingModal from '../../../component/loadingModal/indexLoading';
import { getDataPending } from '../../../reudux_toolkit/slices/getDataIrregularVerbsPage';

const IrregularVerb = () => {

    const dispatch = useDispatch();
    
    const loading = useSelector(state => state.getDataIrr.loading);
    const data = useSelector(state => state.getDataIrr.data);
    const error = useSelector(state => state.getDataIrr.error);

    const [result, setResult] = useState();
    const [searchWord, setSearchWord] = useState('');
    
    useEffect(() => {
        if (error) {
            console.log(error);
        }
    }, [error])
    

    useEffect(() => {
        if (data) {
            if (data.errCode === 0) {
                if (searchWord === '') {
                    setResult(data.data);
                } else {
                    // Đang fillte
                    if (data.subData){
                    let removeArr = [];
                    let updatedResult = [...data.data];
                    data.subData.map((v,_) => {
                            for (const key in v) {
                                if (!key.includes(searchWord)) {
                                    updatedResult.map((v2,i) => {
                                        if (v2) {
                                            for (const key2 in v2) {
                                                if (key2) {
                                                    if (key2 === v[key].meaning) {
                                                        removeArr.push(i);
                                                    }
                                                }
                                            }
                                        }
                                    })
                                }
                            }
                        }
                    )
                        let count = [];
                        removeArr.map((v, _) => {
                            if (!count[v]) {
                                count[v] = 1;
                            } else {
                                count[v]++;
                            }
                        })
                        let c = 0;
                        while (c <= removeArr.length) {
                            if (count[removeArr[c]] < 3) {
                                removeArr.splice(c, 1);
                            } else {
                                c++;
                            }
                        }
                        removeArr.map((v,_) => {
                            delete updatedResult[v];
                        })

                        setResult(updatedResult);
                    }
                }
            }
        }
    }, [data, searchWord])

    useEffect(() => {
        dispatch(getDataPending());
    }, [])

    const getMeaning = (data) => {
        return (Object.keys(data)[0]);
    }
    const getverb = (data, num) => 
    {
        // let verb = Object.keys(data[0])[0];
        const meaning = Object.keys(data)[0];
        const verbObj = data[meaning][num-1];
        let verb = Object.keys(verbObj)[0];
        return(verb.slice(0, verb.length-1));
    }

    const getObj = (data, num) => {
        const meaning = Object.keys(data)[0];
        const verbObj = data[meaning][num-1];
        return (verbObj[Object.keys(verbObj)]);
    }

    const getIPA = (data, num) => {
        const Obj = getObj(data, num);
        const ipa = Obj.IPA
        return ipa;
    }

    const getURLsound = (data, num) => {
        const Obj = getObj(data, num);
        const sound = Obj.Sound;
        return sound;
    }

    const audioRefs = useRef([]);
    
    const handlePlaySound = (ref) => {
        const audioRef = audioRefs.current[ref];
        if (audioRef) {
            audioRef.play();
        }
    }


    const handleSetSearchword = (sWord) => {
        setSearchWord(sWord.toLowerCase());
    }

    return(
        <>
            <div className={styles.containerPage}>
            {loading && <LoadingModal />}
                <div className={styles.containerContent}>
                    <div className={styles.searchContainer}>Search Word
                        <div className={styles.inputArea}>
                            <input type='text' placeholder='Enter a word in English' 
                                onChange={(e) => handleSetSearchword(e.target.value)}
                                />
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className={styles.oridinalNumber}>Ordinal number</th>
                                <th className={styles.infinitiveVerb}>Infinitive Verb</th>
                                <th className={styles.pastTense}>Past Tense</th>
                                <th className={styles.pastParticiple}>Past participle</th>
                                <th className={styles.meaning}>Meaning</th>
                            </tr>
                        </thead>
                        {result && 
                            <tbody>
                                {
                                    result.map(( value , index) => { 
                                        return(
                                            <tr key={`index`+index}>
                                                <td>{index+1}</td>
                                                <td className={styles.word} onClick={()=> handlePlaySound(`${getverb(value, 1)}1`)}>{getverb(value, 1) }
                                                    <div className={styles.ipa}>{getIPA(value, 1)}</div>
                                                </td>
                                                <audio ref={(el) => (audioRefs.current[`${getverb(value, 1)}1`] = el)} className={styles.audioControl} controls>
                                                    <source id="audioSource" src={getURLsound(value, 1)} type="audio/mpeg"/>
                                                </audio>
                                                <td className={styles.word} onClick={()=> handlePlaySound(`${getverb(value, 2)}2`)}>{getverb(value, 2)}
                                                    <div className={styles.ipa}>{getIPA(value, 2)}</div>
                                                </td>
                                                <audio ref={(el) => (audioRefs.current[`${getverb(value, 2)}2`] = el)} className={styles.audioControl} controls>
                                                    <source id="audioSource" src={getURLsound(value, 2)} type="audio/mpeg"/>
                                                </audio>
                                                <td className={styles.word} onClick={()=> handlePlaySound(`${getverb(value, 3)}3`)}>{getverb(value, 3)}
                                                    <div className={styles.ipa}>{getIPA(value, 3)}</div>
                                                </td>
                                                <audio ref={(el) => (audioRefs.current[`${getverb(value, 3)}3`] = el)} className={styles.audioControl} controls>
                                                    <source id="audioSource" src={getURLsound(value, 3)} type="audio/mpeg"/>
                                                </audio>
                                                <td className={styles.word}>{getMeaning(value)}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        } 
                    </table>
                </div>
            </div>
        </>
        
    )
}

export default IrregularVerb;