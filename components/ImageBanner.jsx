'use client'

import { useRef, useState, useEffect } from "react";

const ImageBanner = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        if (imgRef.current.complete) {
            setIsLoaded(true);
        }
    }, [])

    return (
        <div className="banner-images">
            <img className="low-res-img" src="low_res/banner.jpeg"
             alt="banner-low-res" />
            <img ref={imgRef} className="high-res-img" src="med_res/banner.png"
             alt="banner-high-res" style={{opacity: isLoaded ? 1 : 0}} onLoad={() => {
                //Calls this callback function when the high res 
                //image finishes loading.

                //Intention is to toggle this image's invisibility off.

                setIsLoaded(true)

             }}/>
            
            <div className="cta-btns-container">
                <div>
                    <div>
                        <h3>Welcome to</h3>
                        <h1>The Main Store</h1>
                    </div>
                    <div>
                        <button>Shop stickers</button>
                        <button>Shop planners</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageBanner;