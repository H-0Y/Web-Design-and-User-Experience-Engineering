import './Cards.css';
import Desert1 from "./images/Desert1.jpg"
import Bug from "./images/Bug.jpg"
import Desert2 from "./images/Desert2.jpg"
import Qing1 from "./images/Qing1.jpg"
import Qing2 from "./images/Qing2.jpg"
import Zang from "./images/Zang1.jpg"

function Cards({theme}) {

    // const card = images.map( item => {
    //     return (
            // <div className="card">
            //     <h2>{item.h2}</h2>
            //     <img src={require(`.${item.src}`)} alt={item.alt}/>
            //     <div className="description">
            //         {item.des}
            //     </div>
            // </div>
    //     )
    // });
    return (
        <div className={`cards cards-${theme}`}>
            <div className={`card ${theme}`}>
                <h2>Sunrise</h2>
                <img src={Desert1} alt="The sunrise in the desert"/>
                <p className="description">
                I enjoyed the most beautiful sunrise in the desert and dreamed of it many times.
                </p>
            </div>

            <div className={`card ${theme}`}>
                <h2>Bug in Travel</h2>
                <img src={Bug} alt="A bug I meet in my travel"/>
                <p className="description">
                A little interesting bug in my trip. It appears to be so beautiful with the vastful background.
                </p>
            </div>

            <div className={`card ${theme}`}>
                <h2>Walking in Desert</h2>
                <img src={Desert2} alt="We were walking in the desert"/>
                <p className="description">
                I spent three days and nights walking through the wild desert with a group of friends. It was a memorable experience.
                </p>
            </div>

            <div className={`card ${theme}`}>
                <h2>Between Mountains</h2>
                <img src={Qing1} alt="I was standing between mountains"/>
                <p className="description">
                You got the sense og splendour and majesty and grandeur about the mountains in Qinghai
                </p>
            </div>

            <div className={`card ${theme}`}>
                <h2>Besides Lake</h2>
                <img src={Qing2} alt="I was standing besides the Qinghai Lake"/>
                <p className="description">
                Standing besides the Qinghai Lake, you will feel like unpluging your mind and brain.
                </p>
            </div>

            <div className={`card ${theme}`}>
                <h2>Me in Tibet</h2>
                <img src={Zang} alt="Me in Tibet"/>
                <p className="description">
                Sacred Tibet purifies people's hearts and makes people feel the magnificence of nature.
                </p>
            </div>

        </div>
    );
}

export default Cards;