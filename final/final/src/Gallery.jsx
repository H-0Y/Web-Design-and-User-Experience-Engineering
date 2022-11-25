import './Gallery.css';
import Desert1 from "./images/Desert1.jpg"
import Bug from "./images/Bug.jpg"
import Desert2 from "./images/Desert2.jpg"
import Qing1 from "./images/Qing1.jpg"
import Qing2 from "./images/Qing2.jpg"
import Zang from "./images/Zang1.jpg"

function Gallery() {
    return (
        <div className="gallery">
            <div className='images'>
                <img src={Desert1} alt="The sunrise in the desert"/>
                <img src={Bug} alt="A bug I meet in my travel"/>
                <img src={Desert2} alt="We were walking in the desert"/>
                <img src={Qing1} alt="I was standing between mountains"/>
                <img src={Qing2} alt="I was standing besides the Qinghai Lake"/>
                <img src={Zang} alt="Me in Tibet"/>
            </div>
        </div>
    );
}

export default Gallery;