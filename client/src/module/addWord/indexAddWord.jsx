import styles from "./addWord.module.scss";

const AddWord = () => {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.verb}>
                    <div className={styles.input}>
                        <label>Verb 1</label>
                        <input type="text" />
                    </div>
                    <div className={styles.input}>
                        <label>IPA</label>
                        <input type="text" />
                    </div>
                    <div className={styles.input}>
                        <label>Sound</label>
                        <input type="file" accept="audio/*"/>
                    </div>
                </div>
                <div className={styles.verb}>
                    <div className={styles.input}>
                        <label>Verb 2</label>
                        <input type="text" />
                    </div>
                    <div className={styles.input}>
                        <label>IPA</label>
                        <input type="text" />
                    </div>
                    <div className={styles.input}>
                        <label>Sound</label>
                        <input type="file" accept="audio/*"/>
                    </div>
                </div>
                <div className={styles.verb}>
                    <div className={styles.input}>
                        <label>Verb 3</label>
                        <input type="text" />
                    </div>
                    <div className={styles.input}>
                        <label>IPA</label>
                        <input type="text" />
                    </div>
                    <div className={styles.input}>
                        <label>Sound</label>
                        <input type="file" accept="audio/*"/>
                    </div>
                </div>
                <div className={styles.addWordButton}>Add Word</div>
                
            </div>
        </>
    )
}

export default AddWord;