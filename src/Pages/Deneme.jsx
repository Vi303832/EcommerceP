import Carousel from "./Carousel";
import img1 from "../Assets/Hero.jpg";
import img2 from "../Assets/Hero2.jpg";
import img3 from "../Assets/Hero3.jpg";

export default function Deneme() {
    const slides = [img1, img2, img3,];

    return (
        <div className="relative overflow-hidden m-3 w-[70%] h-[70%]">
            <div className="max-w-lg *:">
                <Carousel slides={slides} />
            </div>
        </div>
    );
}