import React, { useState, useEffect, useRef } from 'react'



export default function FadeIn(props) {
    const [isVisible, setVisible] = useState(true)
    const elemRef = useRef();

    useEffect(() => {
        // callback 
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        // Observer.observe is a method that detect what is on screen
        observer.observe(elemRef.current);

        return () => observer.unobserve(elemRef.current)

    }, [])

    return (

        <div
            className={`fadeInHook ${isVisible ? 'is-visibleHook' : ''}`}
            ref={elemRef}
        >
            {props.children}
        </div>

    )

}

