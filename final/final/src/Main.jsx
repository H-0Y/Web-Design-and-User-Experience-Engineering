import Home from './Home';
import Cards from './Cards';
import Gallery from './Gallery';

function Main({page, showModal, setShowModal, className}) {
    return (
        <main className={`${className}`}>
            {(page === '/')&&<Home showModal={showModal} setShowModal={setShowModal}/>}
            {(page === '/Cards.html')&&<Cards theme={className}/>}
            {(page === '/Gallery.html')&&<Gallery/>}
        </main>
    );
}

export default Main;