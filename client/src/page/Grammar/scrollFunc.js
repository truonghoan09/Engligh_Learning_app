import { useEffect } from "react";

const ScrollFunc = () => {
    const ScrollAndHightLight = (targetElementFromURL) => {
        const offset = targetElementFromURL.offsetTop - 30; // Điều chỉnh offset theo header và khoảng cách bạn muốn
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                    }); 

                window.history.replaceState({}, document.title, window.location.pathname);
    }

    useEffect(() => {
        const tocLinks = document.querySelectorAll('.toc-link');
        const targetSection = window.location.hash.substring(1);
        if (targetSection) {
            const targetElementFromURL = document.getElementById(targetSection);
            if (targetElementFromURL) {
                ScrollAndHightLight(targetElementFromURL);      
            }
        }
        
    
        tocLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    ScrollAndHightLight(targetElement);
                }
            });
        });
    }, []);
}

export default ScrollFunc;
