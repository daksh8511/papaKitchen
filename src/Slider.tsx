import { useEffect, useState, useRef } from 'react';
import './Slider.css';

interface SliderProps {
    images: string[];
}

const Slider = ({ images: initialImages }: SliderProps) => {
    const [images, setImages] = useState(initialImages);
    const [isSwapping, setIsSwapping] = useState(false);

    // To avoid dealing with complex re-rendering states inside effect due to interval
    const isSwappingRef = useRef(isSwapping);

    useEffect(() => {
        isSwappingRef.current = isSwapping;
    }, [isSwapping]);

    useEffect(() => {
        const moveCard = () => {
            if (isSwappingRef.current) return;
            setIsSwapping(true);

            setTimeout(() => {
                setIsSwapping(false);
                setImages((prev) => {
                    const newImages = [...prev];
                    const last = newImages.pop();
                    if (last) {
                        newImages.unshift(last);
                    }
                    return newImages;
                });
            }, 1200);
        };

        const interval = setInterval(moveCard, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleCardClick = () => {
        if (isSwapping) return;
        setIsSwapping(true);

        setTimeout(() => {
            setIsSwapping(false);
            setImages((prev) => {
                const newImages = [...prev];
                const last = newImages.pop();
                if (last) {
                    newImages.unshift(last);
                }
                return newImages;
            });
        }, 1200);
    };

    return (
        <div className="stack" onClick={handleCardClick}>
            {images.map((img, index) => {
                const isLast = index === images.length - 1;
                return (
                    <div key={img} className={`card ${isLast && isSwapping ? 'swap' : ''}`}>
                        <img src={img} alt="" />
                    </div>
                );
            })}
        </div>
    );
};

export default Slider;
