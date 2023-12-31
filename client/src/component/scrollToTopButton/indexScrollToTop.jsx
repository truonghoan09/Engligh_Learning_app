import { useState, useEffect } from 'react';
import styles from './scrollToTop.module.scss'

const ScrollToTop = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
    }

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Lắng nghe sự kiện scroll
    window.addEventListener('scroll', handleScroll);

    // Hủy lắng nghe khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, []); 
    return (
        <>
            {
                (scrollPosition > 0) && 
                <div className={styles.buttonScroll} onClick={()=>handleScroll()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square" viewBox="0 0 16 16">
                        <path  d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                    </svg>
                </div>
            }
        </>
    )
}

export default ScrollToTop;