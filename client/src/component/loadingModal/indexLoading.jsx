import styles from "./loadingModal.module.scss";

const LoadingModal = () => {
    return (
        <>  
            <div className={styles.containerLoading}>
                <div className={styles.spin}></div>
            </div>     
        </>
    )
}

export default LoadingModal;