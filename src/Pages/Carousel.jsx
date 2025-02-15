import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({ autoSlide = false, autoSlideInterval = 3000, slides }) {
    const [curr, setCurr] = useState(0);
    const transitionRef = useRef(true);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval]);

    const prev = () => {
        setCurr((prev) => (prev === 0 ? slides.length : prev - 1));
        transitionRef.current = true;
    };

    const next = () => {
        setCurr((prev) => (prev === slides.length ? 0 : prev + 1));
        transitionRef.current = true;
    };

    useEffect(() => {
        if (curr === slides.length) {
            setTimeout(() => {
                transitionRef.current = false;
                setCurr(0);
            }, 500);
        }
    }, [curr]);

    return (
        <div className="  w-[100%] " ref={wrapperRef}>
            <div
                className="flex w-[100%]"
                style={{
                    transform: `translateX(-${curr * 100}%)`,
                    transition: transitionRef.current ? "transform 0.5s ease-out" : "none"

                }}
            >
                {[...slides, slides[0], slides[1], slides[2]].map((img, index) => (
                    <img key={index} src={img} alt="slide" className="w-[100%] object-cover flex h-[100vh]" />
                ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronLeft size={40} />
                </button>
                <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                    <ChevronRight size={40} />
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}
