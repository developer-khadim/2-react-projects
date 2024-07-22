import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const ImgSlider = ({ url, limit }) => {
    const [images, setImages] = useState([]);
    const [curSlide, setCurSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {   
            setLoading(true);
            const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false); 
        }
    } 

    useEffect(() => {
        if (url !== '') fetchImages(url);
    }, [url]);

    if (loading) {
        return <div className="text-center"> Loading data! Please wait... </div>
    }

    if (errorMsg !== null) {
        return <div className="text-center"> Error occurred! {errorMsg} </div>
    }

    return (
        <div className='w-full h-screen flex justify-center items-center' >
        <div className="relative max-w-4xl mx-auto flex flex-col items-center justify-center">
            <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="flex transition-transform ease-out duration-500" 
                     style={{ transform: `translateX(-${curSlide * 100}%)` }}>
                    {images && images.length ? 
                        images.map(imageItem => (
                            <img 
                                key={imageItem.id}
                                alt={imageItem.download_url}
                                src={imageItem.download_url}
                                className="w-full h-96 object-cover"
                            />
                        ))
                    : null}
                </div>
            </div>

            <button 
                onClick={() => setCurSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                className="absolute top-1/2 left-2 -translate-y-1/2 text-white text-2xl">
                <BsArrowLeftCircleFill className="hover:text-gray-300 transition-colors" />
            </button>

            <button 
                onClick={() => setCurSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                className="absolute top-1/2 right-2 -translate-y-1/2 text-white text-2xl">
                <BsArrowRightCircleFill className="hover:text-gray-300 transition-colors" />
            </button>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={`
                              transition-all w-2 h-2 bg-white rounded-full
                              ${curSlide === i ? "p-2" : "bg-opacity-50"}
                            `}
                        />
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}

export default ImgSlider